

var wins = 0;
var losses = 0;
var guessesleft = 0;
var guessedletters;


var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var instructions = document.getElementById("instructions-text");
var winstally = document.getElementById("wins-tally");
var lossestally = document.getElementById("losses-tally");
var guesseslefttext = document.getElementById("guesses-left");
var guessedletterstext = document.getElementById("guessed-letters");

document.onkeyup = function(event){

    var userGuess = event.key;

//taken from the in class activity on RPS. I dont' know what this does yet.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//checking if the above is working. It is. yay.
console.log("user guess is " + userGuess);
console.log("Computer guess is " + computerGuess);
console.log("Wins: " + wins);
console.log("Losses: " + losses);

 if (userGuess === computerGuess) {
      wins++
      
      ;
    } else {
      losses++
      
      ;
    }

    console.log("Wins: " + wins);
    console.log("Losses: " + losses);   


    
  
        }
    ;
