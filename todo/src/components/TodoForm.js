import React from 'react'


import Todo from './Todo'

const TodoForm = (props) => {
    console.log('props', props)

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
            <h2>{props.initialState.item}</h2>
        </div>

    )
}

export default TodoForm