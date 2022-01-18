import React, {useState} from 'react'
import TaskList from './taskList'


const TaskRemove =(props)=>{


    const showList = [...props.showCurrentTodoList]

    return (

        <div>

            {               
                showList.map((item, i) => { 
                    return (
                        <TaskList ToDo = {item} key = {i} index = {i} ChangeStatus = {props.ChangeStatus} RemoveTodo = {props.RemoveTodo}/>
                    )
                })
            }
        </div>
    )
}



export default TaskRemove