const eventHub = document.querySelector(".container")

export const TaskModal = () => {
    const contentTarget = document.querySelector(".taskFormModal");
    return (contentTarget.innerHTML = ` 
        
        <div class="modal-content">
            <h3>Add A New Task:</h3>
            <textarea id="taskForm--text" placeholder="enter task here"></textarea><br>
            <p>complete by:</p>
            <input id="taskForm--dueDate" type="date" placeholder="Complete by..."></input>
            <button id="taskForm--saveBtn">Save Task</button>
            <div id="textForm--textAlert"></div>
            </div>
            </section>
    `)
}

eventHub.addEventListener("click", event => {
    const modal = document.querySelector(".taskFormModal");
    let completedTaskDivs = document.querySelector(".completedTasks")
    if (event.target.id === "addNewTask--btn") {
        console.log("add new task btn clicked!")
        modal.style.display = "block";
    } else if (event.target.id === "viewCompletedTasks") {
        console.log("view completed tasks btn clicked!")
        completedTaskDivs.style.display = "block"
    }

})