let tasks = [];

// gathers all tasks in the database 
export const getTasks = () => {
    return fetch("http://localhost:8088/tasks?_expand=user")
    .then((response)=> response.json())
    .then((parsedTasks) => {
        tasks = parsedTasks
    })
}

// provides all tasks from the database
export const useTasks = () => {return tasks.slice()}

const eventHub = document.querySelector(".container");
const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskStateChangedEvent)
}

// when "save" button clicked in modal, the new task is posted into database & full list of tasks is rendered on page
export const saveTask = (TaskObj) => {
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TaskObj),
    })
      .then(() => {
        return getTasks()
      })
      .then(dispatchStateChangeEvent);
  };

// edits a task inside the database.
  export const editTask = (taskObj, taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObj)
    })
    .then(()=> {
      return getTasks();
    })
    .then(dispatchStateChangeEvent)
  }



// deletes a task from the database. 
  export const deleteTask = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
    .then(()=> {
      return getTasks();
    })
    .then(dispatchStateChangeEvent)
  }