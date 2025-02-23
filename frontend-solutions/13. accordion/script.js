let accordionContainer = document.querySelector(".accordion-container")

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
    },
    {
        "Category: Networking": [
            { " What is the difference between HTTP and HTTPS?": "HTTP (Hypertext Transfer Protocol) is the standard for transferring web pages, while HTTPS (Hypertext Transfer Protocol Secure) adds an extra layer of security by encrypting the data using SSL/TLS." },
            { "What is an API?": "An API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. It enables the integration of third-party services into applications." }
        ]
    }
]

let keys = []

sections.forEach(section => {
    Object.keys(section).forEach(key => keys.push(key))
})

const addEv = (indx, answerRef) => {
    let arrow = document.getElementById(indx)
    let answer = document.getElementById(answerRef)


    arrow.addEventListener("click", Ev => {
        if (answer.style.display == "none") {
            answer.style.display = "block"
            arrow.innerHTML = "keyboard_arrow_down"
        } else {
            answer.style.display = "none"
            arrow.innerText = "keyboard_arrow_up"
        }
    })
}

const render = () => {
    keys.forEach((key, indx) => {
        sections.forEach((question, qIndex) => {
            if (!question[key]) return
            question[key].forEach((_questions, indx) => {
                let _keys = Object.keys(_questions).join()
                let el = document.createElement("div")
                
                //Add margin botton to a the above div
                el.style.marginBottom = "10px"

                el.innerHTML += `  ${indx == 0 ? `<h2>${key}</h2>` : ''}
                                            <div class="accordion">
                                                <div class="title flex spacebetween-center">
                                                    <h3>${_keys}</h3>
                                                    <span id="${qIndex.toString()}${indx.toString()}" class="material-symbols-outlined pointer">keyboard_arrow_down</span>
                                                </div>
                                                <p id="ans${qIndex.toString()}${indx.toString()}" class="answer margin-5px">${_questions[_keys]}</p>
                                            </div>     
                                            `
                accordionContainer.append(el)
                addEv(`${qIndex.toString()}${indx.toString()}`, `ans${qIndex.toString()}${indx.toString()}`)
            })
        })
    })
}

render()