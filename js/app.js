/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let phraseSection = document.getElementById("phrase");
let letters = document.getElementsByClassName("letter");
let startOverlay = document.getElementById("overlay");
let startGameBtn = document.getElementById("btn__reset");
let keyboardBtns = document.getElementById("qwerty");
const game = new Game();

startGameBtn.addEventListener("click", function() {game.startGame()});

keyboardBtns.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        game.handleInteraction(e.target)
    };
})