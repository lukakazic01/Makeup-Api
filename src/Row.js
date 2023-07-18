
import './App.css'
export default function Row ({item}) {
    return (
            <tr>
                <td>{item.id}</td>
                <td className="text-ellipsis">{item.name}</td>
                <td>{item.rating}</td>
                {item['product_colors'].map((color, index) => (
                    <td key={index} style={{backgroundColor: color.hex_value}}>{color.hex_value}</td>
                ))}
                <td>{item.brand}</td>
            </tr>
    )
}