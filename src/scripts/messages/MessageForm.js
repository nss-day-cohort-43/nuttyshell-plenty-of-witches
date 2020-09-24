const contentTarget = document.querySelector(".messageContainer");
export const MessageForm = () => {
  return (contentTarget.innerHTML = `
  <div class="message--history"></div>
  <div class="message--entry">
    <div class="message--input">
      <input type="text" class="message--inputbox" />
    </div>
    <div>
      <button class="postMessageBtn">Send</button>
    </div>
  </div>
  `);
};
