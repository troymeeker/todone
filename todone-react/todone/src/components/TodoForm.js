import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    function handleChange(e){
        
        setInput(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text:input
        })

        setInput('');
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