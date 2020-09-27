import { getTasks, useTasks } from "./TaskProvider.js"
import { TasksHTML, CompletedTasks } from "./Tasks.js"

// let tasks = [];

export const TaskList = () => {
    getTasks().then(() => {
        const tasks = useTasks();
        renderTasks(tasks)
    })
}

let domElement = document.querySelector(".taskContainer")

const renderTasks = (tasks) => {
    let HTMLRender = tasks.map((singleTask) => {
      if (singleTask.taskStatus === false) {
          return CompletedTasks(singleTask);
      } else {
          console.log("argh")
        //   return CompletedTasks(singleTask)
      }
    })
    domElement.innerHTML = `
    <h3> Tasks To Complete </h4>
    `+
    HTMLRender.join("")
    + `
    <div class="taskContainerButtons">
    <button id="viewCompletedTasks">View Completed Tasks</button>
    <button id="addNewTask--btn">Add New Task </button>
    </div>`
}

const eventHub = document.querySelector(".container");

eventHub.addEventListener("taskStateChanged", () => {
    const newTask = useTasks();
    renderTasks(newTask)
})
