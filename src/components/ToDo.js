import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function ToDo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


  return todos.map((todo, index) => (
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}>

          <div key={todo.id} onClik={() => completeTodo(todo.id)}>
             {todo.text} 
          </div>
          <div className='icons'>
              <RiCloseCircleLine />
              <TiEdit />
          </div>

      </div>
  ))
}

export default ToDo