// The array of questions for the game.
var questions = [
    {
        q: 'Commonly used data types do NOT include:', answers: ["strings", "booleans", "alerts", "numbers"], correct: "alerts",
    },
    {
        q: 'The condition in an if / else statement is enclosed with ____', answers: ["quotes", "curly brackets", "parenthesis", "square brackets"], correct: "parenthesis",
    },
    {
        q: 'Arrays in JavaScript can be used to store ____', answers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correct: "all of the above",
    },
    {
        q: 'String values must be enclosed within ____ when being assigned to variables', answers: ["commas", "curly brackets", "quotes", "parentheses"], correct: "quotes",
    },
    {
        q: 'A very use ful tool used during development and debugging for printing content to the debugger is:', answers: ["JavaScript", "terminal/bash", "for loops", "console.log"], correct: "console.log",
    }
]

// create element for Timer second count
var timerEl = document.getElementById("timer");
// Get references to the #start element
var startBtn = document.querySelector("#start");
// Get references to each answer button
answerBtn1 = document.getElementById(btn1);
answerBtn2 = document.getElementById(btn2);
answerBtn3 = document.getElementById(btn3);
answerBtn4 = document.getElementById(btn4);

// Timer that counts down from 75 once start button is pressed
var timeLeft = 75;
function timer() {
    //lilo version
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 0
        if (timeLeft > 0) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            console.log("Quiz ran out of time!")
        }
    }, 1000);
}

// function to start timer and show questions, called by startBtn
function startQuiz() {
    //start timer
    timer();
    // show questions
    var questionsEl = document.getElementById("questions");
    questionsEl.style.display = "block";
    var startSectionEl = document.getElementById("start-section");
    startSectionEl.style.display = "none";
}

// click answer button, see right/wrong for a few seconds, update question (important)
function showNextQuestion() {
    console.log("function showNextQuestion is working!");

}

// add event listener to start button
startBtn.addEventListener("click", startQuiz)

// add event listener to each answer button
// answerBtn2.addEventListener("click", showNextQuestion);
// answerBtn3.addEventListener("click", showNextQuestion);
// answerBtn4.addEventListener("click", showNextQuestion);
// answerBtn5.addEventListener("click", showNextQuestion);