import { useState } from "react";

import TodoList from "./TodoList";

function Right(){
  const [value, setValue] = useState('')

   
    function handleAddnewItem(){
        // e.preventDefault()
        
     
    }
 
return(

   <div className="right">
  
    <div className="current-list">

        <div className="current-header">
            <h2>Current List</h2>
            {/* <p className="task-count">3 Items remaining</p> */}
        </div>

        <div className="list-tasks">
            {/* <EachTask /> */}
            <TodoList />
           
        </div> 
       
  
   
    </div> 

       
    </div>
   
)
}
export default Right; 