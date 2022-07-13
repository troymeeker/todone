import React, { useState } from 'react'

function TodoForm({ tasks, setTasks}) {
 
    const [input, setInput] = useState('')

    function handleChange(e){
        
        setInput(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault();

       const newTodo = ({
            id: Math.floor(Math.random() * 1000),
            text:input, 
            completed:false
        })

        setInput('');
        setTasks([...tasks,].concat(newTodo)); 
    }
    
  return (
    <div>  
        <form className='todo-form' onSubmit={handleSubmit}>
        <input 
         type='text'
         className='new-list'
         placeholder='new task'
         value={input}
         name='text'
         onChange={handleChange}

        />

         <button className="plus-button" >+</button>
        </form>
    </div>
  )
}

export default TodoForm