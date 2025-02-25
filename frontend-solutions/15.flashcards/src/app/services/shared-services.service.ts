import { Injectable } from '@angular/core';
import { Flashcard } from '../flashcard';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor() { }

  // All questions to show on my flashcard
  flashcards: Flashcard[] = [
    {
      question: "What is the difference between let, const, and var?",
      answer: "var is function-scoped and can be redeclared. let is block-scoped and can be reassigned but not redeclared. const is also block-scoped but cannot be reassigned or redeclared."
    },
    {
      question: "What is the difference between == and ===?",
      answer: "== compares values with type coercion, while === compares both value and type without coercion."
    },
    {
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that retains access to its outer function’s variables even after the outer function has finished executing."
    },
    {
      question: "What is the difference between synchronous and asynchronous JavaScript?",
      answer: "Synchronous JavaScript executes code sequentially, blocking further execution until a task completes. Asynchronous JavaScript allows tasks to run in the background without blocking execution, often using callbacks, promises, or async/await."
    },
    {
      question: "How does this behave in JavaScript?",
      answer: "this refers to the object that calls the function. In global scope, this is window (or global in Node.js). In strict mode, this is undefined in functions unless explicitly set."
    },
    {
      question: "What is the DOM in JavaScript?",
      answer: "The DOM (Document Object Model) is a tree structure representing an HTML document that allows JavaScript to dynamically manipulate webpage elements."
    },
    {
      question: "What is event delegation in JavaScript?",
      answer: "Event delegation is a technique where a parent element handles events for its child elements, improving performance and reducing the number of event listeners."
    },
    {
      question: "What is the difference between innerHTML and textContent?",
      answer: "innerHTML processes HTML inside an element, whereas textContent only sets or gets text without parsing HTML."
    },
    {
      question: "What is the difference between function expressions and function declarations?",
      answer: "Function declarations are hoisted and can be called before they appear in the code, whereas function expressions are not hoisted and must be defined before being called."
    },
    {
      question: "What is an Immediately Invoked Function Expression (IIFE)?",
      answer: "An IIFE is a function that runs immediately after it is defined, typically used to avoid polluting the global scope."
    },
    {
      question: "What is a Promise in JavaScript?",
      answer: "A Promise is an object representing a future value that may be resolved or rejected, commonly used for asynchronous operations."
    },
    {
      question: "What is the difference between async and await in JavaScript?",
      answer: "async is used to define a function that returns a Promise, and await pauses execution inside an async function until a Promise resolves."
    },
    {
      question: "What is the localStorage API?",
      answer: "localStorage allows storing key-value pairs in the browser with no expiration date, persisting even after a page reload."
    },
    {
      question: "What is the difference between sessionStorage and localStorage?",
      answer: "sessionStorage stores data only for the session and is cleared when the tab is closed, while localStorage persists data even after closing the browser."
    },
    {
      question: "What is the Fetch API?",
      answer: "The Fetch API is a modern interface for making HTTP requests, replacing XMLHttpRequest for fetching resources asynchronously."
    }
  ];

  getFlashcards(): Flashcard[] {
    return this.flashcards
  }

}
