
function Right(){
    function handleClear(e){
        e.preventDefault();
        console.log('clear');
    }
    function handleDelete(e){

        e.preventDefault();
        console.log('delete');
    }
    function handleAddnewItem(e){
        e.preventDefault()
        console.log('add new item to list');
    }
    function handleCrossItem(){
        console.log('cross out this item');
    }
return(
    <div className="right">
    <div className="current-list">

        <div className="current-header">
            <h2>Current List</h2>
            <p className="task-count">3 Items remaining</p>
        </div>

        <div className="list-tasks">
            <div className="each-task" onClick={handleCrossItem}> 
                <input type="checkbox" id="task-1"/>
                <label htmlFor="task-1" className="item">Bread</label>
            </div>

            <div className="each-task"> 
                <input type="checkbox" id="task-2"/>
                <label htmlFor="task-2" className="item">Apples</label>
            </div>

            <div className="each-task"> 
                <input type="checkbox" id="task-3"  />
                <label htmlFor="task-3" className="item">Beer</label>
            </div>
            
           
       </div> 

          
        <div className="">
            <form action="">
                <input 
                    type="text"
                    className="new-list"
                    placeholder="enter new task"/>
                <button className="plus-button" onClick={handleAddnewItem}>+</button>
            </form>
        </div>

    </div> 

        <button className="clear-button" onClick={handleClear}>clear complete items</button>
        <button className="del-button" onClick={handleDelete}>delete list</button>
        {/* <button>Hide List</button> */}
   
    </div>
   
)
}
export default Right; 