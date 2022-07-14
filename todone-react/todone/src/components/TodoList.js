import React, { useState, useEffect} from 'react';

function TodoList() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
    const [task, setTask] = useState('')
    const [edit, setEdit] = useState(null)
    const [editText, setEditText] = useState('')

    useEffect(() => {
        const taskData = JSON.parse(localStorage.getItem('tasks'))
        if(taskData){
            setTasks(taskData)
        }
    },[])


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))

    },[tasks])
    

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
            <input type='text' required onChange={(e)=> setTask(e.target.value)} value={task} className='task-input'/>
            <button type='submit' className='plus-button'>+</button>

        </form>
       
        {tasks.map((task) => (
            <div key={task.id} onChange={ () => completeTask(task.id)} className="item" value={task}>
      
            {edit === task.id ? <input 
                type='text' 
                onChange={(e) => setEditText(e.target.value)} 
                value={editText}
              /> : <p className={task.completed ? 'complete' : 'task-text' }>{task.text}</p> }
              
             

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

export default TodoList;