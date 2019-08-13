import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/reducer'



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
                <div >

                    <h2 className='task'>{todo.item}</h2>
                    <h2>{todo.id}</h2>
                    <h2>done:{todo.completed ? 'false' : 'true'}</h2>
                    <button onClick={() => dispatch({ type: 'TOGGLE_COMPLETED'})}>Done?</button>
               </div>
            )}
        </div>

    )
}

export default TodoForm