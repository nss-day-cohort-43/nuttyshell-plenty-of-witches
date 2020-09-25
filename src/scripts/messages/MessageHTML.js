//html for message cards in message feed/chat

export const MessageHTML = (messageObj) => {
  return `
  <section id="messageCard--${messageObj.id}">
  <div class="messageContent shadow">
    <div class="userIcon shadow"><a href="#">${
      messageObj.user.username
    }</a></div>
    <div class="messageText">${messageObj.message}</div>
    <div class="messageDetail">${deleteBtn(messageObj)}
    <div>${messageObj.date}</div>
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
