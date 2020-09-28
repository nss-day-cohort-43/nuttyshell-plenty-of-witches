export const FriendForm = () => {
  const contentTarget = document.querySelector(".friendContainer");
  return (contentTarget.innerHTML = `
  <section> 
    <h2>Friends List</h2>
    <div>
      <button id="manageFriendBtn">Manage Friends</button>
      <div id="friendContent">Friends List Goes Here</div>
    </div>
    <div class="friend-modal">
    <div class="modal-content">
      <span class="close-btn closeMessage">&times;</span>
      <h3>Add A Friend</h3>
      <input id="friend-textarea"></input>
      <div class="messageModalBtns">
      <div id="friendResults"></div>
      <div id="modalButtonArea">
      </div>
      </div>
    </div>
  </div>
  </section>
  `);
};
