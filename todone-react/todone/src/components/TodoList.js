import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    function addTask(task){

        if(!task.text || /^\s*$/.test(task.text)){
            return;
        }

        const newTasks = [task, ...tasks];

        setTasks(newTasks);
        // console.log(...tasks);
    }
  
    function removeTask(id){
        const removeArr = [...tasks].filter(task => task.id !== id)
        setTasks(removeArr);
    }

    function completeTask(id){
        let updatedTasks = tasks.map((task) => {
            if(task.id === id){
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks);
    
    }
 
  return (
    <div> 
            
       
        <Todo tasks={tasks} completeTask={completeTask} removeTask={removeTask}/>
        <TodoForm onSubmit={addTask} />
        
</div>
  )
}

export default TodoList