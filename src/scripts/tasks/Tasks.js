export const TasksHTML = (taskObj) => {
    return `
    <div class="completedTasks">
        <p class="taskName"><input type="checkbox" class="incompleteTask" id="taskCheckbox--${taskObj.id}" checked>
        ${taskObj.name}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

export const CompletedTasks = (taskObj) => {
    return `
    <div class="incompleteTasks">
        <p class="taskName"><input type="checkbox" id="taskCheckbox--${taskObj.id}">
        ${taskObj.name}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}