export const MessageHTML = (messageObj) => {
  return `
  <section id="messageCard--${messageObj.id}">
  <div class="messageContent">
    <div class="userIcon"><a href="#">${messageObj.user.username}</a></div>
    <div>${messageObj.message}</div>
    <div>${messageObj.date}</div>
  </div>
  </section>
  `;
};
