//html forthe message feed/chat area

export const MessageForm = () => {
  const contentTarget = document.querySelector(".messageContainer");
  return (contentTarget.innerHTML = ` 
  <section> 
  <section id="messageHistory"></section>
  <div class="message--entry">
    <div class="message--input"></div>
    <div><button id="postBtn">Post</button></div>
  </div>
  </section>
  `);
};
