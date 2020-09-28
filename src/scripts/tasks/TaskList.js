import { getTasks, useTasks } from "./TaskProvider.js"
import { CompletedTasksHTML,  MyIncompleteTasksHTML, TheirIncompleteTasksHTML} from "./Tasks.js"

const eventHub = document.querySelector(".container");

// fetches ful list of tasks from database & places them on the DOM
export const TaskList = () => {
    getTasks().then(() => {
        const tasks = useTasks();
        renderTasks(tasks)
    })}

// when a new task is entered, immedietely renders on webpage. 
eventHub.addEventListener("taskStateChanged", () => {
    const newTask = useTasks();
    renderTasks(newTask)
})

// shows modal on button click. functions for "Add New Task" & "View Completed Tasks" buttons
eventHub.addEventListener("click", event => {
    const newTaskModal = document.querySelector(".taskFormModal");
    if (event.target.id === "addNewTask--btn") {
        console.log("add new task btn clicked!")
        newTaskModal.style.display = "block";
    } else if (event.target.id === "newTaskClose") {
        console.log("close new task modal button clicked!")
        newTaskModal.style.display = "none"
    }})

//sends list of tasks to renderTasks function dependant on dropdown menu selection
eventHub.addEventListener("change", event => {
    if (event.target.id === "filterTasksDropdownSelect") {
        let dropdownMenuSelector = document.querySelector(".dropdownMenu")
        const filterValue = document.querySelector(".dropdownMenu").value
        console.log("filterValue: ", filterValue)
        const myId = parseInt(sessionStorage.getItem("activeUser"))
        const allTasks = useTasks()
        let myTasks = allTasks.filter(task => task.userId === myId)

        let tasksToPrint = []
        if (filterValue === "allIncompleteTasks") {
            dropdownMenuSelector.setAttribute("selected", "allIncompleteTasks")
            tasksToPrint = allTasks.filter(task => task.taskStatus === false)
            renderTasks(tasksToPrint)
        } else if (filterValue === "myIncompleteTasks") {
            tasksToPrint = myTasks.filter(task => task.taskStatus === false)
            renderTasks(tasksToPrint)
        } else if (filterValue === "myCompletedTasks") {
            tasksToPrint = allTasks.filter(task => task.taskStatus === true)
            renderTasks(tasksToPrint)
        } else if (filterValue === "allCompletedTasks") {
            tasksToPrint = allTasks.filter(task => task.taskStatus === true)
            renderTasks(tasksToPrint)
        } else if (filterValue === "myEntireTaskList") {
            tasksToPrint = myTasks
            renderTasks(tasksToPrint)
        } else if (filterValue === "EntireTaskList") {
            tasksToPrint = allTasks
            renderTasks(tasksToPrint)
        }
    } 
})

//shows and hides edit task model 
eventHub.addEventListener("click", event => {
    let editTaskDiv = document.querySelector(".editTaskModal")
    if (event.target.id.startsWith("editTask--")) {
        const [prefix, id, user, date, type] = event.target.id.split("--");
        console.log("edit task id: ", id)
        let taskObject = {
            userId: parseInt(user),
            name: document.querySelector(`#taskName--${id}`).innerHTML,
            taskStatus: false,
            date: parseInt(date)
        }
        editTaskDiv.innerHTML = renderEditTaskHTML(taskObject, id)
        editTaskDiv.style.display = "block"

    } else if (event.target.id === "editTaskClose") {
        console.log("close completed Task modal button clicked!")
        editTaskDiv.style.display = "none"
    } 
})




let domElement = document.querySelector(".taskContainer")

/* 
    Prints task on dom depending on option selected using dropdown menu.
    on page load, all tasks displayed
*/
const renderTasks = (tasks) => {
let user = parseInt(sessionStorage.getItem("activeUser"))
    
    // describes which version of html to display
    let HTMLRender = tasks.map((singleTask)=> { 
        if (singleTask.taskStatus === true)   {
            return CompletedTasksHTML(singleTask)
        } else if ( singleTask.taskStatus === false) {
            if (singleTask.userId === user) {
                return MyIncompleteTasksHTML(singleTask)
            } else {
                return TheirIncompleteTasksHTML(singleTask)
            }
        }
    })

    //html render
    domElement.innerHTML = 
    `
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


    <h3> Tasks To Complete </h4>
        <section class="filterTasks" id="willThisIdWork">
            <label for="filterTasksDropdown"></label>
            <select class="dropdownMenu" id="filterTasksDropdownSelect">
                <option value="default">Filter By:</option>
                <option value="myIncompleteTasks">My Incomplete Tasks</option>
                <option value="allIncompleteTasks">All Incomplete Tasks</option>
                <option value="myCompletedTasks">My Completed Tasks</option>
                <option value="allCompletedTasks">All Completed Tasks</option>
                <option value="myEntireTaskList">My Entire Tasks</option>
                <option value="EntireTaskList">Everyone's Tasks</option>
            </select>
        </section>
        <div class="taskCardContainer">
    `
    +
    HTMLRender.join("")
    + 
    `
    </div>
    <div class="editTaskModal">
   
    </div>
    `
    +
    `
    <div class="taskContainerButtons">
    <button id="addNewTask--btn">Add New Task </button>
    </div>
    `
}


// html to display in edit model
const renderEditTaskHTML = (taskObj, taskId) => {
    return `
    
    <div class="modal-content">
        <span class="close-btn" id="editTaskClose">&times;</span>
        <h3>Edit Your Task:</h3>
        <p class="originalTaskName">Original Task: ${taskObj.name}</p>
        <textarea id="taskEditForm--text" placeholder="Update Task Here"></textarea><br>
        <p>complete by:</p>
        <input id="taskForm--dueDate" type="date" placeholder="Complete by..."></input>
    <button class="savedEdit-btn" id="editedTaskBtn--save--${taskId}--${taskObj.userId}--${taskObj.date}">Save Updated Note</button><button class="taskEdit-btn" id="editedTaskBtn--delete--${taskId}--${taskObj.userId}--${taskObj.date}">Delete Note</delete>
    </div>
    
    `
}