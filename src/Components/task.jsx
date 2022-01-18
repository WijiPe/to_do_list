import React, {useState, useEffect} from 'react'
import TaskInput from './taskInput';
import TaskRemove from './taskRemove';


const Task = (props) => {
    const [ToDoList, setToDoList] = useState([]);

    const addToDoList = (newToDo) => {
        setToDoList([...ToDoList, newToDo])
    }

    const onChange = (status, idx) =>{
        const newToDoList = ToDoList.map( a => {return {...a}} )
        console.log(newToDoList, idx)
        newToDoList[idx].complete = status
        setToDoList(newToDoList)
        
    }

    const removeTodo = (idx) =>{
        if(ToDoList[idx].complete === true){
            const newToDoList = ToDoList.filter((a , i) => i != idx)
            setToDoList(newToDoList)
        }
        
    }

    useEffect(() => {
        effect

    }

    return (
        <div >
            <TaskInput onNewToDoList = {addToDoList} />
            <TaskRemove showCurrentTodoList ={ToDoList} ChangeStatus = {onChange} RemoveTodo = {removeTodo}/>
        </div>

    )

}  



export default Task