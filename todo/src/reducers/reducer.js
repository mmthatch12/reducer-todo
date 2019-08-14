export const initialState = {
    tasks:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987489
}]}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, 
                tasks: [...state.tasks,
                {item: action.payload,
                completed: false,
                id: Date.now()}]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload) {
                        return{
                            ...task,
                            completed: !task.completed
                        }
                    } else {
                        return task;
                    }
                })
            }
        default:
            return state
    }

}