let items = ['New York', 'Karachi', 'Islamabad', 'Daharki', 'Lahore']
items = [] 
let message = (items.length === 0 ? <h1>No items found</h1> : null)
function ListGroup() {

    return <>
        {message}
        <ul className="list-group">
            {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
        </ul></>
}

export default ListGroup