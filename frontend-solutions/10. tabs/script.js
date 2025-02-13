const tabs = document.querySelectorAll(".tab")
const contents = document.querySelectorAll("#content")
const previousIndex = undefined

tabs.forEach((tab, indx) => {
    tab.addEventListener("click", (Ev) => {
        contents.forEach((content, _index) => {
            console.log("HIDDEN: ", content.classList.value)
            let isToHide = content.classList.value.includes('display-block')
            let isToUnhide = content.classList.value.includes('display-none') && _index == indx
            if (isToHide && !(previousIndex == _index && isToHide)) {
                // console.log("contents: ", contents)
                content.classList.add("display-none")
                content.classList.remove("display-block")
                debugger
            } else if (isToUnhide) {
                console.log("contents: ", contents)
                content.classList.remove("display-none")
                content.classList.add("display-block")
                debugger

            }
            console.log(`TAB INDEX: ${indx} and CONTENT index: ${_index}`)

        })
    })
})

console.log("TABS: ", tabs)