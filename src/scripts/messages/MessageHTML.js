//html for message cards in message feed/chat

export const MessageHTML = (messageObj) => {
  return `
  <section id="messageCard--${messageObj.id}">
  <div class="messageContent shadow">
    ${userIcon(messageObj)}
    <div class="messageText">${messageObj.message}</div>
    <div class="messageDetail">${deleteBtn(messageObj)}
    <div class="messageTime"> ${new Date(messageObj.date).toLocaleString(
      "en-US",
      {
        weekday: "short",
      }
    )} ${new Date(messageObj.date).toLocaleTimeString("en-US")}</div>
    </div>
  </div>
  </section>
  `;
};

//add delete and edit button to message card if logged in
const deleteBtn = (theMessageObj) => {
  if (
    parseInt(theMessageObj.user.id) ===
    parseInt(sessionStorage.getItem("activeUser"))
  ) {
    return `<button id="editMessageBtn--${theMessageObj.id}" class="editMessageBtn">Edit</button><button id="deleteMessageBtn--${theMessageObj.id}" class="deleteMessageBtn">Delete</button>`;
  } else {
    return "";
  }
};

//add diaplsy user Icon with colors
const userIcon = (theMessageObj) => {
  if (
    parseInt(theMessageObj.user.id) ===
    parseInt(sessionStorage.getItem("activeUser"))
  ) {
    return ` <a href="#"><div class="userIcon shadow currentUserIcon">${theMessageObj.user.username}</div></a>`;
  } else {
    return `<a href="#"><div class="userIcon shadow otherUserIcon">${theMessageObj.user.username}</div></a>`;
  }
};
