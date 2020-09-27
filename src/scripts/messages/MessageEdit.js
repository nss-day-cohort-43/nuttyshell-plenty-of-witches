import { getSingleMessage, updateMessage } from "./MessageProvider.js";
import { directMessage } from "./MessageModal.js";
const eventHub = document.querySelector(".container");

let editedObj = {};
let messageId;

//open modal with most recent message information
eventHub.addEventListener("editMessageSelected", (event) => {
  document.getElementById(
    "modalButtonArea"
  ).innerHTML = `<button id="editMessageBtn">Post</button>`;
  const modal = document.querySelector(".modal");

  //open modal
  modal.style.display = "block";
  messageId = event.detail.messageId;

  //put selected message text inside modal
  getSingleMessage(messageId).then((responseObj) => {
    editedObj = { ...responseObj };
    document.getElementById("message-textarea").value = responseObj.message;
  });
});

//update message with new information
eventHub.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  if (event.target.id === "editMessageBtn") {
    //make a replacement object
    const updatedMessage = {
      userId: sessionStorage.getItem("activeUser"),
      message: document.getElementById("message-textarea").value,
      recipientId: directMessage(),
      date: Date.now(),
    };
    updateMessage(updatedMessage, messageId);
    //close modal and clear text area
    modal.style.display = "none";
    document.getElementById("message-textarea").value = "";
  }
});
