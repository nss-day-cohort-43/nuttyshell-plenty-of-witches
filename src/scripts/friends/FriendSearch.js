import { getUsers, useUsers } from "../users/UserProvider.js";

const eventHub = document.querySelector(".container");
let userArray = [];

getUsers().then(() => (userArray = useUsers()));

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
      <div class="friendDetail">${getFriendDetail(userObj)}</div>
    </div>
  </div>`;
};

const getFriendDetail = (theUserObj) => {
  let button = "button";
  //collect all friends fron frineds list
  let friendsObj = document.querySelectorAll('[id^="friendCard"]');

  friendsObj.forEach((friend) => {
    //collect the ids of all frinds in friendlist
    const [prefix, friendId] = friend.id.split("--");
    if (theUserObj.id === parseInt(sessionStorage.getItem("activeUser"))) {
      button = "Self";
    } else if (parseInt(friendId) === theUserObj.id) {
      button = `<button id="addFriendBtn--${theUserObj.id}">Add</button>`;
    } else {
      button = `<button id="delteFriendBtn--${theUserObj.id}">Delete</button>`;
    }
  });
  return button;
};
