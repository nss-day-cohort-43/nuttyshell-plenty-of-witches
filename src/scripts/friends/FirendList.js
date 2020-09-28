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
  let friendsInfoArray = [];
  //get the matching frinds of the current user
  const currentUserFriend = theFriendsArray.filter(
    (friend) => friend.userId === parseInt(sessionStorage.getItem("activeUser"))
  );

  //get the full user information for each following Id for the current user
  currentUserFriend.map((friendInfo) => {
    friendsInfoArray = theUsersArray.filter((user) => {
      return user.id === friendInfo.followingId;
    });
  });

  console.log(friendsInfoArray);
  contentTarget.innerHTML = friendsInfoArray.map((friendInfoObj) => {
    return FriendHTML(friendInfoObj);
  });
};
