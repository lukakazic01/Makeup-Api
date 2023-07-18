
export default function Basket ({isBasketOpened, basketItems, handleIncreasing, handleDecreasing, handleCheckout}) {
    if (basketItems?.length > 0 && isBasketOpened) {
        return (
            <table>
                <tr>
                    <th>id</th>
                    <th>rating</th>
                    <th>name</th>
                </tr>
                <tbody>
                    {basketItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <button onClick={() => handleIncreasing(item)}>+</button>
                                {item.rating}
                                <button onClick={() => handleDecreasing(item)}>-</button>
                            </td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
                <button onClick={() => handleCheckout(basketItems)}>checkout</button>
            </table>
        )
    } else {
        return <><p>{isBasketOpened && 'no items'}</p></>
    }
}