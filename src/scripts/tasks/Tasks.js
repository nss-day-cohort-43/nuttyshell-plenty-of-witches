export const TasksHTML = (taskObj) => {
    return `
    <div class="completedTasks" style="display: none">
    <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--complete" checked></input>
    <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
    <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

export const CompletedTasks = (taskObj) => {
    return `
    <div class="incompleteTasks">
        <input type="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--incomplete"></input>
        <p id="taskName--${taskObj.id}">${taskObj.name}</p><br>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}