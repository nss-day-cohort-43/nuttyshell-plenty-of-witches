import { TaskList } from "./TaskList.js"
import { getTasks, useTasks, saveTask, editTask, deleteTask } from "./TaskProvider.js"
const eventHub = document.querySelector(".container")


/* 
    !!! click event to save new task once task, visibility & due date have been filled out by the user !!!
        converts visibility string to boolean value 


*/

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "taskForm--saveBtn") {
        const taskText = document.querySelector("#taskForm--text");
        const taskDue = document.querySelector("#taskForm--dueDate");
        let taskVisiblity; 
        const stringToBoolean = () => {
            let visibilityValue = document.querySelector("#taskForm--visibility").value
            if (visibilityValue === "true") {
                taskVisiblity = true
            } else if (visibilityValue === "false") {
                taskVisiblity = false
            }
            return taskVisiblity
        }
        
        //function to clear form fields after submit. 
        const clearTaskForm = () => {
            taskText.value = "";
            taskDue.value = "";
        }

        // function to alert user if all fields are not submitted properly. 
        if (taskText.value === "") {
            window.alert("please enter a task")
        } else if (taskDue.value === "") {
            window.alert("please enter a due date")
        } else if (stringToBoolean() === undefined) {
            window.alert("please enter a privacy selection")

        //function to create new task in database. 
        } else {
            const newTask = {
                userId: parseInt(sessionStorage.getItem("activeUser")),
                name: taskText.value,
                taskStatus: false,
                private: stringToBoolean(),
                date: Date.parse(taskDue.value)
            }
            saveTask(newTask)
            clearTaskForm();
        }
    }
})

/* 
    !!! click event to handle task appropriately based on user action !!!
        when checkbox is clicked (checked or unchecked) that task is marked complete or incomplete as needed. 
        when save button clicked on edit task modal, the task is edited in the database & rendered on the page. 
        when delete button clicked on edit task modal, a confirm window appears. if confirmed, the task is deleted from the database. 
*/

eventHub.addEventListener("click", event => {
    let editTaskDiv = document.querySelector(".editTaskModal")

    if(event.target.id.startsWith("taskCheckbox")) {
        const [prefix, id, user, date, type, visibility] = event.target.id.split("--");
        console.log("checkbox visibility: ", visibility)
        console.log("id: ", id)

        let taskVisiblity; 
        const checkboxStringToBoolean = () => {
            if (visibility === "Private") {
                taskVisiblity = true
            } else if (visibility === "Public") {
                taskVisiblity = false
            }
            return taskVisiblity
        }
        
        if (type === "incomplete") {
            let updatedTask = {
                userId: parseInt(user),
                name: document.querySelector(`#taskName--${id}`).innerHTML,
                taskStatus: true,
                private: checkboxStringToBoolean(),
                date: parseInt(date)
            }
            editTask(updatedTask, id)

        } else if (type === "complete") {
            let updatedTask = {
                userId: parseInt(user),
                name: document.querySelector(`#taskName--${id}`).innerHTML,
                taskStatus: false,
                private: checkboxStringToBoolean(),
                date: parseInt(date)
            }
            editTask(updatedTask, id)
        }

    } else if (event.target.id.startsWith("editedTaskBtn--")) {
        const [prefix, action, id, user, date] = event.target.id.split("--");
        let taskVisiblity; 
        const stringToBoolean = () => {
            let visibilityValue = document.querySelector("#taskEdit--visibility").value
            if (visibilityValue === "true") {
                taskVisiblity = true
            } else if (visibilityValue === "false") {
                taskVisiblity = false
            }
            return taskVisiblity
        }
        if (action === "save") {
            if (document.querySelector(`#taskEditForm--text`).value === "") {
                window.alert("please enter a task")
            } else if (date === "") {
                window.alert("please enter a due date")
            } else if (stringToBoolean() === undefined) {
                window.alert("please enter a privacy selection")
            } else {
                let updatedTask = {
                    userId: parseInt(user),
                    name: document.querySelector(`#taskEditForm--text`).value,
                    taskStatus: false,
                    private: stringToBoolean(),
                    date: parseInt(date)
                }
                editTask(updatedTask, id)
                editTaskDiv.style.display = "none"
                TaskList(updatedTask) 
            }
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


// render the new task form on the dom & show FULL list once new task is entered into database by user. 
export const TaskForm = () => {
    getTasks()
    .then(()=> {
        
        TaskList(useTasks())
    })
}