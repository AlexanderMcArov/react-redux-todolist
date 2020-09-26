import { combineReducers } from 'redux'
import todosListReducer from './todosList'

export default combineReducers({
    todoListReducer: todosListReducer
})

