import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

function ToDo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


  return todos.map((todo, index) => (
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}>

          <div key={todo.id} onClik={() => completeTodo(todo.id)}>
              
          </div>

      </div>
  ))
}

export default ToDo