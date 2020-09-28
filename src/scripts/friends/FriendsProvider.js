let friendsArray = [];

export const useFriends = () => {
  return friendsArray.slice();
};

export const getFriends = () => {
  return fetch("http://localhost:8088/friends?_expand=user")
    .then((response) => response.json())
    .then((parsedFriends) => {
      friendsArray = parsedFriends;
    });
};
