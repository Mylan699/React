import React, { useState } from 'react';
import TodoForm from './ToDoForm';
import Todo from './ToDo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        //j'ai laissé volontairement un console.log ici car il ma été utile quand j'ai codé
        setTodos(newTodos);
        console.log(...todos);
    };

    //test l'entrée utilisateur 
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    //déclaration de la variable pour suppression d'une tâche 
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id); //créer le tableau removeArr en récupérant les id sauf celui séléctionner

        setTodos(removedArr);
    };

    //déclaration de la variable pour validation d'une tâche 
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    //Titre afficher sur la page 
    return (
        <>
            <h1>Qu'est ce que tu as à faire Aujourd'hui</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;