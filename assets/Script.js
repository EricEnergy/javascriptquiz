var jumbroTron = $("#mainBox"); //where im placing my text
var countDownTimer = $("#countdown"); //location of timer
var highScore = $("#currScore"); // location of high score tracker
var jumboTest = document.body.children[0].children[1]


//start up screen locations
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var pEl = document.createElement("p");
var buttonEl = document.createElement("button");
var hr = document.createElement("button");

console.log(jumbroTron);


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
    jumboTest.children[3].appendChild(buttonEl);
    buttonEl.setAttribute("class", "btn btn-secondary margin:auto;");
    buttonEl.setAttribute("type", "button");
    buttonEl.addEventListener("click", function() {
        firstpage();
       });

}


function firstpage() {
    (h1El).remove();
    (buttonEl).remove();
    (pEl).remove();
    console.log(pEl);

    pEl.textContent = "this is test text"
    jumboTest.appendChild(pEl);
    pEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");



}

