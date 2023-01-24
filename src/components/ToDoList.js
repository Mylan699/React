import React, {useState} from 'react'
import ToDo from './ToDo';
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

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
        
    };

    return (
        <div>
            <h1>Qu'est ce que tu as à faire aujourd'hui ?</h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo todo={todos} completeTodo={completeTodo} />
        </div>
    )
    }

export default ToDoList