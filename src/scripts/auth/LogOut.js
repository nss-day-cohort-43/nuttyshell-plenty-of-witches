let eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if (event.target.id === "logOutBtn") {
        console.log("log out btn pressed")
        sessionStorage.clear();
        location.reload();
    }
})


export const LogOut = () => {
    let btnHome = document.querySelector(".logOut")

    btnHome.innerHTML = `
    <button id="logOutBtn">Log Out</button>
    `
}