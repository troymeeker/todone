import React, {useState} from 'react'


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('')
    const [edit, setEdit] = useState(null)
    const [editText, setEditText] = useState('')
    

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


    function removeTask(id){
        const updatedTasks = [...tasks].filter((task) => task.id !== id)
      setTasks(updatedTasks)
        
    }
    
    function completeTask(id){
        let updatedTasks = tasks.map((task) => {
            if(task.id === id){
              task.completed = !task.completed
            }
            return task
        })
        setTasks(updatedTasks);
    
    }

    function toggleComplete(id){
        const updatedTasks = [...tasks].map(() => {
            if(task.id === id){
                task.completed = !task.completed
            }
            return task
        })

        setTasks(updatedTasks)
    }
    function editTask(id){
        const newTasks = [...tasks].map((task) => {
            if(task.id === id){
                task.text = editText
            }
            return task
        })
        setTasks(newTasks)
        setEdit(null)
        setEditText('')
        
    }
 
  return (
    <div > 
     
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=> setTask(e.target.value)} value={task}/>
            <button type='submit'>submit</button>

        </form>
       
        {tasks.map((task) => (
            <div key={task.id} onChange={ () => completeTask(task.id)} className="item" value={task}>
      
            {edit === task.id ? <input 
                type='text' 
                onChange={(e) => setEditText(e.target.value)} 
                value={editText}
              /> : <div>{task.text}</div> }
              
             

              <button  className='edit-del-buttons' onClick={() => removeTask(task.id)} > x </button>
                 <input 
                    type='checkbox' 
                     onChange={() => toggleComplete(task.id)}
                    checked={task.completed}

                 />
                {task.id === edit ?     
                    <button onClick={() => editTask(task.id)}>Confirm Edit</button>
                     : 
                    <button onClick={() => setEdit(task.id)}>Edit Task</button>  }
                
            </div>
         ))}
    </div>
  )
}

export default TodoList