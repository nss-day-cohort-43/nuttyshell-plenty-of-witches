export const FriendHTML = (friendObj) => {
  return `
  <div id="friendCard--${friendObj.followingId}" class="frindsCard">
    <div class="friendIcon">
      <div>Icon</div> 
      <p>username</p>
    </div>
      <div class="frindInfo">
      <ul>
      <li>First Last</li>
      <li>email</li>
      </ul>
    </div>
  </div>
  `;
};
