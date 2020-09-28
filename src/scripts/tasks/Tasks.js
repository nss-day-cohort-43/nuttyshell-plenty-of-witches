// renders tasks that are complete (taskStatus = true). includes unchecked box. 
export const MyIncompleteTasksHTML = (taskObj) => {
    return `
    <div class="completedTasks taskCard">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--incomplete"></input>
        <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
        <p id="taskCreatedBy">Created By: ${taskObj.user.firstName}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
        <button id="editTask--${taskObj.id}--${taskObj.userId}--${taskObj.date}" class="edit--${taskObj.id}">Edit Task</button>
    </div>
    `
}

export const TheirIncompleteTasksHTML = (taskObj) => {
    return `
    <div class="completedTasks taskCard">
        <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
        <p id="taskCreatedBy">Created By: ${taskObj.user.firstName}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

// renders tasks that are incomplete (taskStatus = false). includes pre-checked box. 
export const CompletedTasksHTML = (taskObj) => {
    return `
    <div class="incompleteTasks taskCard">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--complete" checked></input>
        <p id="taskName--${taskObj.id}" class="incompleteTask">${taskObj.name}</p>
        <p id="taskCreatedBy">Created By: ${taskObj.user.firstName}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
        
    </div>
    `
}
