let items = ['New York', 'Karachi', 'Islamabad', 'Daharki', 'Lahore']

// function getMessage() {
//     return items.length === 0 ? <h1>No items found</h1> : null
// }

function ListGroup() {

    return <>
        {items.length === 0 && <h1>No items found</h1>}
        <ul className="list-group">
            {items.map((item,index) => 
                <li 
                    key={item} 
                    className="list-group-item" 
                    onClick={() => console.log(item, index)} >{item}
                </li>
            )}
        </ul></>
}

export default ListGroup