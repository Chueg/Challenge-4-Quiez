var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
two.setAttribute("class", "hide");
three.setAttribute("class", "hide");
four.setAttribute("class", "hide");

var linker = document.getElementById('#bingo');


var timer = document.getElementById("#timer");
var timeLeft = 0;
var timeInterval = "";

var startBtn = document.getElementById("#start");

var questions = [["Which is a boolean?", "true/false","0","grunch","three", "true/false"]
                ,["What is integer?", "one","brunch","false","1", "1"]
                ,["Which is string?", "10","a number","grunch","1", "grunch"]
                ,["What is a fingfoing?", "fingfoing","JAVA","computer","CSS", "fingfoing"]
                ,["Which is string?", "129","false","0","choem", "choem"]];

var currentQuestion = "";
var questionTracker = 0;

var question = document.getElementById("#grompt");

var button1  = document.getElementById("#butt");
var button2  = document.getElementById("#butt2");
var button3  = document.getElementById("#butt3");
var button4  = document.getElementById("#butt4");

var choices = document.getElementsByClassName("butong");

var choice = "";
var input = "";

var scoreJuice = document.getElementById("#scoremeat")
var score = 0;

var result = document.getElementById("#result");
result.style.visibility = "hidden";

var submit  = document.getElementById("#submit");


var back  = document.getElementById("#back");
var clear  = document.getElementById("#clear");

var highscoresList = [];
var highscore = ["", 0];
var highscoreComparison = ["",0];

var scores = document.getElementById("#scores");


function startSwitch()
{
    one.setAttribute("class", "hide");
    two.classList.remove("hide");
    result.classList.remove("hide");
    result.style.visibility = "hidden";
}

function boogerSwitch()
{
    result.setAttribute("class", "hide");
    two.setAttribute("class", "hide");
    three.classList.remove("hide");
    three.setAttribute("class", "booger");
    scoreJuice.textContent = "Score: " + score; 
}

function highscoreSwitch()
{
    three.setAttribute("class", "hide");
    four.classList.remove("hide");
    four.setAttribute("class", "highscores");

}

function homeScreen()
{
    four.setAttribute("class", "hide");
    one.classList.remove("hide");
    one.setAttribute("class", "start");

}

function timerZimbo() {
    timeLeft = 16;
  
    if(timeInterval > 0){
      clearInterval(timeInterval);
    }
    timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent= "Time left: " +timeLeft +" seconds";
      if(timeLeft <= 0) {
        clearInterval(timeInterval);
        boogerSwitch();
      }
    },1000);
    
  }

function feedback()
{
    setTimeout(function () {
        result.style.visibility = "hidden";
    }, 1500);
}




function questionStart()
{
    currentQuestion = questions[questionTracker];
    

    question.textContent= currentQuestion[0];
    button1.textContent = currentQuestion[1];
    button2.textContent = currentQuestion[2];
    button3.textContent = currentQuestion[3];
    button4.textContent = currentQuestion[4];
    answer = currentQuestion[5];
    questionTracker = Math.floor(Math.random() * questions.length);


}

function checkChoice()
{
    if(choice.textContent === answer)
    {
        result.textContent = "Correct!";
        result.style.visibility = "visible";
        score++;
        feedback();

    }
    else{
        result.textContent = "Wrong!";
        result.style.visibility = "visible";
        timeLeft = timeLeft - 3;
        
        feedback();
    }
    
    

}

function setHighscore()
{
    highscore = [initial, score];
}

function convertToList()
{
    var bingBog = "";
    for(var i = 0;i<highscoresList.length; i++)
    {
        var binky = highscoresList[i]
        bingBog = bingBog +"|"+binky[0]+"  :  " + binky[1] + "|";
    }
    scores.textContent =bingBog;
    score = 0;
}

function addToList()
{
    if(highscoresList.length === 0)
    {
        highscoresList[0]=highscore;

        convertToList();
        return;
    }
    for(var j = 0;j <highscoresList.length; j++)
    {
        highscoreComparison = highscoresList[j];
        
        
        if(highscore[1] >= highscoreComparison[1])
        {
            highscoresList.splice(j, 0, highscore);

            convertToList();
            
            return;
            
        }
        else{
            highscoresList.push(highscore);
            convertToList();
            return;
        }
    }

    
}

startBtn.addEventListener("click", function(event)
{
    startSwitch();
    timerZimbo();
    questionStart();
});



submit.addEventListener("click", function(event)
{   
    
    input = document.querySelector('input').value;
    if(input.length ==0 || input.length > 3)
    {
        return;
    }
    highscoreSwitch();
    highscore = [input, score];
    event.preventDefault();
    addToList();
});

back.addEventListener("click", function(event)
{
    homeScreen();
});

clear.addEventListener("click", function(event)
{
    for(var i = highscoresList.length; i>0 ; i--)
    {
        highscoresList.pop();

        scores.textContent = highscoresList;
    }
});

linker.addEventListener("click", function(event)
{
    one.setAttribute("class", "hide");
    two.setAttribute("class", "hide");
    three.setAttribute("class", "hide");
    highscoreSwitch();
    event.preventDefault();
});




for(var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', function(event){
   
        choice=event.target;
        checkChoice();
        questionStart();
        
    }, false);
   }
