// import { useState } from "react";

function EachList(){
    // const [lists, setLists] = useState([])

    // const lists = lists.map(
    //     //for each list element, make a new li 
    // )
    return(
        <div>
            <ul className="task-lists" >
                <li className="list-name">Grocery</li>
                <li className="list-name">Home Chores</li>
                <li className="list-name">Long Term</li><br/>
            </ul>
        </div>
    )
}

export default EachList;