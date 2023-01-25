import React, { useState, useEffect, uesRef, useRef } from 'react';

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value
    : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
            
      <input
        type="text"
        placeholder="Ecrire votre tache"
        value={input} name="text"
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Ajouter à faire </button>
    </form>
  )

}
export default ToDoForm