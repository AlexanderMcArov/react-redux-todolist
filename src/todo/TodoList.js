import React, {useEffect} from 'react'
import TodoItem from './TodoItem'
import {useSelector,useDispatch} from 'react-redux'
import {todosUpdateItems} from '../redux/actions/todosList'

function TodoList() {

    const dispatch = useDispatch()
    const data = useSelector(state=>{
        return state.todoListReducer.todos
    })  
    console.log(data);
    useEffect(()=> {
        dispatch(todosUpdateItems())
    },[])

    let todoList = data.map(item=>{
        return <TodoItem data={item} key={item.id + '-todos'}/>
    })

    return (
        <div className="todo_list">
            <div className="col">
                {todoList}
            </div>
        </div>
    );
    
}

export default TodoList
