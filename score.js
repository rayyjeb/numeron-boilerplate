// Iteration 5: Store the player score and display it on the game over screen
var game_over = document.getElementById("play-again-button");
game_over.onclick=()=>{
    window.open("./index.html", "_self")
}
let score_box = document.getElementById("score-board");
// RETREIVING THE DATA FROM THE LOCAL STORAGE
let value= localStorage.getItem("score");
score_box.textContent=value;