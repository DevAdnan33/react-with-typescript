let items = ['New York', 'Karachi', 'Islamabad', 'Daharki', 'Lahore']
items =[]
function getMessage() {
    return items.length === 0 ? <h1>No items found</h1> : null
}
function ListGroup() {

    return <>
        {getMessage()}
        <ul className="list-group">
            {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
        </ul></>
}

export default ListGroup