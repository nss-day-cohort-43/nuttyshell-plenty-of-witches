import { getFriends, useFriends, deleteFriend } from "./FriendsProvider.js";
import { getUsers, useUsers } from "../users/UserProvider.js";
import { FriendHTML } from "./FriendHTML.js";
const eventHub = document.querySelector(".container");
let friendsArray = [];
let usersArray = [];

export const FriendsList = () => {
  getFriends()
    .then(getUsers)
    .then(() => {
      friendsArray = useFriends();
      usersArray = useUsers();
      render(friendsArray, usersArray);
    });
};

//render list when information is changed
eventHub.addEventListener("friendStateChanged", () => {
  friendsArray = useFriends();
  usersArray = useUsers();
  render(friendsArray, usersArray);
});

const render = (theFriendsArray, theUsersArray) => {
  const contentTarget = document.getElementById("friendContent");

  //get the matching frinds of the current user
  const currentFriendRelationship = theFriendsArray.filter(
    (friend) => friend.userId === parseInt(sessionStorage.getItem("activeUser"))
  );

  //pass in the relationsip and the friend information
  contentTarget.innerHTML = currentFriendRelationship
    .map((relationship) => {
      const matchingUser = theUsersArray.find(
        (user) => relationship.followingId === user.id
      );
      return FriendHTML(relationship, matchingUser);
    })
    .join("");
};

//delete freiend from list
eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("delteFriendBtn")) {
    const [prefix, friendId] = event.target.id.split("--");
    console.log(friendId);
    // if (confirm("Are you sure you want to delete this friend?")) {
    //   deleteFriend(friendId);
    // }
  }
});
