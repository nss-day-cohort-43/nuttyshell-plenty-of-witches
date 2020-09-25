//html for message cards in message feed/chat

export const MessageHTML = (messageObj) => {
  return `
  <section id="messageCard--${messageObj.id}">
  <div class="messageContent">
    <div class="userIcon"><a href="#">${messageObj.user.username}</a></div>
    <div>${messageObj.message}</div>
    <div>${messageObj.date}</div>
    ${deleteBtn(messageObj)}
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
    return `<button id="deleteMessageBtn--${theMessageObj.id}">Delete</button>`;
  } else {
    return "";
  }
};
