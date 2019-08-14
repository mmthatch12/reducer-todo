import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/reducer'



const TodoForm = () => {
    const[newTodo, setNewTodo] = useState()

    const[state, dispatch] = useReducer(todoReducer, initialState)

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChanges = event => {
        setNewTodo(event.target.value)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='next Todo'
                    type='text'
                    name='item'
                    onChange={handleChanges}
                />
                <button 
                    onClick={() => 
                    dispatch({ type: 'ADD_TODO', payload: newTodo })}>Add Todo</button>
                <button
                    onClick={() => 
                    dispatch({ type: 'CLEAR_COMPLETED', payload: newTodo})}>Clear Completed Tasks</button>
            </form>
            {state.tasks.map(todo => 
                <div key={todo.id}>
                    <h2 className={`task${todo.completed ? ' completed' : ''}`}
                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id }) }>{todo.item}</h2>
               </div>
            )}
        </div>

    )
}

export default TodoForm