import { MouseEvent, useState } from 'react'

function ListGroup() {

    let items = ['New York', 'Karachi', 'Islamabad', 'Daharki', 'Lahore']
    const [selectedItem, setSelectedItem] = useState(-1)

    return <>
        {items.length === 0 && <h1>No items found</h1>}
        <ul className="list-group">
            {items.map((item, index) =>
                <li
                    key={item}
                    className={selectedItem === index ? "list-group-item active" : "list-group-item"}
                    onClick={() => { setSelectedItem(index) }} >{item}
                </li>
            )}
        </ul></>
}

export default ListGroup