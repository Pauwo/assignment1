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

const notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"this is my second note"}]

const saveButton = document.querySelector(".saveButton")
const sidebarLists = document.querySelector(".sidebarLists")
saveButton.addEventListener("click", function() {
    const user_title = prompt("What's the title of the note?")
    const text_area_note = textArea.value
    notesArray.push({title: user_title, body: text_area_note})
    const newli = document.createElement('li')
    const textNode = document.createTextNode(user_title);
    newli.appendChild(textNode);
    newli.classList.add("mynoteslist")
    sidebarLists.appendChild(newli);
})

sidebarLists.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        const listTitle = event.target.textContent;

        for (let item in notesArray) {
            const notes = notesArray[item];

            if (listTitle === notes.title) {
                console.log(notes.body);
                textArea.value = notes.body
            }
        }
    }
})