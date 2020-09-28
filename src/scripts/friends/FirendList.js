import { getFriends, useFriends } from "./FriendsProvider.js";
import { getUsers, useUsers } from "../users/UserProvider.js";
import { FriendHTML } from "./FriendHTML.js";
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
