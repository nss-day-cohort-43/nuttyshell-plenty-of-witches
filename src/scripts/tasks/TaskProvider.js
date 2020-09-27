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

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskStateChangedEvent)
}

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