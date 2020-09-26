import Axios from 'axios'
import { 
    FETCH_ADD_ITEM
 } from './constans'

export function todosAddItem(item){
    return (dispatch) => {
        Axios.post('http://localhost:3333/todos',{
            title: item.title
        })
            .then(res=>{
                dispatch(todosUpdateItems())
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}
export function todosDeleteItem(id){
    return (dispatch) => {
        Axios.delete('http://localhost:3333/todos/' + id)
            .then(res=>{    
                dispatch(todosUpdateItems())
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}
export function todosEditItem(item){
    return (dispatch) => {
        Axios.patch('http://localhost:3333/todos/' + item.id,{
            title: item.title,
            status: item.status
        })
            .then(res=>{
                dispatch(todosUpdateItems())
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}
export function todosUpdateItems(){
    return (dispatch) => {
        Axios.get('http://localhost:3333/todos')
            .then(res=>{
                console.log(res.data);
                dispatch(fetchAddItem(res.data))
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}

export function fetchAddItem(todos){
    return {
        type: FETCH_ADD_ITEM,
        todos
    }
}
