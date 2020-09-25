//html forthe message feed/chat area

export const MessageForm = () => {
  const contentTarget = document.querySelector(".messageContainer");
  return (contentTarget.innerHTML = ` 
  <section> 
  <h2>Message Feed</h2>
  <section id="messageHistory"></section>
  <div class="message--entry">
    <div class="message--input"></div>
  </div>
  <div class="addPost"><button id="postBtn">Add Post</button></div>
  </section>
  <hr>
  `);
};
