/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let phraseSection = document.getElementById("phrase");
let letters = document.getElementsByClassName("letter");
let startOverlay = document.getElementById("overlay");
let startGameBtn = document.getElementById("btn__reset");
let keyboardSection = document.getElementById("qwerty");
let hearts = document.getElementsByClassName("tries");
const game = new Game();

startGameBtn.addEventListener("click", function() {game.startGame()});

keyboardSection.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        game.handleInteraction(e.target)
    };
})