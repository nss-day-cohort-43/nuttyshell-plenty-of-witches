import { TaskList } from "./TaskList.js"
import { getTasks, useTasks, saveTask } from "./TaskProvider.js"

const contentElement = document.querySelector(".taskContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "taskForm--saveBtn") {
        const taskText = document.querySelector("#taskForm--text");
        const taskDue = document.querySelector("#taskForm--dueDate");
        
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
            <h3>Task's To Complete:</h3>
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