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
      if (singleTask.taskStatus === true) {
          return TasksHTML(singleTask);
      } else {
          return CompletedTasks(singleTask)
      }
    })
    domElement.innerHTML += HTMLRender.join("")
}

