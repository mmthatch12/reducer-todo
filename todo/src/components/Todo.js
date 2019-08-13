import React, { useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/reducer'

const Todo = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log('state in Todo.js', state) 
    return (
        <div key={state.id}>
            <h1>{state.item}</h1>
        </div>
    )
}

export default Todo