import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Row from "./Row";
import Filters from "./FIlters";
import Basket from "./Basket";
import Checkout from "./Checkout";

function App() {
  const [data, setData] = useState(null);
  const [initalData, setInitalData] = useState(null);
  const [isBasketOpened, setIsBasketOpened] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [isCheckoutOpened, setIsCheckoutOpened] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState(null);
  useEffect(() => {
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json').then((res) => {
      const {data} = res;
      const sorted = data.sort((a, b) => b.rating - a.rating);
      const hasMoreThanThree = sorted.filter((item) => item.rating > 3);
      setData(hasMoreThanThree);
      setInitalData(hasMoreThanThree);
    })
  },[])

  const handleFilters = (filters) => {
    const [anada, nyx] = filters;
    if (anada) {
      setData(data.filter((item) => item.brand === anada))
    }
    if (nyx) {
      setData(data.filter((item) => item.brand === nyx))
    }
    if (!anada && !nyx) {
      setData(initalData)
    }
  }

  const handleSearch = (e) => {
    const {value} = e.target
    const searched = data.filter((item) => {
      if (Object.values(item).join(",").toLowerCase().includes(value.toLowerCase())) {
        return item
      }
    })
    if(searched.length > 0 && value !== '') {
      setData(searched)
    } else {
      setData(initalData)
    }
  }

  const handleAddingToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  }

  const handleIncreasing = (item) => {
    setBasketItems(basketItems.map((basket) => {
      if (basket.name === item.name) return {...basket, rating: basket.rating + 1}
      return basket
    }))
  }

  const handleDecreasing = (item) => {
    setBasketItems(basketItems.map((basket) => {
      if (basket.name === item.name) return {...basket, rating: basket.rating - 1}
      return basket
    }))
  }

  const handleCheckout = (items) => {
    setCheckoutItems([...items]);
  }
  return (
      <>
      {data &&
      <div className="scroll">
      <input onChange={(e) => handleSearch(e)} />
      <Filters handleFilters={handleFilters}/>
      <table>
        <thead>
          <tr className="table">
            <th>id</th>
            <th>name</th>
            <th>rating</th>
            <th>color</th>
            <th>brand</th>
            <th>basket</th>
          </tr>
        </thead>
        <tbody>
        {data && data.map((item) => (
            <Row item={item} key={item.id} handleAddingToBasket={handleAddingToBasket}/>
        ) )}
        </tbody>
      </table>
    </div>}
   <button onClick={() => setIsBasketOpened(p => !p)}>{isBasketOpened ? 'close basket' : 'show basket'}</button>
   <Basket
       isBasketOpened={isBasketOpened}
       basketItems={basketItems}
       handleIncreasing={handleIncreasing}
       handleDecreasing={handleDecreasing}
       handleCheckout={handleCheckout}
   />
   <button onClick={() => setIsCheckoutOpened(p => !p)}>{isCheckoutOpened ? 'close checkout' : 'show checkout'}</button>
   <Checkout items={checkoutItems} isCheckoutOpened={isCheckoutOpened} />
   </>
  )
}

export default App;
