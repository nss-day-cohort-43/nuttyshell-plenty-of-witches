//html for message cards in message feed/chat

export const MessageHTML = (messageObj) => {
  return `
  <section id="messageCard--${messageObj.id}">
  <div class="messageContent shadow">
  <a href="#"><div class="userIcon shadow">${messageObj.user.username}</div></a>
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

//add delete button to message card if logged in
const deleteBtn = (theMessageObj) => {
  if (
    parseInt(theMessageObj.user.id) ===
    parseInt(sessionStorage.getItem("activeUser"))
  ) {
    return `<button id="deleteMessageBtn--${theMessageObj.id}" class="deleteMessageBtn">Delete</button>`;
  } else {
    return "";
  }
};
