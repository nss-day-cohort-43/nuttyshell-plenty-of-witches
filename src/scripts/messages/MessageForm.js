const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".messageContainer");

export const MessageForm = () => {
  return (contentTarget.innerHTML = `
  <div class="message--history"></div>
  <div class="message--entry">
    <div class="message--input"></div>
    <div>
      <button id="postMessageBtn">Send</button>
    </div>
  </div>
  <div class="modal">
  <div class="modal-content">
    <span class="close-btn closeMessage">&times;</span>
    <h3>Add A Post</h3>
    <input id="message-textarea"></input>
    <div>
    <button class="closeMessage">Cancel</button>
    <button>Post</button>
    </div>
  </div>
</div>
  `);
};

eventHub.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  if (event.target.id === "postMessageBtn") {
    modal.style.display = "block";
  }
  if (event.target.classList.contains("closeMessage")) {
    modal.style.display = "none";
  }
});
