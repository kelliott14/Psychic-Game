

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



  

//Creating the Computer guess, taken from var of the alphabet.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Guess " + computerGuess)
    
//Function for each keypress
document.onkeyup = function(event){

    do{

        var userGuess = event.key;
        guessedletters.push(userGuess);

            if (userGuess === computerGuess) {
        wins++; 


        } else if (guessesleft !== 0){
        guessesleft--;
        
        } else {
        losses++;
            
        }

 }

    while (guessesleft < 0);
         
   


    //Scorecard
        winstally.textContent = "Wins: " + wins;
        lossestally.textContent = "Losses: " + losses;
        guesseslefttext.textContent = "Guesses Left: " + guessesleft;
        guessedletterstext.textContent = "Guessed Letters: " + guessedletters;
        
  
       
}
