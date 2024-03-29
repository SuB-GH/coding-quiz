// Declare/assign variables here
var origText = document.getElementById("main-text");
var choicesDiv = document.getElementById("choices")
var timerEl = document.getElementById("clock");
var buttonEl = document.getElementById("start-quiz");
var mainEl = document.getElementById("main-text");
var timeLeft = 75;
var initBtn = document.getElementById("saveInit")
var initEl = document.getElementById("inputInit")
var testSaveInitEl = document.getElementById("testSaveInit")

initEl.style.display = "none";

questionArray = [
    {
        question: "Why do we use JavaScript?",
        choices: ["to create the layout of a webpage", "to store data", "to make webpages interactive", "to buy things online"],
        correctAns: "to make webpages interactive"
    },

    {
        question: "How are strings defined in JavaScript?",
        choices: ["with a semicolon", "with quotes", "they are capitalized", "with parentheses"],
        correctAns: "with quotes"
    },

    {
        question: "What is a boolean value?",
        choices: ["a true or false value", "an object", "a null value", "a sentence"],
        correctAns: "a true or false value"
    },
    {
        question: "How do we add JavaScript to an html file?",
        choices: ["<script></script> tags", "<java></java> tags", "<html></html> tags", "<css></css> tags"],
        correctAns: "<script></script> tags"
    },

    {
        question: "Which function will reference the heading in your html file?",
        choices: ["get.header('h1')", "document.querySelector('h1')", "document.queryHeader", "queryHeader('select')"],
        correctAns: "document.querySelector('h1')"
    },

    {
        question: "What are 'const' and 'let'?",
        choices: ["types of functions", "types of objects", "types of algorithms", "types of variables"],
        correctAns: "types of variables"
    }
]
let index = 0;
let yourScore = 0;

const checkAnswer = function (event) {
    let correctAns = questionArray[index].correctAns
    let choiceVal = this.innerText;  // "choiceVal" is the answer that was chosen

    // if the correct answer was chosen
    if (choiceVal == correctAns) {
        console.log(true)

        // if incorrect answer was chosen, alert pops up and 10 seconds removed from timer
    } else {
        console.log(false)
        window.alert("Wrong Answer")
        timeLeft = timeLeft - 10;
    }

    index++;
    startQuiz()
}

questionList++;
var questionList = 1;

const startQuiz = function () {
    // if there are no more questions, end quiz
    if (!questionArray[index]) {
        endQuiz();
        return;  // stops the rest of the function below        
    }

    let question = questionArray[index].question;
    let choices = questionArray[index].choices;

    choicesDiv.innerText = ""

    origText.innerHTML = question; // this hides the main text and brings up the first question
    buttonEl.style.display = "none";

    // loop through question array
    for (var i = 0; i < choices.length; i++) {

        let btn = document.createElement("button");

        btn.innerText = choices[i];
        choicesDiv.appendChild(btn);

        btn.onclick = checkAnswer;
    }
}

// function to start the timer
const countdown = function () {
    timeLeft = 75;

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            endQuiz();
        }

    }, 1000);
}

//starts the countdown timer upon button click
buttonEl.addEventListener("click", function () {
    countdown();
})

//this is what saves the initials
function saveInitials() {
    var testInput = initEl.value;
    console.log(testInput); //"testInput" are the initials that are saved
}

function showHighScore() {
    testInput = initEl.value;
    origText.innerHTML = "High Score    " + testInput + ':  ' + timeLeft;
    choicesDiv.innerText = "";
}

function endQuiz() {
    console.log("end quiz!");
    clearInterval(timeInterval);

    initEl.style.display = "block"; // this "unhides" the initials input field
    let form = document.createElement("button"); // this creates a "save initials" button
    form.setAttribute("method", "post"); // 
    form.innerHTML = "save initials"; // this works as a button to save the initials

    form.onclick = function () {
        saveInitials()
        {
            let highScoreBtn = document.createElement("button");
            highScoreBtn.setAttribute("method", "post");
            highScoreBtn.innerHTML = "view high scores"
            document.body.appendChild(highScoreBtn);
            highScoreBtn.onclick = showHighScore;

        };
    };

    document.body.appendChild(form);
    origText.innerHTML = "The quiz has ended";
    choicesDiv.innerText = "your score is: " + timeLeft;

    timerEl.textContent = timeLeft + ' seconds remaining'; // this updates the timer
    saveScore();
    showScore();

}
// this saves the score to local storage
var saveScore = function () {
    localStorage.setItem("yourScore", JSON.stringify(timeLeft));
}

// this retrieves score from local storage
var showScore = function () {
    var savedScore = localStorage.getItem("yourScore");

    return savedScore;
}