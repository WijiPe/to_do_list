import React, {useState, useEffect} from 'react'
import TaskInput from './taskInput';
import TaskRemove from './taskRemove';


const Task = (props) => {
    const [ToDoList, setToDoList] = useState([]);

    const addToDoList = (newToDo) => {
        setToDoList([...ToDoList, newToDo])
        localStorage.setItem("TodoList", JSON.stringify(ToDoList))
    }

    const onChange = (status, idx) =>{
        const newToDoList = ToDoList.map( a => {return {...a}} )
        console.log(newToDoList, idx)
        newToDoList[idx].complete = status
        setToDoList(newToDoList)
        localStorage.setItem("TodoList", JSON.stringify(newToDoList))
        
    }

    const removeTodo = (idx) =>{
        if(ToDoList[idx].complete === true){
            const newToDoList = ToDoList.filter((a , i) => i != idx)
            setToDoList(newToDoList)
            localStorage.setItem("TodoList", JSON.stringify(newToDoList))
        }
    }

    useEffect(() => {
        let tempTodoList = localStorage.getItem("TodoList")
        tempTodoList = JSON.parse(tempTodoList)
        if (localStorage.getItem("TodoList") != null){
            setToDoList(tempTodoList)
        }
    },[])

    return (
        <div >
            <TaskInput onNewToDoList = {addToDoList} />
            <TaskRemove showCurrentTodoList ={ToDoList} ChangeStatus = {onChange} RemoveTodo = {removeTodo}/>
        </div>

    )

}  



export default Task