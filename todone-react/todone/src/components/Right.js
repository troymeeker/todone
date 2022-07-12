
 import ListForm from "./ListForm";

function Right(){
  

    function handleClear(e){
        e.preventDefault();
        // console.log('clear');
    }
    function handleDelete(e){

        e.preventDefault();
        // console.log('delete');
    }
    function handleAddnewItem(e){
        e.preventDefault()
     
    }
    function handleCrossItem(){
        // console.log('cross out this item');
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
                
                <label htmlFor="task-1" className="item">   
                  <span className="custom-checkbox"></span>
                  Item 1
                </label>
            </div>

            <div className="each-task"> 
                <input type="checkbox" id="task-2"/>
                <label htmlFor="task-2" className="item">
                <span className="custom-checkbox"></span>
                    Item 2
                 </label>
            </div>

            <div className="each-task"> 
                <input type="checkbox" id="task-3"  />
                <label htmlFor="task-3" className="item">
                    
                <span className="custom-checkbox"></span>
                    Item 3
                </label>
            </div>
            
           
       </div> 

          
        <div className="task-bar">
          <ListForm handleAddnewItem={handleAddnewItem}/>
             
        </div>

     

        <div className="delete-stuff">
            <button className="clear-button" onClick={handleClear}>clear complete items</button>
            <button className="del-button" onClick={handleDelete}>delete list</button>
       
        </div>
       
  
   
    </div> 

       
    </div>
   
)
}
export default Right; 