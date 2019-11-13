var jsQuestions = [
    {
        title: "Which of the following is a disadvantage of using JavaScript?",
        choices: ["Client-side JavaScript does not allow the reading or writing of files.", "JavaScript can not be used for Networking applications because there is no such support available.", "JavaScript doesn't have any multithreading or multiprocess capabilities.", "All of the above."],
        answer: 'All of the above.'
    },
    {
        title: 'You can pass a anonymous function as an argument to another function?',
        choices: ['true', 'false'],
        answer: 'true'
    },
    {
        title: 'Which built-in method removes the last element from an array and returns that element?',
        choices: ['last()', 'get()', 'pop()', 'None of the above.'],
        answer: 'pop()'
    },
    {
        title: 'Which built-in method reverses the order of the elements of an array?',
        choices: ['changeOrder(order)', 'reverse()', 'sort(order)', 'None of the above.'],
        answer: 'reverse()'
    },
    {
        title: 'Which of the following function of String object combines the text of two strings and returns a new string?',
        choices: ['add()', 'merge()', 'concat()', 'append()'],
        answer: 'concat()'
    }
];
var htmlQuestions = [
    {
        title: 'Select the correct option to open a link in a new browser window?',
        choices: ['A href="url" target="_blank"', 'A href="url" new', 'A href="url" target="new"', 'A href="url" target=_window"', 'None of the above.'],
        answer: 'A href="url" target="_blank"'
    },
    {
        title: 'Select the option to make a list that lists the items with bullets?',
        choices: ['List', 'UL', 'OL', 'DL', 'None of the above.'],
        answer: 'UL'
    },
    {
        title: 'In CSS, what is the correct option to select all the p tags on a page?',
        choices: ['<p> { }', 'p { }', '#p { }', '.p { }', 'None of the above.'],
        answer: 'p { }'
    },
    {
        title: 'Select the property that is used to create spacing between HTML elements?',
        choices: ['border', 'spacing', 'margin', 'padding', 'None of the above.'],
        answer: 'margin'
    },
    {
        title: 'In CSS,select the property used to set the background color of an image?',
        choices: ['color', 'background:color', 'background-color', 'color:background'],
        answer: 'background-color'
    }
];

var jumbroTron = $("#mainBox"); //where im placing my text
var countDownTimer = $("#countdown"); //location of timer
var highScore = 0; // location of high score tracker
var jumboTest = document.body.children[0].children[1]
var index = 0;
var choices = jsQuestions[index].choices;
var title = jsQuestions[index].title;
var answers = jsQuestions[index].answer;

//start up screen locations
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var pEl = document.createElement("p");
var buttonEl = document.createElement("button");
var buttonE2 = document.createElement("button1");
var hr = document.createElement("hr");
var rowmaker = document.createElement("row");
var timeLocation= document.getElementById("countdown");
var secondsLeft = 60;


startUpFuntion()


function startUpFuntion() {

    //adds first line of text
    h1El.textContent = "Coding Quiz Challenge!"
    jumboTest.appendChild(h1El);
    h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    h1El.setAttribute("id", "openerH1Text");

    // adds p tag statement
    pEl.textContent = "Try to answer the following within the time limit. Keep in mind that the inccorret answer will penalize scoretime by 10 seconds"
    jumboTest.appendChild(pEl);
    pEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    pEl.setAttribute("id", "openerPText");

    // adds a button
    jumboTest.appendChild(infoEl);
    infoEl.setAttribute("style", "margin:auto; text-align:center;");
    buttonEl.textContent = "Start Quiz";
    jumboTest.children[5].appendChild(buttonEl);
    buttonEl.setAttribute("class", "btn btn-secondary margin:auto;");
    buttonEl.setAttribute("type", "button");
    buttonEl.addEventListener("click", function () {
       
        quizTime();
        setTime()
    });

}





function setTime() {
  var timerInterval = setInterval(function() { secondsLeft--;
    timeLocation.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      confirm("Your time is up Sucka");
    }

  }, 1000);
}





function quizTime() {
   

    h1El.textContent = "Question " + (index + 1);
    jumboTest.appendChild(h1El);
    $("h1El").attr("style", "margin:auto; width:50%; text-align:center;");
    $("h1El").attr("id", "openerH1Text");

    pEl.textContent = title;
    jumboTest.appendChild(pEl);
    pEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    (infoEl).remove();



    for (var i = 0; i < choices.length; i++) {
        var formMaker = document.createElement("form");
        formMaker.textContent = choices[i];
        formMaker.setAttribute("class", "form-control form-control-lg m-2");
        formMaker.setAttribute("type", "text");
        jumboTest.appendChild(formMaker);
        formMaker.setAttribute("id", "rownumber" + i);
        formMaker.addEventListener("click", function (event) {
            console.log("click");


            if (event.target.textContent === answers) {
                console.log("click correctr");

                index++;
                highScore = highScore + 10;
                $("#currScore").text(highScore);
                console.log(index);
                console.log(highScore);
            }
            else {
                console.log("bugg");
                secondsLeft = secondsLeft - 10;
            }

        })
    }
};
