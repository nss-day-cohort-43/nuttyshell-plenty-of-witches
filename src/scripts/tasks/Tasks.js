// renders current user's tasks that are complete (taskStatus = true). includes unchecked box. 
export const MyIncompleteTasksHTML = (taskObj) => {
    let visibility;
    if (taskObj.private === true) {
        visibility = "Private"
    } else if (taskObj.private === false) {
        visibility = "Public"
    }
    return `
    <div class="completedTasks taskCard">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--incomplete--${visibility}"></input>
        <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
        <p id="taskVisibility${visibility}">${visibility}</p>
        <p id="taskCreatedBy">Created By: ${taskObj.user.firstName}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
        <button id="editTask--${taskObj.id}--${taskObj.userId}--${taskObj.date}" class="editTaskBtn">Edit Task</button>
    </div>
    `
}

// renders current users tasks that are incomplete (taskStatus = false). includes pre-checked box. 
export const MyCompletedTasksHTML = (taskObj) => {
    let visibility;
    if (taskObj.private === true) {
        visibility = "Private"
    } else if (taskObj.private === false) {
        visibility = "Public"
    }
    return `
    <div class="incompleteTasks taskCard">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--complete--${visibility}" checked></input>
        <p id="taskName--${taskObj.id}" class="incompleteTask">${taskObj.name}</p>
        <p id="taskVisibility${visibility}">${visibility}</p>
        <p id="taskCreatedBy">Created By: ${taskObj.user.firstName}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
        
    </div>
    `
}

// renders other users incomplete tasks (that are PUBLIC only)
export const TheirIncompleteTasksHTML = (taskObj) => {
    let status;
    if (taskObj.taskStatus === false) {
        status = "has not completed this task"
    } else if (taskObj.taskStatus === true) {
        status = "has completed this task!!"
    }
    return `
    <div class="completedTasks taskCard">
        <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
        <p id="taskStatus">Status: ${taskObj.user.firstName} ${status}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

// renders other users completed tasks (that are PUBLIC only)
export const TheirCompletedTasksHTML = (taskObj) => {
    let status;
    if (taskObj.taskStatus === false) {
        status = "has not completed this task"
    } else if (taskObj.taskStatus === true) {
        status = "has completed this task!!"
    }
    return `
    <div class="completedTasks taskCard">
        <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
        <p id="taskStatus">Status: ${taskObj.user.firstName} ${status}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

