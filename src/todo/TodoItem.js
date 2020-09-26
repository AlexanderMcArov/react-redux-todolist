import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {todosDeleteItem, todosEditItem} from '../redux/actions/todosList'
import img_recycler from '../images/recycler.png'
import img_edit from '../images/edit.png'
import img_ok from '../images/ok.png'
import img_reverse from '../images/reverse.png'

function TodoItem(props) {

    const dispatch = useDispatch()

    let data = props.data
    let [isEdit, setIsEdit] = useState(false) // меняет состояние item'a на "редактирование"
    let [title,setTitle] = useState(data.title)

    function deleteItem(){
        console.log(`DeleteItem with ${data.id} ID.`);
        dispatch(todosDeleteItem(data.id))
    }
    function accessItem(){
        setIsEdit(false)
        console.log(`AccesItem with ${data.id} ID.`);
        dispatch(todosEditItem({
            id: data.id,
            status: true
        }))      
    }
    function reverseItem(){
        setIsEdit(false)
        console.log(`ReverseItem with ${data.id} ID.`);
        dispatch(todosEditItem({
            id: data.id,
            status: false
        }))      
    }
    function editItem(){
        setIsEdit(false)
        console.log(`ReverseItem with ${data.id} ID.`);
        dispatch(todosEditItem({
            id: data.id,
            title: title
        }))      
    }

    return (
        
        <div className={data.status ?'todo_item access':'todo_item'}>
            <div className="item_title">
                {isEdit ? (<div>
                    <input value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>) : data.title}            
            </div>
            {data.status ? <button className="btn_item edit" onClick={reverseItem}><img src={img_reverse}></img></button> :
                <div className="item_btns">
                    {isEdit ? <button className="btn_item edit" onClick={editItem}><img src={img_ok}></img></button> : <button className="btn_item ok" onClick={accessItem}><img src={img_ok}></img></button>}                    
                    {!isEdit ? <button className="btn_item edit" onClick={()=>setIsEdit(true)}><img src={img_edit}></img></button> : ''}
                    <button className="btn_item delete" onClick={deleteItem}><img src={img_recycler}></img></button>
                </div>
            }
        </div>
    )
}

export default TodoItem
