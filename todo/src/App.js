import React, { useReducer } from 'react'
import './App.css';

import { initialState, todoReducer } from './reducers/reducer'
import Todoform from './components/TodoForm'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)


    console.log('state in Todo.js', state) 
    return (
      <div>
        <div key={state.id}>
            <h1>{state.item}</h1>
        </div>
        <Todoform state={state} dispatch={dispatch} todoReducer={todoReducer} initialState={initialState}/>
      </div>
    )
}

export default App;
