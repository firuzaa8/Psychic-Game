var wins=0;
var losses=0;
var guesses_left=9;
var letter;
var your_guesses;
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function updateScreen() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guesses-left").innerHTML = guesses_left;
    document.querySelector("#your-guesses").innerHTML=your_guesses.join(", ");
}
function randomLetter() {
    var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return getRandomLetter;
}
function reset () {
    guesses_left=9;
    letter = randomLetter();
    your_guesses=[];

    updateScreen();
}
document.onkeyup = function(event) {
    if (alphabet.indexOf(event.key)==-1) {
        return;
    }
    your_guesses.push(event.key);

    if (letter===event.key) {
        wins++;
        reset();
        alert ("You Win!!")
    }
    else {
        guesses_left--;
        updateScreen();
    }
    if (guesses_left==0) {
        losses++;
        alert ("You lose :(");
        reset();
    }

    
};



