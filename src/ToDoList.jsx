import React,{useState} from 'react'


function ToDoList(){

    const [tasks,setTask] = useState([]);
    const [taskInfo,setTaskInfo] = useState("");


    function handleCreateTask(event){
        const newTask = {task: taskInfo}

        setTask(t => [...t,newTask])

        setTaskInfo("")

    }

    function handleGettingTaskInfo(event){
        setTaskInfo(event.target.value)
    }

    function handleDeleteTask(index){
        setTask(tasks.filter((_,i) => i !== index))
    }

    function handleTaskForward(index){
        const updateTask = [...tasks]
        if(index > 0){
            [updateTask[index], updateTask[index - 1 ]] = [updateTask[index - 1] , updateTask[index]]
            setTask(updateTask)
        }
    }

    function handleTaskBackwards(index){
        const updateTask = [...tasks]
        if(index < tasks.length -1){
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]]
            setTask(updateTask)
        }
    }

    return(
        <div>
            <h1 id='title-text'>To-Do-List</h1>
            <br></br>
            <div className='input-container'>
            <input type="text" placeholder="Enter a task..." id='input-task' onChange={handleGettingTaskInfo} value={taskInfo}></input>
            <button onClick={handleCreateTask} id='submit-button'>Enter</button>
            </div>
            <div className='task-display'>
            <ul className='tasks-list'>
                {tasks.map((task,index)=><li key={index}>{task.task} <button onClick={()=>handleDeleteTask(index)} id='task-delete'>delete</button><button id='task-delete' onClick={()=>handleTaskForward(index)}>Move up</button><button id="task-delete" onClick={()=>handleTaskBackwards(index)}>Task Down</button></li>)}
            </ul>
            </div>
        </div>
    )
}
export default ToDoList