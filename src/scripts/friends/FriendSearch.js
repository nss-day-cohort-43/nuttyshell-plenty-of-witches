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
  });

//search for friend
eventHub.addEventListener("keyup", (event) => {
  const searchArray = [];
  const friendResults = document.getElementById("friendResults");
  if (event.target.id === "friend-textarea") {
    for (const user of userArray) {
      //check for seach mataches
      let userInSearch = user.username.includes(event.target.value);
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
  const currentFriendRelationship = theFriendsArray.filter(
    (friend) => friend.userId === parseInt(sessionStorage.getItem("activeUser"))
  );
  theFriendsArray.forEach((friend) => {
    if (
      friend.userId === parseInt(sessionStorage.getItem("activeUser")) &&
      friend.userId === theUserObj.id
    ) {
      button = "self";
    } else if (friend.followingId === theUserObj.id) {
      button = `<button id="deleteFriendBtn--${friend.id}">Delete</button>`;
    } else {
      button = `<button id="addFriendBtn--${theUserObj.id}">Add</button>`;
    }
  });
  return button;
};
