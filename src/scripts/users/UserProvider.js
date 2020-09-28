//get user info from database
export const useUsers = () => usersArray.slice();

let usersArray = [];

export const getUsers = () => {
  return fetch(`http://localhost:8088/users?_expand=user`)
    .then((response) => response.json())
    .then((parsedUsers) => {
      usersArray = parsedUsers;
    });
};

export const getCurrentUser = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
      .then((response) => response.json())
      .then((parsedUser) => {
        return parsedUser
      });
  };