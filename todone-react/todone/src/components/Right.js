import TodoList from "./TodoList";

function Right(){

return(

   <div className="right">
    <div className="todo-app">
        <div>
            <h2 className="current-header">Current List</h2>
        </div>
        <div className="list-tasks">
            <TodoList />
           
        </div> 
    </div> 
  </div>
   
)
}
export default Right; 