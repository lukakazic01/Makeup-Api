
import './App.css'
export default function Row ({item, handleAddingToBasket}) {
    return (
            <tr>
                <td>{item.id}</td>
                <td className="text-ellipsis">{item.name}</td>
                <td>{item.rating}</td>
                <td className="scroll-on-colors">
                {item['product_colors'].map((color, index) => (
                        <span key={index} style={{backgroundColor: color.hex_value}}>{color.hex_value}</span>
                ))}
                </td>
                <td>{item.brand}</td>
                <td><button onClick={() => handleAddingToBasket(item)} className="basket-btn">add to basket</button></td>
            </tr>
    )
}