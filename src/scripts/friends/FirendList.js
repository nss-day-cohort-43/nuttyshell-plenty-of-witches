import { getFriends, useFriends } from "./FriendsProvider.js";
let friendsArray = [];

export const FriendsList = () => {
  getFriends().then(() => {
    friendsArray = useFriends();
    render(friendsArray);
  });
};

const render = (theFriendsArray) => {
  console.log(theFriendsArray);
};
