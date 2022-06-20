/* 
User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
 */

/*
Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/

var timerEl = document.getElementById('countdown');
var buttonEl = document.querySelector("#take-quiz");
var questionContainerElement = document.getElementById('question-container')
var randomizedQuestions, currentQuestionIndex


/*
buttonEl.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
}
*/

var question = {
    text: "test question",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correct: 0
}

buttonEl.addEventListener("click", function () {
    // to-do: add question #1
    countdown();
   
})

buttonEl.addEventListener("click", startGame) 

function startGame() {
console.log('started')
randomizedQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
nextQuestion()
   
}

function nextQuestion() {
    showQuestion(randomizedQuestions[currentQuestionIndex])

}

var questions = [
    {
        question: "What is 1+3",
        answers: [
            { text: '4', correct: true },
            { text: '44', correct: false }

        ]
    }
]

console.log(questions);

function countdown() {

    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }

    }, 1000);
}
//adding a function called quizStart to initiate when button clicked
function quizStart() {
    var question = {
        text: "test question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: 0
    }
    
}

/* add a start quiz function to run when button is clicked
function quizStart() {}
*/

buttonEl.addEventListener("click", function () {

    let quizQuestions = document.querySelector("section");
    quizQuestions.innerText = "get question 1 in here somehow";

})

// button click initiates timer -and- pop-up question ()


// answering the question correctly initiates another question

/* List of questions:

1) True or false: The DOM is built into the JavaScript language.
True
Answer: False

2) What does event.preventDefault() do?
Answer: It stops the browser from reloading the page upon a form submission.
It stops the browser from allowing the form submission event to occur.

3) True or false: there is a bug in the following code.
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class="task-name">" + taskDataObj.name + "</h3><span class="task-type">" +
taskDataObj.type + "</span>";

Answer: True
False
*/


// answering the question incorrectly, time is subtracted from the clock



// when all questions are answered, or timer = 0, the game is over



// when the game is over, I can save my initials and score  



