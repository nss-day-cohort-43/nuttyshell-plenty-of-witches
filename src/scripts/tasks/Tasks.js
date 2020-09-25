export const TasksHTML = (taskObj) => {
    return `
    <p><input type="checkbox" id="taskCheckbox--${taskObj.id}">
    ${taskObj.name}</p>
    <p class="task--dueDate">due: ${new Date(taskObj.date).toLocaleDateString("en-US")}</p>
    `
}