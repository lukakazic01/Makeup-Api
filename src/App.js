import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Row from "./Row";
import Filters from "./FIlters";
function App() {
  const [data, setData] = useState(null);
  const [initalData, setInitalData] = useState(null);
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
  return (
    <div>
      <Filters handleFilters={handleFilters}/>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>rating</th>
            <th>color</th>
            <th>brand</th>
          </tr>
        </thead>
        <tbody>
        {data && data.map((item) => (
            <Row item={item} key={item.id}/>
        ) )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
