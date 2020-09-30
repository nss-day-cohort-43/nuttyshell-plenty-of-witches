const eventHub = document.querySelector(".container");
let friendsArray = [];

export const useFriends = () => {
  return friendsArray.slice();
};

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("friendStateChanged"));
};

export const getFriends = () => {
  return fetch(`http://localhost:8088/friends?_expand=user`)
    .then((response) => response.json())
    .then((parsedFriends) => {
      friendsArray = parsedFriends;
    });
};

export const deleteFriend = (friendId) => {
  return fetch(`http://localhost:8088/friends/${friendId}`, {
    method: "DELETE",
  })
    .then(getFriends)
    .then(dispatchStateChangeEvent);
};

export const addFriend = (friend) => {
  return fetch(`http://localhost:8088/friends`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(friend),
  })
    .then(getFriends)
    .then(dispatchStateChangeEvent);
};
