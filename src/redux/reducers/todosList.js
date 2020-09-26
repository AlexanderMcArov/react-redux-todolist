import {
    FETCH_ADD_ITEM
} from '../actions/constans'

const initialState = {
    todos: []
}

export default function todosListReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_ADD_ITEM:
            return{
                ...state,
                todos: action.todos
            }
    
        default:
            return state
    }
}