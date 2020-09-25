let tasks = [];

export const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
    .then((response)=> response.json())
    .then((parsedTasks) => {
        tasks = parsedTasks
    })
}

export const useTasks = () => {
    return tasks.slice();
}