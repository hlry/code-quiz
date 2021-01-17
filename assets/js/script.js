// The array of questions for the game.
var questions = [
    {
        q: 'Commonly used data types do NOT include:', answers: ["strings", "booleans", "alerts", "numbers"], correct: "alerts",
    },
    {
        q: 'The condition in an if / else statement is enclosed with ____.', answers: ["quotes", "curly brackets", "parenthesis", "square brackets"], correct: "parenthesis",
    },
    {
        q: 'Arrays in JavaScript can be used to store ____.', answers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correct: "all of the above",
    },
    {
        q: 'String values must be enclosed within ____ when being assigned to variables', answers: ["commas", "curly brackets", "quotes", "parentheses"], correct: "quotes",
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:', answers: ["JavaScript", "terminal/bash", "for loops", "console.log"], correct: "console.log",
    },
]

// create element for Timer second count
var timerEl = document.getElementById("timer");
// Get references to the #start element
var startBtn = document.querySelector("#start");
// Get references to each answer button
var answerBtn1 = document.querySelector("#btn1");
var answerBtn2 = document.querySelector("#btn2");
var answerBtn3 = document.querySelector("#btn3");
var answerBtn4 = document.querySelector("#btn4");
// Get reference to Displayed Question
var currentQuestionEl = document.getElementById("currentQuestion");

// create var question index for iterating questions (start at 1 because start button displays array 0)
var indexQuestion = 1;

// create element for end-game content
var endGameEl = document.querySelector("#end-game");

// set initial countdown value
var timeLeft = 75;

function timer() {
    // Timer that counts down once start button is pressed
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
            console.log("Quiz ran out of time!");
        }
    }, 1000)
    return timeLeft;
    // console.log(timeLeft);
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
    console.log("function showNextQuestion is working!");
    currentQuestionEl.innerHTML = questions[0].q;
    answerBtn1.innerHTML = questions[0].answers[0];
    answerBtn2.innerHTML = questions[0].answers[1];
    answerBtn3.innerHTML = questions[0].answers[2];
    answerBtn4.innerHTML = questions[0].answers[3];
}

// click answer button to update Q&A set; see right/wrong for a few seconds
function showNextQuestion() {
    if (indexQuestion > questions.length - 1) {
        currentQuestionEl.style.display = "none";
        answerBtn1.style.display = "none";
        answerBtn2.style.display = "none";
        answerBtn3.style.display = "none";
        answerBtn4.style.display = "none";
        endGameEl.style.display = "block";
        return;
    } else {
        //if time is left, continue showing questions and answer buttons
        currentQuestionEl.innerHTML = questions[indexQuestion].q;
        answerBtn1.innerHTML = questions[indexQuestion].answers[0];
        answerBtn2.innerHTML = questions[indexQuestion].answers[1];
        answerBtn3.innerHTML = questions[indexQuestion].answers[2];
        answerBtn4.innerHTML = questions[indexQuestion].answers[3];
        indexQuestion++;
        console.log("You made it to another question!")
    }
}

// add event listener to start button
startBtn.addEventListener("click", startQuiz)

// add event listener to each answer button
answerBtn1.addEventListener("click", showNextQuestion);
answerBtn2.addEventListener("click", showNextQuestion);
answerBtn3.addEventListener("click", showNextQuestion);
answerBtn4.addEventListener("click", showNextQuestion);