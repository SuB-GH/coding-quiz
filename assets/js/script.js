
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
var timerEl = document.getElementById("#countdown");
var buttonEl = document.getElementbyID("#start-quiz");




//var questionContainerElement = document.getElementById('question-container')
//var randomizedQuestions, currentQuestionIndex


//let quiz = document.querySelector('#start-quiz');

//Define the event handler

// function clickHandler(onClick) {
//     console.log("Button Clicked");
//     }

//     var btn = document.querySelector('btn');
// btn.addEventListener('click', clickHandler);



//buttonEl.addEventListener('click', startQuiz)

// function startQuiz(onClick) {

//     console.log(startQuiz);
// }
    //

  //  var buttonEl = document.getElementById()
        {
        //add an event listener here
        buttonEl.addEventListener("click", function() {
            //start countdown initiated by button click
            countdown(); 
            {
            
            var timeLeft = 75;
        
            var timeInterval = setInterval(function () {
                if (timeLeft > 1) {
                    timerEl = timeLeft + ' seconds remaining';
                    timeLeft--;
                }
               
            }, 1000);}
            //start quiz initiated by button click
            var startQuiz = document.getElementById('.question');
           
            {
                window.alert("Question 1");

            }
    })
        
    }
    
    // countdown();
    startQuiz();

    
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

// buttonEl.addEventListener("click", function () {
//     startQuiz();
// })
/* Questions and answers list
var questions = function(){
    [
       question: "This is question 1",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: 0 ]
    };
    questions();


var question = {
    text: "test question",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correct: 0
}
*/




// function nextQuestion() {
//     showQuestion(randomizedQuestions[currentQuestionIndex])

// }

console.log();

function countdown() {

    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl = timeLeft + ' seconds remaining';
            timeLeft--;
        }

    }, 1000);
}



