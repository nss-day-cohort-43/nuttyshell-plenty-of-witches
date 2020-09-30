export const FriendHTML = (relationshipObj, friendObj) => {
  return `
  <div id="relationshipCard--${relationshipObj.id}" id="friendCard--${friendObj.id}" class="friendCard">
    <div class="userIcon friendIcon">
      <div>${friendObj.username}</div> 
    </div>
      <div class="frindInfo">
      <ul>
      <li>${friendObj.firstName} ${friendObj.lastName}</li>
      <li>${friendObj.email}</li>
      <li><button id="deleteFriendBtn--${relationshipObj.id}">Delete</button></li>
      </ul>
    </div>
  </div>
  `;
};
