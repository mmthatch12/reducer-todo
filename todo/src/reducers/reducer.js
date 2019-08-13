export const initialState = {
    things:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987489
}]}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, 
                things:[...state.things,
                {item: action.payload,
                completed: false,
                id: Date.now()}]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                things:state.things.map(thing => {})
            }
        default:
            return state
    }

}