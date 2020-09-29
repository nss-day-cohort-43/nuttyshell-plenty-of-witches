import { getUsers, useUsers } from "../users/UserProvider.js";
import { getFriends, useFriends } from "./FriendsProvider.js";
import "./FriendSearch.js";

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
    //eventHub.dispatchEvent(new CustomEvent("friendModalOpened"));
    friendModal.style.display = "block";
  }
  //icon clicked
  if (
    //event.target.classList.contains("userIcon") &&
    !event.target.classList.contains("currentUserIcon")
  ) {
    eventHub.dispatchEvent(new CustomEvent("friendModalOpened"));
    friendModal.style.display = "block";
  }
  //cancel btn
  if (event.target.classList.contains("closeMessage")) {
    friendModal.style.display = "none";
  }
});
