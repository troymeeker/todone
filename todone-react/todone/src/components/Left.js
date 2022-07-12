
import AddList from "./AddList";

function Left(){
    function handleAddList(e){
        e.preventDefault();
        console.log(e.target.value);
    }
    return(
        <div className="left">
        <div className="list-container">
            
            <div className="task-list-title">
                <h3>My Lists</h3>
            </div>
            
           
            <AddList handleAddList={handleAddList}/>
          
        </div>
    </div>
    )
    }
    export default Left; 