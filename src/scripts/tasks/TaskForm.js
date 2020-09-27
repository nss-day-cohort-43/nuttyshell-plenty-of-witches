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
        const [prefix, id] = event.target.id.split("--");
        console.log("id: ", id)
        let task = getSingleTask(id)
        .then(() => {
            let newTask = {
            name: task.name,
            taskStatus: true,
            date: task.date,
            userId: task.userId
        }})
        .then(()=> {
        console.log("task:", task)
        console.log(newTask)
        editTask(newTask, id)
        })
        
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