import { IFirebase, IFirebaseAction } from "./firebaseTypes"

export const firebaseReducer = (state: IFirebase, action: IFirebaseAction): IFirebase => {
    switch(action.type) {
        case 'SHOW_LOADER':
            return {...state, loading: true}
        case 'ADD_TODO': 
            return {...state, todos: [...state.todos, ...(action.payload ? action.payload.todos : [])], loading: false}
        case 'DELETE_NOTE': 
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        case 'FETCH_NOTES': 
            return {...state, todos: action.payload?.todos!, loading: false}
        default: 
            return state
    }
}