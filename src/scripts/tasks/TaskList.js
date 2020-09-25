import { getTasks, useTasks } from "./TaskProvider.js"
import { TasksHTML } from "./Tasks.js"

// let tasks = [];

export const TaskList = () => {
    getTasks().then(() => {
        const tasks = useTasks();
        render(tasks)
    })
}

let domElement = document.querySelector(".taskContainer")

const render = (tasks) => {
    let HTMLRender = tasks.map((singleTask) => {
        return TasksHTML(singleTask);
    })
    domElement.innerHTML = HTMLRender.join("")
}