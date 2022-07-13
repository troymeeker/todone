import React, {useState} from 'react'


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('')

function handleSubmit(e){
e.preventDefault();

const newTodo = {
    id: Math.floor(Math.random() * 1000),
    text: task, 
completed: false
}
setTask('')
setTasks([...tasks].concat(newTodo))

}
    // function updateTask(taskId, newValue ){
    //     if(!newValue.text || /^\s*$/.test(newValue.text)){
    //         return;
    //     }
    //     setTasks((prev) => prev.map(item => item.id === taskId ? 
    //      newValue : item ))
    // }

    function removeTask(id){
        const updatedTasks = [...tasks].filter((task) => task.id !== id)
      setTasks(updatedTasks)
        
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
    <div > 
     
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=> setTask(e.target.value)} value={task}/>
            <button type='submit'>submit</button>

        </form>
       
        {tasks.map((task) => (
            <div key={task.id} onChange={ () => completeTask(task.id)} className="item" value={task}>
      
              {task.text} 
              <button  className='edit-del-buttons' onClick={() => removeTask(task.id)} > x </button>
                 {/* <button  className='edit-del-buttons'onClick={() => setEdit({id: task.id, value: task.text })}
                     > Edit </button> */}
            </div>
         ))}
    </div>
  )
}

export default TodoList