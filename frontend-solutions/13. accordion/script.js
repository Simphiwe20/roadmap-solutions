let arrow = document.querySelector("#arrow-down")
let answer = document.querySelector("#answer")

const sections = [
    {
        "Category: Web Development": [
            { "What is Angular used for?": "Angular is a TypeScript-based framework used for building dynamic and scalable web applications. It provides features like two-way data binding, dependency injection, and modular development." },
            { "What is Express.js?": "Express.js is a minimal and flexible Node.js web application framework that simplifies backend development by providing powerful routing, middleware, and request-handling capabilities." },
            { "What is the difference between Angular and AngularJS?": "AngularJS (version 1.x) is based on JavaScript, while Angular (2+ versions) is built with TypeScript. Angular is faster, more modular, and has better support for mobile applications." }
        ]
    },
    {
        "Category: Cloud Computing": [
            { "What is Firebase, and how is it used?": "Firebase is a cloud platform by Google that provides backend services like authentication, database, hosting, and cloud functions, making it easier to build and deploy web and mobile applications." },
            { "What are the benefits of cloud computing?": "Cloud computing offers scalability, cost-effectiveness, reliability, and easy maintenance. It eliminates the need for physical servers and allows access to data from anywhere." }
        ]
    }
]

arrow.addEventListener("click", Ev => {

    if (answer.style.display == "none") {
        answer.style.display = "block"
    } else {
        answer.style.display = "none"
    }
})

let keys = []

sections.forEach(section => {
    Object.keys(section).forEach(key => keys.push(key))
    console.log("keys.....: ", keys)
})

keys.map(key => {
    sections.forEach(question => {
        console.log("question.....: ", question[key])
        console.log("key.....: ", key)
        console.log("question.....: ", question)
        if(!question[key]) return
        question[key].forEach((_questions, indx) => {
            let _keys = Object.keys(_questions)
            console.log("answers: ", _questions[_keys])
            
        })
    })
})