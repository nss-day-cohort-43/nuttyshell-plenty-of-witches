const eventHub = document.querySelector(".container");

export const FriendModal = () => {};

eventHub.addEventListener("click", (event) => {
  const friendModal = document.querySelector(".friend-modal");
  if (event.target.id === "addFriendBtn") {
    friendModal.style.display = "block";
  }
  //cancel btn
  if (event.target.classList.contains("closeMessage")) {
    friendModal.style.display = "none";
  }
});
