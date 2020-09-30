import { getUsers, useUsers } from "../users/UserProvider.js";
import { getFriends, useFriends } from "./FriendsProvider.js";

const eventHub = document.querySelector(".container");
let userArray = [];
let friendsArray = [];

getUsers()
  .then(getFriends)
  .then(() => {
    userArray = useUsers();
    friendsArray = useFriends();
  })
  .then(() => {
    openFriendModal(userArray);
  });

//search for friend
eventHub.addEventListener("input", (event) => {
  const searchArray = [];
  const friendResults = document.getElementById("friendResults");

  if (event.target.id === "friend-textarea") {
    for (const user of userArray) {
      //check for seach mataches
      let userName = user.username.toLowerCase();
      let userInSearch = userName.includes(event.target.value);

      friendsArray = useFriends();
      // there is a match add to click
      if (userInSearch) {
        searchArray.push(user);
      }
      friendResults.innerHTML = searchArray
        .map((result) => friendSearchHTML(result, friendsArray))
        .join("");
    }
  }
});

//check for seach mataches
const openFriendModal = (theUsersArray) => {
  const friendResults = document.getElementById("friendResults");
  eventHub.addEventListener("friendModalOpened", (event) => {
    friendResults.innerHTML = theUsersArray
      .map((result) => friendSearchHTML(result, theUsersArray))
      .join("");
  });
};

const friendSearchHTML = (userObj, theFriendsArray) => {
  return `  
  <div>
    <div class="friendSearchCard">
      <div class="searchFriendInfo">${userObj.username}</div> 
      <div class="searchFriendInfo">${userObj.firstName} ${
    userObj.lastName
  }</div>
      <div class="searchFriendInfo">${userObj.email}</div>
      <div class="friendDetail">${getFriendDetail(
        userObj,
        theFriendsArray
      )}</div>
    </div>
  </div>`;
};

const getFriendDetail = (theUserObj, theFriendsArray) => {
  let button = "";
  //get the matching frinds of the current user
  theFriendsArray.forEach((friend) => {
    if (
      friend.userId === parseInt(sessionStorage.getItem("activeUser")) &&
      friend.userId === theUserObj.id
    ) {
      button = "self";
    } else {
      button = `<button id="addFriendBtn--${theUserObj.id}">Add</button>`;
    }
  });
  return button;
};
