import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {todosAddItem} from '../redux/actions/todosList'

function ContactInput(props) {

    let [title,setTitle] = useState('')
     
    const dispatch = useDispatch()
    
    function btnAdd(){
        dispatch(todosAddItem({
            title
        }))
        setTitle('')
    }

    return (
        <div className="todo__input">
            <div className="input_list">
                <div className="col">
                    <label htmlFor="name">Title</label><input value={title} onChange={e=>setTitle(e.target.value)}/>
                    <div className="row">
                        <button className="inp_btn" onClick={btnAdd}>ADD</button>
                        <div className="mx-5"></div>
                    </div>
                    <span className="hr"></span>
                </div>
            </div>                
        </div>
    )
}

export default ContactInput
