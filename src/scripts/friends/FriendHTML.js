export const FriendHTML = (relationshipObj, friendObj) => {
  return `
  <div id="friendCard--${relationshipObj.id}" class="friendCard">
    <div class="userIcon friendIcon">
      <div>${friendObj.username}</div> 
    </div>
      <div class="frindInfo">
      <ul>
      <li>${friendObj.firstName} ${friendObj.lastName}</li>
      <li>${friendObj.email}</li>
      </ul>
    </div>
  </div>
  `;
};
