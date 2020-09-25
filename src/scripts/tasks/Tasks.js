export const TasksHTML = (taskObj) => {
    return `
    <p><input type="checkbox" class="taskCheckbox--${taskObj.taskStatus}" id="taskCheckbox--${taskObj.id}">
    ${taskObj.name}</p>
    <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    `
}