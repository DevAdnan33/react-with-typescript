import {MouseEvent} from 'react'

let items = ['New York', 'Karachi', 'Islamabad', 'Daharki', 'Lahore']

// function getMessage() {
//     return items.length === 0 ? <h1>No items found</h1> : null
// }

const handleClick = (event : MouseEvent) => console.log(event)

function ListGroup() {

    return <>
        {items.length === 0 && <h1>No items found</h1>}
        <ul className="list-group">
            {items.map((item,index) => 
                <li 
                    key={item} 
                    className="list-group-item" 
                    onClick={handleClick} >{item}
                </li>
            )}
        </ul></>
}

export default ListGroup