export const FriendForm = () => {
  const contentTarget = document.querySelector(".friendContainer");
  return (contentTarget.innerHTML = `
  <section> 
    <h2>Friends List</h2>
    <div>
      <button id="addFriendBtn">Add Friend</button>
      <div id="friendContent">Friends List Goes Here</div>
    </div>
    <div class="friend-modal">
    <div class="modal-content">
      <span class="close-btn closeMessage">&times;</span>
      <h3>Add A Friend</h3>
      <input id="friend-textarea"></input>
      <div class="messageModalBtns">
      <button class="closeMessage">Cancel</button>
      <div id="modalButtonArea">
      </div>
      </div>
    </div>
  </div>
  </section>
  `);
};
