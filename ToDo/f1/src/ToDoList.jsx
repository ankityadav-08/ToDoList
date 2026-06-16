import React,{ useState } from "react";

function ToDoList() {

    const [tasks,setTasks]= useState([])
    const [newTask,setNewTask] = useState("")

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t => [...tasks,newTask]);
            setNewTask("");
        }
        
    }
    function deleteTask(index) {
        
        const updatedTasks = tasks.filter((_, i ) => i !== index);
        setTasks(updatedTasks);
    }

    function HandleInputChange(event) {
        setNewTask(event.target.value);
    }


    return(
        <div className="to-do-list">
            <h1>TO DO LIST </h1>
            <div>
                <input type="text" placeholder="Enter a task " value={newTask} onChange={HandleInputChange}/>
            
                <button className="add-button" onClick={addTask}>
                    ADD
                </button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                    <li  key={index}>
                        <span className="text">{task} </span>
                        <button className="delete-button" 
                        onClick={()=> deleteTask(index)}>Delete</button>
                     </li>
                )}
            </ol>

        </div>
    );
}


export default ToDoList