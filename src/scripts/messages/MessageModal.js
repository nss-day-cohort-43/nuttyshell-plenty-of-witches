//display message modal

import { getUsers, useUsers } from "./MessageProvider.js";
const eventHub = document.querySelector(".container");
let userArray = [];

export const MessageModal = () => {
  getUsers().then(() => {
    userArray = useUsers();
    directMessage();
  });
  const contentTarget = document.querySelector(".messageContainer");
  return (contentTarget.innerHTML += ` 
  <div class="modal">
    <div class="modal-content">
      <span class="close-btn closeMessage">&times;</span>
      <h3>Add A Post</h3>
      <input id="message-textarea"></input>
      <div>
      <button class="closeMessage">Cancel</button>
      <button id="postMessageBtn">Post</button>
      </div>
    </div>
  </div>
  `);
};

eventHub.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  //open modal btn
  if (event.target.id === "postBtn") {
    modal.style.display = "block";
  }
  //cancel post btn
  if (event.target.classList.contains("closeMessage")) {
    modal.style.display = "none";
  }
});

//post button
//collect information from modal
eventHub.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  if (event.target.id === "postMessageBtn") {
    const recipientArray = directMessage();

    const customEvent = new CustomEvent("postEntered", {
      detail: {
        userId: sessionStorage.getItem("activeUser"),
        message: document.getElementById("message-textarea").value,
        recipientId: recipientArray,
        date: Date.now(),
      },
    });
    // Dispatch event to event hub if logged in
    if (sessionStorage.getItem("activeUser") !== null) {
      eventHub.dispatchEvent(customEvent);
    }
    modal.style.display = "none";
    document.getElementById("message-textarea").value = "";
  }
});

const directMessage = () => {
  //check the string for @
  const messageText = document.getElementById("message-textarea").value;
  const directMessageArray = messageText.split("@");
  let matchingUser = [];
  let recipients = [];
  //compare the string to matching user
  directMessageArray.map((directMessage) => {
    matchingUser = userArray.forEach((user) => {
      if (user.username === directMessage.split(" ")[0]) {
        //if the user matches add to recepients array
        recipients.push(user.id);
      }
    });
  });

  if (recipients.length === 0) {
    return null;
  } else {
    return recipients[0];
  }
};
