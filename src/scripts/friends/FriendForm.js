export const FriendForm = () => {
  const contentTarget = document.querySelector(".friendContainer");
  return (contentTarget.innerHTML = `
  <section> 
    <h2>Friends List</h2>
    <div>
      <button>Add Friend</button>
      <div id="friendContent">Friends List Goes Here</div>
    </div>
  </section>
  `);
};
