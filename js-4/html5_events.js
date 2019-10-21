// onclick = when you click
// onchange =  when an input changes
// onfocus = when cursor is on an input
// onblur = when the cursor is out of an input
// onmouseover = when you hover
// onmouseout = when you hover out

function handleClick() {
    console.log("clicked!")
}

function handleFormClick(event) {
    // prevent page form refreshing
    event.preventDefault();

    const target = event.target;
    console.log("target", target)
    
    const tagName = event.target.tagName;
    console.log("tagName", tagName)
    

    const inputValue = document.getElementById("NameInput").value 
    console.log("input", inputValue)
    
    const newLine = document.createElement("li")
    newLine.textContent = inputValue;

    const list = document.getElementById("NameLists")
    list.appendChild(newLine);

    document.getElementById("NameInput").value = ""
}

const handleInputChange = (event) => {
    console.log("input", event.target.value);

}

const handleFocus = () => {
    console.log("focused")
}

const handleBlur = () => {
    console.log("blurred")
}

const handleMouseOver = () => {
    console.log("mouseover")
}

const handleMouseOut = () => {
    console.log("mouse out")
}