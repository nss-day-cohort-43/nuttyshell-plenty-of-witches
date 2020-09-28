// fetch user from database
// let userArray = [];
// const grabThoseUsers = () => {
//     getUsers().then(() => {
//         userArray = useUsers();
//     })
// }

// renders tasks that are complete (taskStatus = true). includes unchecked box. 
export const AllIncompleteTasksHTML = (taskObj) => {
    return `
    <div class="completedTasks">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--complete" checked></input>
        <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
        <p id="taskCreatedBy">Created By: ${taskObj.user.firstName}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

// renders tasks that are incomplete (taskStatus = false). includes pre-checked box. 
export const AllCompletedTasksHTML = (taskObj) => {
    return `
    <div class="incompleteTasks">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--incomplete"></input>
        <p id="taskName--${taskObj.id}" class="incompleteTask">${taskObj.name}</p>
        <p id="taskCreatedBy">Created By: ${taskObj.user.firstName}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}


export const PersonalIncompleteTasksHTML = (taskObj) => {
    return `
    <div class="completedTasks">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--complete" checked></input>
        <p id="taskName--${taskObj.id}" class="completedTask">${taskObj.name}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}

export const PersonalCompletedTasksHTML = (taskObj) => {
    return `
    <div class="incompleteTasks">
        <input type="checkbox" class="checkbox" id="taskCheckbox--${taskObj.id}--${taskObj.userId}--${taskObj.date}--incomplete"></input>
        <p id="taskName--${taskObj.id}" class="incompleteTask">${taskObj.name}</p>
        <p class="task--dueDate">due: ${new Date(taskObj.date).toUTCString("en-US")}</p>
    </div>
    `
}