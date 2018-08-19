// lines 2-18 are what generates the greeting on the browser depending on what time it is (less than 12:00 good morning, more that 12:00 good afternoon, more than 5:00 pm good evening. I wanted to be able to style this with a color or something, and also thought that it would be neat to make the greeting disappear after the user begins the game, but I couldn't figure it out.)
var d = new Date();
    var time = d.getHours();
    var greeting = ""

    if (time < 12) 
      {
      greeting = ("<h2>Good Morning!</h2>");
      }
    if (time > 12) 
      {
      greeting = ("<h2>Good Afternoon!</h2>");
      }
    if (time > 17) 
      {
      greeting = ("<h2>Good Evening!</h2>");
      }
      document.write(greeting);
    
    //   this is the code that makes my game work. lines 20-end.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
   // this also works over what I have in line 29, but what's in line 29 tells the computer to change uppercase userstrokes to lowercase ----> var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 9;
           guessChoices = [];
       }

       if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }

       if (numGuesses === 0) {

       numGuesses = 9;
       losses ++;
       guessChoices = [];

       
   }
// notice line 63 where this script populates new text to appear on the browser. I thought that was a cool way to understand how this section works in the code, although I don't completely understand it.
   var html = 
   "<h1> Let's Play The Psychic Game! </h1>" +
   "<h3>You can't beat The Psychic!</h3>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};