let phraseSection = document.getElementById("phrase");
let letters = document.getElementsByClassName("letter");
let startOverlay = document.getElementById("overlay");
let startGameBtn = document.getElementById("btn__reset");
let keyboardSection = document.getElementById("qwerty");
let hearts = document.getElementsByClassName("tries");
const game = new Game();
/*
    listens whether the start game btn is clicked
    if it gets click, it starts a new game
*/
startGameBtn.addEventListener("click", function() {game.startGame()});
/*
    listens whether any of the qwerty btns are clicked
    if a btn gets clicked, it calls the handleInteraction method on it
*/
keyboardSection.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        game.handleInteraction(e.target)
    };
})