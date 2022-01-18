import React, {useState} from 'react'


const TaskList =(props)=>{


    const handleCheck =(e) =>{
        const {checked} = e.target
        props.ChangeStatus(checked, props.index)
    }

    const handleDelete =() =>{
        props.RemoveTodo(props.index)
    }

    return (
        <div>
            <label style={{textDecoration: props.ToDo.complete? "line-through": undefined}}>{props.ToDo.toDo}</label>
            <input name="completed" type="checkbox" checked={props.ToDo.complete} onChange={handleCheck} />
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}



export default TaskList