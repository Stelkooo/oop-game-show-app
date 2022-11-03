let game = new Game();
const startGameBtn = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const phraseUl = document.querySelector('#phrase ul');

startGameBtn.addEventListener('click', () => {
    game.startGame();
})

keyboard.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})