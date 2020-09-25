export const TasksHTML = (taskObj) => {
    return `
    <p><input type="checkbox" id="taskCheckbox--${taskObj.id}">
    ${taskObj.task}</p>
    `
}