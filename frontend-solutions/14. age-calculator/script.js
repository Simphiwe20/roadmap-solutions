const DateTime = luxon.DateTime;
let datePicker = document.querySelector("#datePicker")
let calculateBtn = document.querySelector("button")
let ageResEl = document.querySelector("#ageRes")

let currentDate = DateTime.fromISO(new Date().toISOString())


calculateBtn.addEventListener("click", (ev) => {
    ev.preventDefault()
    if(!datePicker.value)  return alert("Pick a date of birth")
    let dob = DateTime.fromISO( new Date(datePicker.value).toISOString())

    let yearsDif = currentDate.diff(dob, 'years');

    // Get years and months using destructuring
    let {years, months} = yearsDif.shiftTo("years", "months").toObject()
    // Check if month is greater that zero then add show month
    let checkMonths = Math.floor(months) ? `and ${Math.floor(months)} months` : ""
    // assign result in inner html of age res
    ageResEl.innerHTML = `You are ${years} years ${checkMonths} old`
})
