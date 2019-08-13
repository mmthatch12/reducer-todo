import React from 'react'

import { initialState, todoReducer } from '../reducers/reducer'
import Todo from './Todo'

const TodoForm = () => {
    return(
        <div>
            <form>
                <input 
                    placeholder="next Todo"
                    value={name}
                />
            </form>
            <Todo />
        </div>

    )
}

export default TodoForm