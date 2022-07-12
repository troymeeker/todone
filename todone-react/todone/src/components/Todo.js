import React, {useState} from 'react'
// import TodoForm from './TodoForm'

function Todo({tasks, completeTask, removeTask}) {
    const [edit, setEdit] = useState({
        id:null, 
        value: ''
    })

    // function removeTask(id){
    //     console.log( );
        
    // }


  return tasks.map((task, index) => (
    <div className={task.isComplete ? 'complete' : 'todo-row' } key={index}
    >
        <div key={task.id} onClick={ ()=> completeTask(task.id)} className="item">
        <span className="custom-checkbox"></span>{task.text} 
        <button onClick={() => removeTask(task.id)}>remove</button>
        <button onClick={() => {
            setEdit({
                id: task.id,
                value:task.text
            })
        }}> Edit </button>
        </div>


   </div>
  ) )
}

export default Todo