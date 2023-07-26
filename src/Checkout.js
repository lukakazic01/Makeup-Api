

export default function Checkout ({items, isCheckoutOpened}) {
    if (items && isCheckoutOpened) {
        return (
            <>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>rating</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.rating}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    } else {
        return (
            <><p>{isCheckoutOpened && 'no items'}</p></>
        )
    }
}