const closeBtn = document.querySelector(".close");
const popUpContainer = document.querySelector(".popUp-container");
const btn = document.querySelector("#btn");
let isCookieAvail;

closeBtn.addEventListener("click", (Ev) => {
    popUpContainer.setAttribute("hidden", true)
})

btn.addEventListener("click", (Ev) => {
    setCookies("name", "Simphiwe Makhathini", 1)
    popUpContainer.setAttribute("hidden", true)
})

const setCookies = (cname, cvalue, exdays) => {
    const date = new Date()
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/frontend-solutions/11.%20cookie%20consent";
}

const getCookies = (_cname) => {
    let cookies = document.cookie.split(";");

    for (let i = 0; cookies.length > i; i++) {
        isCookieAvail = cookies[i].trim().includes(_cname) ? cookies[i] : undefined
    }
}

getCookies("name")

const checkCookie = () => {
    // Hide the popUp if the are cookies
    if (isCookieAvail) {
        popUpContainer.setAttribute("hidden", true)
    }

}

// Check to see if a popUp should show or not
checkCookie()

console.log("isCookieAvail: ", isCookieAvail)