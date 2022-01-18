import React, {useState} from 'react'


const TaskInput = (props) => {
    const [ToDoState, setToDoState] = useState("")
    const [ToDoStateError, setToDoStateError] = useState("Please fill the to do list.")

    const submitHandler = (e) =>{
        e.preventDefault();

        if (ToDoState.length > 1){
            props.onNewToDoList({
                toDo: ToDoState,
                complete: false
            })
        }
        setToDoState("")
        setToDoStateError("Please fill the to do list.")
    }

    const changeHandler = (e) => {
        let { value } = e.target
        if(value.length  < 1) {
            setToDoStateError("Please fill the to do list.")
        } else {
            setToDoStateError("")
        }
        setToDoState(value)
    }

    return (
        <div >
            <form onSubmit={submitHandler}>
                <h1>Add to do list here!</h1>
                <input type = "text" onChange={changeHandler} value={ToDoState}  />
                <p>{ToDoStateError}</p>
                <button> Add </button>
            </form>

        </div>

    )
}

    



export default TaskInput