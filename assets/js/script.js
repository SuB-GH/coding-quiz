
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



// Declare/assign variables here
var timerEl = document.getElementById("clock");
var buttonEl = document.getElementById("start-quiz");
var mainEl = document.getElementById("main-text");


buttonEl.addEventListener("click", startQuiz);
buttonEl.addEventListener("click", countdown);

//add an event listener here


//this function works!
function startFunction() {
    // var x = document.getElementById("testDIV");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";

    // }

    function startFunction() {
        var x = document.getElementById("testDIV");
        if (x.innerHTML === "Hello") {
            x.innerHTML = "Swapped text!";
        } else {
            x.innerHTML = "Hello";
        }
    }

    function startQuiz() {
        document.getElementById("main-text").innerHTML = "I am new text";

    }

    {
        function countdown() {
            console.log("is this also working?");
            var timeLeft = 75;
            var timeInterval = setInterval(function () {
                if (timeLeft > 1) {
                    timerEl = timeLeft + ' seconds remaining';
                    timeLeft--;
                }

            }, 1000);

        }

    }
    startQuiz();
    countdown();





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



    //start quiz initiated by button click






    // var timeLeft = 75;

    // var timeInterval = setInterval(function () {
    //     if (timeLeft > 1) {
    //         timerEl = timeLeft + ' seconds remaining';
    //         timeLeft--;
    //     }

    // }, 1000);









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


    var question1 = {
        text: "test question 1",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: 0
    }

    var question2 = {
        text: "test question 2",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: 0
    }

    var question3 = {
        text: "test question 3",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: 0
    }


}




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

//  var buttonEl = document.getElementById()


    // startQuiz();
    // countdown();


// function startQuiz() {
//     //main-text.value("test");
//     //console.log(Object.values(question1));
//     console.log("quizStart");
// }






