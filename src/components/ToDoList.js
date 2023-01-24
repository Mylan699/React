import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    return (
        <div>
            <h1>Qu'est ce que tu as à faire aujourd'hui ?</h1>
            <ToDoForm onSubmit={addTodo} />
        </div>
    )
    }

export default ToDoList