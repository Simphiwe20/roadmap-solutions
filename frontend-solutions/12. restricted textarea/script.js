// Create elements in the dom
let limit = document.createElement("p")
let char = document.createElement("p")
let max = document.createElement("p")

// Grab or query select an element
let limitContainer = document.querySelector(".limit-container")
let textArea = document.querySelector("textarea")

//Assign inner text to created elements
limit.innerText = 0
char.innerText = "/"
max.innerText = 250

// Append elements to their container
limitContainer.appendChild(limit)
limitContainer.appendChild(char)
limitContainer.appendChild(max)

textArea.addEventListener("keyup", (Ev) => {
    let count = Ev.target.value.length++ >= 250 ? 250 : Ev.target.value.length++
    count = Ev.key == "Backspace" ? count-- : count
    limit.innerText = count

    if(count == 250) {
        textArea.style.color = "red"
        textArea.style.outlineColor =  "red"
        limitContainer.style.color = "red"
    }else {
        textArea.style.color = "black"
        textArea.style.outlineColor =  "black"
        limitContainer.style.color = "black"
    }
})