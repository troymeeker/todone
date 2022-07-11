
function Left(){
    function handleAddList(e){
        e.preventDefault();
        console.log('new list');
    }
    return(
        <div className="left">
        <div className="list-container">
            <div className="task-list-title">
                <h3>My Lists</h3>
            </div>
            <ul className="task-lists" >
                <li className="list-name">Grocery</li>
                <li className="list-name">Home Chores</li>
                <li className="list-name">Long Term</li><br/>
            </ul>
            <form action="">
                <input 
                type="text"
                className="new-list"
                placeholder="new list name"/>
                <button className="plus-button" onClick={handleAddList}>+</button>
            </form>
        </div>
    </div>
    )
    }
    export default Left; 