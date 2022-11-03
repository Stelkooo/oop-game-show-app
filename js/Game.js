const startScreenOverlay = document.getElementById('overlay');
const hearts = document.querySelectorAll('.tries img');
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            "Down To Earth",
            "Shot In The Dark",
            "Go For Broke",
            "A Piece of Cake",
            "Jumping The Gun",
        ];
        this.activePhrase = new Phrase('null');
    }
    /**
     * starts a new game
     * takes in no @params
     * sets the phraseUl to blank
     * sets the all the keys class to key and enables them
     * sets missed to 0
     * hides the startScreenOverlay
     * gets a random phrase and sets it as the phrase
     * displays the phrase
     */
    startGame() {
        phraseUl.innerHTML = '';
        for (const key of keys) {
            key.disabled = false;
            key.classList = 'key';
        }
        this.missed = 0;
        for (let heart of hearts) {
            heart.src = "images/liveHeart.png";
        }
        startScreenOverlay.style.display = 'none';
        this.activePhrase.phrase = this.getRandomPhrase().toLowerCase();
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * random phrase from the phrases array
     * @returns {String} phrase
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }
    /**
     * deals with user interaction
     * @param {HTML Button} btn
     * gets called when a letter from the keyboard is pressed
     * disables that letter
     * checks whether the letter is a part of the phrase
     * if it is:
     * - adds the chosen class
     * - shows the letter
     * - checks if user has won
     * else:
     * - adds the wrong class
     * - removes a life 
     */
    handleInteraction(btn) {
        btn.disabled = true;
        if (this.activePhrase.checkLetter(btn.innerHTML)) {
            btn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(btn.innerHTML);
            this.checkForWin();
        } else {           
            btn.classList.add('wrong');
            this.removeLife();
        }
    }
    /**
     * changes one of the hearts from live to lost
     * increments missed by 1
     * checks whether missed = 5
     * if it is:
     * - calls the gameOver method to say the game has been lost
     */
    removeLife() {
        hearts[hearts.length - 1 - this.missed].src = "images/lostHeart.png";
        this.missed++;
        if (this.missed === 5) {
            this.gameOver('lose');
        }
    }
    /**
     * checks whether all letters have been guessed
     * if it they have:
     * - calls the gameOver method to say the game has been won
     */
    checkForWin() {
        const phraseLetters = document.getElementsByClassName('letter');
        let lettersShown = 0;
        for (let i = 0; i < phraseLetters.length; i++) {
            const e = phraseLetters[i];
            if (e.classList.contains('show')) {
                lettersShown++;
            }
        }
        if (lettersShown === phraseLetters.length) {
            this.gameOver('win');
        }
    }
    /**
     * this is called when the game is either won/lost
     * @param {String} result 
     * displays the startScreenOverlay again with a different msg or style depending on the result
     */
    gameOver(result) {
        const gameOverMessage = document.getElementById('game-over-message');
        startScreenOverlay.style.display = 'flex';
        if (result === 'win') {
            gameOverMessage.innerHTML = "Congrats, you won!";
            startScreenOverlay.classList = 'win';
        } else if (result === 'lose') {
            gameOverMessage.innerHTML = "You lost, try again!";
            startScreenOverlay.classList = 'lose';
        }
    }
}