import TodoList from "./TodoList";

function Right(){

 
return(

   <div className="right">
  
    <div className="todo-app">

        <div className="current-header">
            <h2>Current List</h2>
           
        </div>

        <div className="list-tasks">
          
            <TodoList />
           
        </div> 

    </div> 

  </div>
   
)
}
export default Right; 