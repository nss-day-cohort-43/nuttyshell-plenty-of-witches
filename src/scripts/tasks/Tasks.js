
// renders tasks that are complete (taskStatus = true). includes unchecked box. 
export const TasksHTML = (taskObj) => {
    return `
    <div class="completedTasks">
    <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--complete" checked></input>
    <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
    <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

// renders tasks that are incomplete (taskStatus = false). includes pre-checked box. 
export const CompletedTasks = (taskObj) => {
    return `
    <div class="incompleteTasks">
        <input type="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--incomplete"></input>
        <p id="taskName--${taskObj.id}">${taskObj.name}</p><br>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}