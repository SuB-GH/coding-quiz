// Declare/assign variables here
var origText = document.getElementById("main-text");
var choicesDiv = document.getElementById("choices")
var timerEl = document.getElementById("clock");
var buttonEl = document.getElementById("start-quiz");
var mainEl = document.getElementById("main-text");
var timeLeft = 75;

questionArray = [
    {
        question: "Why do we use JavaScript?",
        choices: ["to create the layout of a webpage", "to store data", "to make webpages interactive", "to buy things online"],
        correctAns: "to make webpages interactive"
    },

    {
        question: "How are strings defined in JavaScript",
        choices: ["with a semicolon", "with quotes", "they are capitalized", "with parentheses"],
        correctAns: "with quotes"
    },

    {
        question: "test question 3",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: "answer1"
    },
    {
        question: "test question 4",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: "answer1"
    },

    {
        question: "test question 5",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: "answer2"
    },

    {
        question: "test question 6",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: "answer4"
    }
]
let index = 0;
let yourScore = 0;

const checkAnswer = function (event) {
    let correctAns = questionArray[index].correctAns
    let choiceVal = this.innerText;
    console.log(choiceVal); // "choiceVal" is the answer that was chosen

    if (choiceVal == correctAns) {
        console.log(true)

    } else {
        console.log(false)
        //window.alert("Wrong Answer, Try Again");
        window.alert("Wrong Answer")
        timeLeft = timeLeft - 10;
        //document.write("Wrong Answer");
        // return timeLeft;           
    }

    //if not at end of array length
    index++;
    startQuiz()
    //else: end quiz

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

    origText.innerHTML = question; // this hides the "main text and brings up the first question"
    buttonEl.style.display = "none";

    // loop through question array
    for (var i = 0; i < choices.length; i++) {
        // pass each question into the `createQuestionEl()` function
        //startQuiz(question[i]);
        let btn = document.createElement("button");
        btn.innerText = choices[i];
        choicesDiv.appendChild(btn);

        btn.onclick = checkAnswer;
    }
}
// Save user's initials and score to local storage
function saveItem() {
    var savedList = getScore();
    savedList.push();
    localStorage.setItem("SavedScore", JSON.stringify(savedList));
};

function saveScore() {
    var scoreItem = {
        userInitials: userInit.value,
        score: yourScore
    }
    saveItem(scoreItem);
    renderScore();
}

const countdown = function () {
    timeLeft = 75;

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            console.log("quiz over!");
            endQuiz();
            //yourScore.textContent = Your Score is : " + "
        }
        // else if (questionList >= questionArray.length + 1) {
        //     clearInterval(timeInterval);
        //     endQuiz();

        // }

    }, 1000);

}

buttonEl.addEventListener("click", function () {
    //startQuiz();
    countdown();
})

function endQuiz() {
    console.log("end quiz!");
    clearInterval(timeInterval);
    origText.innerHTML = "quiz over"; 
    //choicesDiv.innerText = "show score here"
    choicesDiv.innerText = "your score is " + timeLeft;
    timerEl.textContent = timeLeft + ' seconds remaining'; // this updates the timer
    
}

//function to replace text upon button click
// function myFunction() {
//     var y = document.getElementById("myDIV");
//     if (y.innerHTML === TestDIV) {
//         y.innerHTML = "Swapped text!";
//     } else {
//         y.innerHTML = question1;
//     }
//     }
// }


// function startQuiz() {
//     console.log(startQuiz);

// }


//console.log(btn);


// function startQuiz() {
//     console.log('Started')
// }

//startQuiz();

// buttonEl.addEventListener("click", function () {
//     // to-do: add question #1
//     countdown();

// })










// function nextQuestion() {
//     showQuestion(randomizedQuestions[currentQuestionIndex])

// }




//var questionContainerElement = document.getElementById('question-container')
//var randomizedQuestions, currentQuestionIndex


//let quiz = document.querySelector('#start-quiz');

//Define the event handler

// function clickHandler(onClick) {
//     console.log("Button Clicked");
//     }

//     var btn = document.querySelector('btn');
// btn.addEventListener('click', clickHandler);

//add clear interval button

//buttonEl.addEventListener('click', startQuiz)

// function startQuiz(onClick) {

//     console.log(startQuiz);
// }
//



// function startQuiz() {
//     //main-text.value("test");
//     //console.log(Object.values(question1));
//     console.log("quizStart");
// }






