import { TaskList } from "./TaskList.js"
import { getTasks, useTasks } from "./TaskProvider.js"

const contentElement = document.querySelector(".taskContainer")
const eventHub = document.querySelector(".container")
const render = (taskArray) => {
    contentElement.innerHTML = `
    <hr>
        <section class="taskFormContainer">
            <h3>Add A New Task:</h3>
            <textarea id="taskForm--text" placeholder="enter task here"></textarea><br>
            <p>complete by:</p>
            <input id="taskForm--dueDate" type="date" placeholder="Complete by..."></input>
            <button id="taskForm--saveBtn">Save Task</button>
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