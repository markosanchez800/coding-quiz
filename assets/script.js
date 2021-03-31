var timerEl = document.querySelector(".timer");
var startButton = document.querySelector(".start");
var startMessage = document.querySelector(".starterCard");
var hiScoreList = document.querySelector(".hiscorelist");
var qNA = document.querySelector(".questionCard");
var question = document.querySelector(".question");
var yON = document.querySelector(".rightOWrong")
var ans1 = document.querySelector(".ans1");
var ans2 = document.querySelector(".ans2");
var ans3 = document.querySelector(".ans3");
var ans4 = document.querySelector(".ans4");
var title = document.querySelector(".title");
var userScore = JSON.parse(localStorage.getItem("timerCount"));

if(!userScore){
    var userScore = [];
}

//Questions and answers
qAll = ["Which is not an HTML Semantic Tag?","Which means NOT Equal?","window.alert will...","A useful tool used during debugging to print content is..","Which isn't a common data type?"];
answerA = ["Footer","==","Close the current page","GitBash","Booleans"];
answerB = ["Main","?=","Open a new window in browser","console.log","Numbers"];
answerC = ["Div","!=","Give a popup window with a message","if statement","Strings"];
answerD = ["Nav","/=","Give a popup window for user input","for loops","Functions"];



var timer;
var timerCount;


function startTimer(){
    timerCount=40;
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent=timerCount;  
        if (timerCount <= 0){
        clearInterval(timer);
        endGame();
    }
    }, 1000);

}

function startQuiz(){
    startMessage.style.visibility="hidden";
    qNA.style.visibility="visible";
    startTimer();
    first();
}

function first(){
    ans1.addEventListener("click",firstWrong);
    ans2.addEventListener("click",firstWrong);
    ans3.addEventListener("click",firstRight);
    ans4.addEventListener("click",firstWrong);
        question.textContent=qAll[0]; 
        ans1.textContent=answerA[0];
        ans2.textContent=answerB[0];
        ans3.textContent=answerC[0];
        ans4.textContent=answerD[0];
}

function second(){
    ans1.removeEventListener("click",firstWrong);
    ans2.removeEventListener("click",firstWrong);
    ans3.removeEventListener("click",firstRight);
    ans4.removeEventListener("click",firstWrong);
    ans1.addEventListener("click",secondWrong);
    ans2.addEventListener("click",secondWrong);
    ans3.addEventListener("click",secondRight);
    ans4.addEventListener("click",secondWrong);
        question.textContent=qAll[1]; 
        ans1.textContent=answerA[1];
        ans2.textContent=answerB[1];
        ans3.textContent=answerC[1];
        ans4.textContent=answerD[1];
}

function third(){
    ans1.removeEventListener("click",secondWrong);
    ans2.removeEventListener("click",secondWrong);
    ans3.removeEventListener("click",secondRight);
    ans4.removeEventListener("click",secondWrong);
    ans1.addEventListener("click",thirdWrong);
    ans2.addEventListener("click",thirdWrong);
    ans3.addEventListener("click",thirdRight);
    ans4.addEventListener("click",thirdWrong);
        question.textContent=qAll[2]; 
        ans1.textContent=answerA[2];
        ans2.textContent=answerB[2];
        ans3.textContent=answerC[2];
        ans4.textContent=answerD[2];
}

function fourth(){
    ans1.removeEventListener("click",thirdWrong);
    ans2.removeEventListener("click",thirdWrong);
    ans3.removeEventListener("click",thirdRight);
    ans4.removeEventListener("click",thirdWrong);
    ans1.addEventListener("click",fourthWrong);
    ans2.addEventListener("click",fourthRight);
    ans3.addEventListener("click",fourthWrong);
    ans4.addEventListener("click",fourthWrong);
        question.textContent=qAll[3]; 
        ans1.textContent=answerA[3];
        ans2.textContent=answerB[3];
        ans3.textContent=answerC[3];
        ans4.textContent=answerD[3];
}

function fifth(){
    ans1.removeEventListener("click",fourthWrong);
    ans2.removeEventListener("click",fourthWrong);
    ans3.removeEventListener("click",fourthRight);
    ans4.removeEventListener("click",fourthWrong);
    ans1.addEventListener("click",fifthWrong);
    ans2.addEventListener("click",fifthWrong);
    ans3.addEventListener("click",fifthWrong);
    ans4.addEventListener("click",fifthRight);
        question.textContent=qAll[4]; 
        ans1.textContent=answerA[4];
        ans2.textContent=answerB[4];
        ans3.textContent=answerC[4];
        ans4.textContent=answerD[4];
}

function firstRight(){
    yON.textContent="Correct!";
    second();
}
function firstWrong(){
    yON.textContent="Wrong";
    timerCount-=10;
    second();
}
function secondRight(){
    yON.textContent="Correct!";
    third();
}
function secondWrong(){
    yON.textContent="Wrong";
    timerCount-=10;
    third();
}
function thirdRight(){
    yON.textContent="Correct!";
    fourth();
}
function thirdWrong(){
    yON.textContent="Wrong";
    timerCount-=10;
    fourth();
}
function fourthRight(){
    yON.textContent="Correct!"; 
    fifth();  
}
function fourthWrong(){
    yON.textContent="Wrong";
    timerCount-=10;
    fifth();
}
function fifthRight(){
    yON.textContent="Correct!";  
    clearInterval(timer);
    endGame(); 
}
function fifthWrong(){
    yON.textContent="Wrong";
    timerCount-=10;
    clearInterval(timer);
    endGame();
}

function endGame(){
    qNA.style.visibility="hidden";
    title.innerHTML = "Your score is: " + timerCount + "<form>Name:<input type='text' id='name' name='name'><button>Submit</button></form>";
}


   


startButton.addEventListener("click",startQuiz);

title.addEventListener("submit",function(event){
    var name = document.getElementById("#name");
    userScore = userScore.push(timerCount + " points :" + name);
    localStorage.setItem("score",JSON.stringify(userScore));
    var li = document.createElement("li");
    li.textContent = userScore;
    hiScoreList.append(li);
    console.log(userScore);
})
