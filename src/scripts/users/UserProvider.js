export const useUsers = () => usersArray.slice();

let usersArray = [];

export const getUsers = () => {
  return fetch(`http://localhost:8088/users`)
    .then((response) => response.json())
    .then((parsedUsers) => {
      usersArray = parsedUsers;
    });
};
