import { getTasks, useTasks } from "./TaskProvider.js"
import { TasksHTML, CompletedTasks } from "./Tasks.js"

// fetches ful list of tasks from database & places them on the DOM
export const TaskList = () => {
    getTasks().then(() => {
        const tasks = useTasks();
        renderTasks(tasks)
    })
}

let domElement = document.querySelector(".taskContainer")

/* multi step function: 
    1. maps through all tasks 
        • if taskStatus = true (task is complete), returns html to display on modal
        • if taskStatus = false (task is incomplete), returns html to display on dom at page load
    2. adds task form HTML to modal element 
    3. sets innerHTML of .taskContainer to include each task card w/ checkbox.
    4. adds completed tasks in list form to modal element

*/
const renderTasks = (tasks) => {
    let HTMLCompletedRender = tasks.map((singleTask)=> { 
        if (singleTask.taskStatus === true) {
            return TasksHTML(singleTask)
        }
    })


    let HTMLRender = tasks.map((singleTask) => {
      if (singleTask.taskStatus === false) {
          return CompletedTasks(singleTask);
      } 
    })
    domElement.innerHTML = `
    <section class="taskFormModal">
        <div class="modal-content">
            <h3>Add A New Task:</h3>
            <textarea id="taskForm--text" placeholder="enter task here"></textarea><br>
            <p>complete by:</p>
            <input id="taskForm--dueDate" type="date" placeholder="Complete by..."></input>
            <button id="taskForm--saveBtn">Save Task</button>
            <div id="textForm--textAlert"></div>
            </div>
            </section>


    <h3> Tasks To Complete </h4>
    `+
    HTMLRender.join("")
    + 
    `<div class="completedTasksModal">hi! <div class="modal-content">`
    +
    HTMLCompletedRender.join("")
    +
    `</div></div>`+
    `
    <div class="taskContainerButtons">
    <button id="viewCompletedTasks">View Completed Tasks</button>
    <button id="addNewTask--btn">Add New Task </button>
    </div>`
}

const eventHub = document.querySelector(".container");

// when a new task is entered, immedietely renders on webpage. 
eventHub.addEventListener("taskStateChanged", () => {
    const newTask = useTasks();
    renderTasks(newTask)
})

// shows modal on button click. functions for "Add New Task" & "View Completed Tasks" buttons
eventHub.addEventListener("click", event => {
    const modal = document.querySelector(".taskFormModal");
    let completedTaskDivs = document.querySelector(".completedTasksModal")
    if (event.target.id === "addNewTask--btn") {
        console.log("add new task btn clicked!")
        modal.style.display = "block";
    } else if (event.target.id === "viewCompletedTasks") {
        console.log("view completed tasks btn clicked!")
        completedTaskDivs.style.display = "block"
    }

})