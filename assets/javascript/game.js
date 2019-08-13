

var wins = 0;
var losses = 0;
var guessesleft = 9;
var guessedletters =[];


var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var instructions = document.getElementById("instructions-text");
var winstally = document.getElementById("wins-tally");
var lossestally = document.getElementById("losses-tally");
var guesseslefttext = document.getElementById("guesses-tally");
var guessedletterstext = document.getElementById("guessed-letters");


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  

//Creating the Computer guess, taken from var of the alphabet.
    function updateCompGuess(){
        computerChoices[Math.floor(Math.random() * computerChoices.length)]
        console.log("Computer Guess " + computerGuess)
    }

    updateCompGuess()

    //put the reset game list here. Guesses = 0; Computer choice run again.
    function resetGame(){
        guessesleft = 9;
        updateCompGuess();
    }

//Function for each keypress
document.onkeyup = function(event){


        var userGuess = event.key;
        guessedletters.push(userGuess);

            if (userGuess === computerGuess) {
        wins++; 
        guessesleft = 0;


        } else if (guessesleft > 0){
        guessesleft--;
        
        } else {
        losses++;
            
        }

    //Scorecard
        winstally.textContent = "Wins: " + wins;
        lossestally.textContent = "Losses: " + losses;
        guesseslefttext.textContent = "Guesses Left: " + guessesleft;
        guessedletterstext.textContent = "Guessed So Far: " + guessedletters;
        
    //reset game function
        if(guessesleft === 0){
            resetGame();
        }
       
}