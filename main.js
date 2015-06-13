var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";

var game = function() {
    var userChoice = null;
    var List = ["rock","paper", "scissors"];
    var status = true;
    
    while (status === true) {
      userChoice = prompt("Do you choose rock, paper or scissors?");
      userChoice = userChoice.toLocaleLowerCase();
      for (var i=0; i < List.length; i++) {
        if (List[i] === userChoice) {
          status = false;
        }
      }
    }
    var computerChoice = Math.random();
    return userChoice, computerChoice;
};

function compare (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 == "rock") {
        if (choice2 == "scissors") {
             return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 == "paper") {
        if (choice2 == "rock") {
             return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 == "scissors") {
        if (choice2 == "rock") {
             return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
}

function startGame () {
    var con = true;
    while (con === true) {
        var outputChoice = game();
        userChoice = outputChoice[0];
        computerChoice = outputChoice[1];
        
        if (computerChoice < 0.34) {
        	computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
        	computerChoice = "paper";
        } else {
        	computerChoice = "scissors";
        }
        alert("Computer chose: " + computerChoice);
        
        var res = (compare(userChoice, computerChoice));
        alert("Choice is" + res);
        var inp = prompt("Continue? y/n");
        inp = inp.toLocaleLowerCase();
        if (inp === "n") {
            con = false;
        }
    }
}

startGame();