var wins = 0;
var losses = 0;
var guess = 0;
var total = Math.floor((Math.random() * 100) + 19);

var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
console.log(blue, green, red, yellow);

var updateGuess = function() {
    $("#guess").html("Your Total Score: " + guess);
    console.log(guess);
}

var restart = function() {
    guess = 0;
    total = Math.floor((Math.random() * 100) + 19);

    $("#total").empty();
    $("#total").append(total);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
console.log(blue, green, red, yellow);
};

var game = function() {
    if (guess === total) {
        wins++;
        alert("Winner Winner!");
        restart();
    }
    else if (guess > total) {
        losses++;
        alert("Bust!");
        restart()
    } 
    else {
        updateGuess();
    }
}
$("#total").append(total);
$("#guess").append(guess);

$("#blue").click(function() {
    guess = guess + blue;
    game();
})
$("#green").click(function() {
    guess = guess + green;
    game();
})
$("#red").click(function() {
    guess = guess + red;
    game();
})
$("#yellow").click(function() {
    guess = guess + yellow;
    game();
})