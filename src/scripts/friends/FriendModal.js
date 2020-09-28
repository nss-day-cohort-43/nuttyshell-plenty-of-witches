import { getUsers, useUsers } from "../users/UserProvider.js";
import { getFriends, useFriends } from "./FriendsProvider.js";

const eventHub = document.querySelector(".container");
let userArray = [];
let friendsArray = [];

export const FriendModal = () => {
  getUsers()
    .then(getFriends)
    .then(() => {
      userArray = useUsers();
      friendsArray = useFriends();
    });
};

eventHub.addEventListener("click", (event) => {
  const friendModal = document.querySelector(".friend-modal");
  if (event.target.id === "manageFriendBtn") {
    friendModal.style.display = "block";
  }
  //cancel btn
  if (event.target.classList.contains("closeMessage")) {
    friendModal.style.display = "none";
  }
});

//search for friend
eventHub.addEventListener("keyup", (event) => {
  const searchArray = [];
  const friendResults = document.getElementById("friendResults");
  if (event.target.id === "friend-textarea") {
    for (const user of userArray) {
      //check for seach mataches
      let userInSearch = user.username.includes(event.target.value);
      // there is a match add to click
      if (userInSearch) {
        searchArray.push(user);
      }
      friendResults.innerHTML = searchArray
        .map((result) => friendSearchHTML(result))
        .join("");
    }
  }
});

const friendSearchHTML = (userObj) => {
  return `  
  <div>
    <div class="friendSearchCard">
      <div class="searchFriendInfo">${userObj.username}</div> 
      <div class="searchFriendInfo">${userObj.firstName} ${
    userObj.lastName
  }</div>
      <div class="searchFriendInfo">${userObj.email}</div>
      <div id="friendDetail">${getFriendDetail(userObj)}</div>
    </div>
  </div>`;
};

const getFriendDetail = (theUserObj) => {
  for (const friend of friendsArray) {
    if (theUserObj.id !== sessionStorage.getItem("activeUser")) {
      if (friend.followingId === theUserObj.id) {
        return `<button id="deleteFriendBtn--${theUserObj.id}">Delete</button>`;
      } else {
        return `<button id="addFriendBtn--${theUserObj.id}">Add</button>`;
      }
    }
  }
};
