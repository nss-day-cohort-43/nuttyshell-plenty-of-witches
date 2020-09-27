import { TaskList } from "./TaskList.js"
import { getTasks, useTasks, saveTask, editTask, getSingleTask } from "./TaskProvider.js"

const contentElement = document.querySelector(".taskFormContainer")
const eventHub = document.querySelector(".container")

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
                name: taskText.value,
                taskStatus: false,
                date: Date.parse(taskDue.value)
            }
            saveTask(newTask)
            clearTaskForm();
        }
    }
})

eventHub.addEventListener("click", event => {
    console.log("a click happened!")
    if(event.target.id.startsWith("taskCheckbox")) {
        const [prefix, id, user, date, type] = event.target.id.split("--");
        console.log("id: ", id)
        let task = getSingleTask(id)
        
        if (type === "incomplete") {
            let updatedTask = {
                userId: user,
                name: document.querySelector(`#taskName--${id}`).innerHTML,
                taskStatus: true,
                date: parseInt(date)
            }
            editTask(updatedTask, id)
        } else if (type === "complete") {
            let updatedTask = {
                userId: user,
                name: document.querySelector(`#taskName--${id}`).innerHTML,
                taskStatus: false,
                date: parseInt(date)
            }
            editTask(updatedTask, id)
        }
        
    }

})



const render = (taskArray) => {
    contentElement.innerHTML = `
    <hr>
        <section class="taskFormContainer">
            <h3>Add A New Task:</h3>
            <textarea id="taskForm--text" placeholder="enter task here"></textarea><br>
            <p>complete by:</p>
            <input id="taskForm--dueDate" type="date" placeholder="Complete by..."></input>
            <button id="taskForm--saveBtn">Save Task</button>
            <div id="textForm--textAlert"></div>
            </section>
    `
}

export const TaskForm = () => {
    getTasks().then(()=> {
        render()
    })
    .then(()=> {
        TaskList(useTasks())
    })
}