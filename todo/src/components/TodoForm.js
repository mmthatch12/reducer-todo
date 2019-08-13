import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/reducer'


import Todo from './Todo'

const TodoForm = () => {
    const[newTodo, setNewTodo] = useState()

    const[state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state)

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
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button 
                    onClick={() => 
                    dispatch({ type: 'ADD_TODO', payload: newTodo })}>Add Todo</button>
            </form>
            {state.things.map(todo => 
               <h2>{todo.item}</h2>
            )}
        </div>

    )
}

export default TodoForm