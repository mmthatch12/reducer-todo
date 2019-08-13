import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/reducer'


import Todo from './Todo'

const TodoForm = () => {

    const[state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state)

    return(
        <div>
            <form>
                <input 
                    placeholder='next Todo'
                    name='item'
                />
                <button type="submit">Add Todo</button>
            </form>
            <Todo />
        </div>

    )
}

export default TodoForm