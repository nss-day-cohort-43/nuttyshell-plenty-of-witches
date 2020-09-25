export const MessageForm = () => {
  const contentTarget = document.querySelector(".messageContainer");
  return (contentTarget.innerHTML = ` 
  <section> 
  <section id="messageHistory"></section>
  <div class="message--entry">
    <div class="message--input"></div>
    <div><button id="postMessageBtn">Post</button></div>
  </div>
  </section>
  `);
};
