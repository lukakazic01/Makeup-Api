
import './App.css'
export default function Row ({item, handleAddingToBasket}) {
    return (
            <tr>
                <td>{item.id}</td>
                <td className="text-ellipsis">{item.name}</td>
                <td>{item.rating}</td>
                <div className="scroll-on-colors">
                {item['product_colors'].map((color, index) => (
                        <td key={index} style={{backgroundColor: color.hex_value}}>{color.hex_value}</td>
                ))}
                </div>
                <td>{item.brand}</td>
                <td><button onClick={() => handleAddingToBasket(item)} className="basket-btn">add to basket</button></td>
            </tr>
    )
}