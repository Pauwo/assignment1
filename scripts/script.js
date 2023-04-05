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
themeButton.addEventListener("click", clickHandler);

const textArea = document.querySelector("textarea")
const cancelsave = document.querySelector(".cancelsave")
const cancelButton = document.querySelector(".redbutton")
cancelButton.addEventListener("click", function() {
    textArea.style.display = "none";
    cancelsave.style.display = "none";
})

const newnotebtn = document.querySelector(".newnotebtn")
newnotebtn.addEventListener("click", function() {
    textArea.style.display = "initial";
    cancelsave.style.display = "initial";
    textArea.value = "";
})