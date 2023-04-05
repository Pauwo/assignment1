const themeButton = document.querySelector(".violetbutton")
const sidebarColor = document.querySelector(".sidebar")

function clickHandler() {
    themeButton.classList.toggle("darkButton")
    sidebarColor.classList.toggle("changeSidebarTheme")
    document.body.classList.toggle("changeBodyTheme")
    if (themeButton.textContent === "Dark Theme") {
        themeButton.textContent = "Light Theme";
    } else {
        themeButton.textContent = "Dark Theme"
    }
}

document.body.addEventListener("click", clickHandler);
