const tabs = document.querySelectorAll(".tab")
const contents = document.querySelectorAll("#content")

tabs.forEach((tab, indx) => {
    tab.addEventListener("click", (Ev) => {
        contents.forEach((content, _index) => {
            console.log("HIDDEN: ", content.getAttribute("hidden") != null)
            let isToHide = content.getAttribute("hidden") != null && _index == indx
            let isToUnhide = content.getAttribute("hidden") == null
            if (isToHide) {
                console.log("contents: ", contents)
                content.setAttribute("hidden", true)
                debugger
            } else if (isToUnhide) {
                console.log("contents: ", contents)
                content.removeAttribute("hidden")
                debugger

            }
            console.log(`TAB INDEX: ${indx} and CONTENT index: ${_index}`)

        })
    })
})

console.log("TABS: ", tabs)