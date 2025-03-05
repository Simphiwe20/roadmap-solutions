const optionsEl = document.querySelector(".options")
const iconsEle = document.querySelector("#select-icon")

const options = [
    { display: "First item", value: "first item", isSelected: false },
    { display: "Second item", value: "Second item", isSelected: false },
    { display: "Third item", value: "Third item", isSelected: false },
    { display: "Forth item", value: "Forth item", isSelected: false },
    { display: "Fifth item", value: "Fifth item", isSelected: false },
]

options.forEach((option, indx) => {
    let optionEl = document.createElement("div")
    // Add a border based on a an option index 
    if (indx != 0 && indx != options.length - 1) {
        optionEl.style.borderTop = "1px solid grey"
    } else if (indx == options.length - 1) {
        optionEl.style.borderTop = "1px solid grey"
    }

    // Add an element to an option ref element 
    optionEl.innerHTML += `
        <div class="selectOpt flex spacebetween-center hover padding-5px gap1em width-150px pointer">
            <p>${option.display}</p>
        </div>
    `
    optionsEl.append(optionEl)
})

const openSelect = () => {
    if (optionsEl.style.display == "inline-block") {
        optionsEl.style.display = "none"
    } else {
        optionsEl.style.display = "inline-block"
    }
}

const select = () => {

}

// Add an eventlistener to an select
iconsEle.addEventListener("click", (EV) => {
    openSelect()
})

let optionEls = document.querySelectorAll(".selectOpt")

optionEls.forEach(option => {
    option.addEventListener("click", (EV) => {
        console.log("OPTION: ", option)
    })
})