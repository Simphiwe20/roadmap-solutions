const tabs = document.querySelectorAll(".tab")
const contents = document.querySelectorAll("#content")
let previousIndex = 0
let tabIndex = 0

tabs.forEach((tab, indx) => {
    tab.addEventListener("click", (Ev) => {
        contents.forEach((content, _index) => {
            let isToHide = content.classList.value.includes('display-block')
            let isToUnhide = content.classList.value.includes('display-none') && _index == indx
            if (isToHide) {
                if (previousIndex == indx && previousIndex == _index) return
                content.classList.add("display-none")
                content.classList.remove("display-block")
            } else if (isToUnhide) {
                previousIndex = _index
                tabIndex = indx
                content.classList.remove("display-none")
                content.classList.add("display-block")
            }
        })

    })
})