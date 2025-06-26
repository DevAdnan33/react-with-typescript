import { MouseEvent, useState } from 'react'

function ListGroup() {

    let items = ['New York', 'Karachi', 'Islamabad', 'Daharki', 'Lahore']
    const [selectedItem, setSelectedItem] = useState(-1)
    const [selectedFlag, setSelectedFlag] = useState(false);
    let [count, setCount] = useState(0)
    
    function setFlag() {
        setSelectedFlag(true);
        console.log(selectedFlag)
        return true;
    }

    function counter() {
        let newCount = count + 1
        setCount(newCount)
        console.log("-> " + newCount)
        return newCount
    }

    return <>
        {items.length === 0 && <h1>No items found</h1>}
        <ul className="list-group">
            {items.map((item, index) =>
                <li
                    key={item}
                    className={selectedItem === index ? "list-group-item active" : "list-group-item"}
                    onClick={counter} >{item}
                </li>
            )}
        </ul></>
}

export default ListGroup