let game = new Game();
const startGameBtn = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const keys = document.getElementsByClassName('key');
const phraseUl = document.querySelector('#phrase ul');

startGameBtn.addEventListener('click', () => {
    game.startGame();
})
/**
 * when a keys from the onscreen keyboard is pressed
 * the handleInteraction method is called on it
 */
keyboard.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})
/**
 * when a keys from the user's physical keyboard is pressed
 * the handleInteraction method is called on it
 */
document.addEventListener('keyup', (e) => {
    for (let btn of keys) {
        if (btn.innerHTML === e.key) {
            game.handleInteraction(btn);
        }
    }
})