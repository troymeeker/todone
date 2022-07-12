import React, {useState} from 'react'
import TodoForm from './TodoForm'


function Todo({tasks, completeTask, removeTask, updateTask}) {
    const [edit, setEdit] = useState({
        id: null, 
        value: ''
    });


    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null, 
            value: ''
        });
     };

     if(edit.id){
         return <TodoForm edit={edit} onSubmit={submitUpdate} />;
     }
    


  return tasks.map((task, index) => (
    <div className={task.isComplete ? 'complete' : 'todo-row' } key={index}
    >
        <div key={task.id} onClick={ () => completeTask(task.id)} className="item">
        <span className="custom-checkbox"></span>{task.text} 
        <button  className='edit-del-buttons' onClick={() => removeTask(task.id)} >remove</button>
        <button  className='edit-del-buttons'onClick={() => setEdit({id: task.id, value: task.text })}
        > Edit </button>
        </div>


   </div>
  ) )
}

export default Todo