import { TaskList } from "./TaskList.js"
import { getTasks, useTasks, saveTask, editTask, getSingleTask, deleteTask } from "./TaskProvider.js"

const contentElement = document.querySelector(".taskContainer")
const eventHub = document.querySelector(".container")






// click event to save new task once task & due date have been filled out by the user. 
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "taskForm--saveBtn") {
        const taskText = document.querySelector("#taskForm--text");
        const taskDue = document.querySelector("#taskForm--dueDate");
        const clearTaskForm = () => {
            taskText.value = "";
            taskDue.value = "";
        }
        
        if (taskText.value === "") {
            window.alert("please enter a task")
        } else if (taskDue.value === "") {
            window.alert("please enter a due date")
        } else {
            const newTask = {
                userId: parseInt(sessionStorage.getItem("activeUser")),
                name: taskText.value,
                taskStatus: false,
                date: Date.parse(taskDue.value)
            }
            saveTask(newTask)
            clearTaskForm();
        }
    }
})

// click event to mark task as complete or incomplete by using checkbox for that specific task. 
eventHub.addEventListener("click", event => {
    let editTaskDiv = document.querySelector(".editTaskModal")

    if(event.target.id.startsWith("taskCheckbox")) {
        const [prefix, id, user, date, type] = event.target.id.split("--");
        console.log("id: ", id)
        let task = getSingleTask(id)
        
        if (type === "incomplete") {
            let updatedTask = {
                userId: parseInt(user),
                name: document.querySelector(`#taskName--${id}`).innerHTML,
                taskStatus: true,
                date: parseInt(date)
            }
            editTask(updatedTask, id)
        } else if (type === "complete") {
            let updatedTask = {
                userId: parseInt(user),
                name: document.querySelector(`#taskName--${id}`).innerHTML,
                taskStatus: false,
                date: parseInt(date)
            }
            editTask(updatedTask, id)
        }
    } else if (event.target.id.startsWith("editedTaskBtn--")) {
        const [prefix, action, id, user, date] = event.target.id.split("--");
        if (action === "save") {
            let updatedTask = {
                userId: parseInt(user),
                name: document.querySelector(`#taskEditForm--text`).value,
                taskStatus: false,
                date: parseInt(date)
            }
            editTask(updatedTask, id)
            console.log("id: ", id)
            console.log("updated task: ", updatedTask)
        } else if (action === "delete") {
            let areYouSure = confirm("This will permanently delete your task...")
            if (areYouSure) {
                deleteTask(id)
                editTaskDiv.style.display = "none"
            } 
        } else {
            console.log("something is wrong with editedTaskBtn function")
        }
    }
    

})




// the task form HTML representation that gets placed into modal once "Add New Task Button" is clicked. 
const render = (taskArray) => {
    contentElement.innerHTML = `
    <section class="taskFormModal">
        <div class="modal-content">
            <span class="close-btn" id="newTaskClose">&times;</span>
            <h3>Add A New Task:</h3>
            <textarea id="taskForm--text" placeholder="enter task here"></textarea><br>
            <p>complete by:</p>
            <input id="taskForm--dueDate" type="date" placeholder="Complete by..."></input>
            <button id="taskForm--saveBtn">Save Task</button>
            <div id="textForm--textAlert"></div>
            </div>
            </section>
    `
}

// render the new task form on the dom & show FULL list once new task is entered into database by user. 
export const TaskForm = () => {
    getTasks().then(()=> {
        render()
    })
    .then(()=> {
        TaskList(useTasks())
    })
}