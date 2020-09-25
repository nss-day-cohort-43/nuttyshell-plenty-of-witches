tasks = [];
export const getTasks = () => {
    return fetch("http://localhost:8088/tasks?_expand=user")
    .then((response)=> response.json())
    .then((parsedTasks) => {
        tasks = parsedTasks
    })
}

export const useTasks = () => {
    return tasks.slice();
}