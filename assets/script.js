var timerEl = document.querySelector(".timer");
var startButton = document.querySelector(".start");
var startMessage = document.querySelector(".starterCard");
var qNA = document.querySelector(".questionCard");
var question = document.querySelector(".question");

var timer;
var questionNum;
totalQues = 20;

function startTimer(){
    timer = setInterval(function() {
        timer=90;
        timer--;
        timerEl.textContent=timer;
    }, 1000);
}

function startQuiz(){
    startTimer();
    startMessage.style.visibility="hidden";
    qNA.style.visibility="visible";
    questionNum = 1;
    if (questionNum === 1){
        question.textContent="Which is not an HTML Semantic Tag?"; 
    }
    
}


startButton.addEventListener("click",startQuiz);