const eventHub = document.querySelector(".container");
import { getSingleMessage, updateMessage } from "./MessageProvider.js";

eventHub.addEventListener("editMessageSelected", (event) => {
  const modal = document.querySelector(".modal");
  //open modal
  modal.style.display = "block";
  const messageId = event.detail.messageId;

  getSingleMessage(messageId).then((responseObj) => {
    console.log(responseObj);
  });
});
