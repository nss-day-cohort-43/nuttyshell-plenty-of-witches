import { getFriends, useFriends } from "./FriendsProvider.js";

export const FriendsList = () => {
  getFriends().then(() => {
    console.log(useFriends());
  });
};
