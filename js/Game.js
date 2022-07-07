class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Down To Earth"),
            new Phrase("Shot In The Dark"),
            new Phrase("Go For Broke"),
            new Phrase("A Piece of Cake"),
            new Phrase("Jumping The Gun")
        ];
        this.activePhrase = null;
    }
    /**
     * starts a new game
     * takes in no @params
     * sets all the keyboardBtns class to key and enables them
     * sets this.missed to 0
     * sets all the hearts to the liveHeart.png img
     * sets the phrase ul to blank
     * hides the start overlay
     * gets a random and displays on the screen
     */
    startGame() {
        let keyboardBtns = document.querySelectorAll("#qwerty button");
        
        for (let btn of keyboardBtns) {
            btn.classList = "key";
            btn.disabled = false;
        }

        this.missed = 0;

        for (let heart of hearts) {
            heart.children[0].src = "images/liveHeart.png";
        }

        phraseSection.children[0].innerHTML = "";

        this.activePhrase = this.getRandomPhrase();
        
        this.activePhrase.addPhraseToDisplay();

        startOverlay.style.display = "none";
    }
    /**
     * returns a random phrase from the this.phrases array
     * @returns {Object} phrase
     */
    getRandomPhrase() {
        return this.phrases[(Math.floor(Math.random() * 5))];
    }
    /**
     * deals with user interaction
     * @param {HTML Button} btn 
     * gets the letter of the btn that was pressed
     * disables the btn so it cannot be pressed again
     * if the btn letter is found within the phrase it:
     * - adds the chosen class to the btn
     * - calls the showMatchedLetter method on the btn letter
     * - calls the checkWin method
     * else
     * - adds the wrong class to the btn
     * - calls the removeLife method
     */
    handleInteraction(btn) {
        let btnLtr = btn.innerHTML;
        
        btn.disabled = true;

        if (this.activePhrase.checkLetter(btnLtr)) {
            btn.classList.add("chosen");
            this.activePhrase.showMatchedLetter(btnLtr);
            this.checkWin();
        } else {
            btn.classList.add("wrong");
            this.removeLife();
        }
    }
    /**
     * replaces the live hearts with a lost heart
     * increases the missed count by one
     * if all the hearts are lost, it calls the gameOver method
     */
    removeLife() {
        if (this.missed === 4) {
            hearts[this.missed].children[0].src = "images/lostHeart.png";
            this.gameOver("lose");
        } else {
            hearts[this.missed].children[0].src = "images/lostHeart.png";
        }
        this.missed++;
    }
    /**
     * checks to see if the player has won
     * checks how many letters are showing
     * if it adds up to the amount of letters then it calls the gameOver method
     */
    checkWin() {
        let lettersShowing = 0;
        for (let item of letters) {
            if (item.classList.contains("show")) {
                lettersShowing++;
            }
        }
        if (lettersShowing === letters.length) {
            this.gameOver("win");
        }
    }
    /**
     * in a event the game ends, this is called
     * @param {String} winOrLose - whether the player won or lost
     * shows the start overlay with a different style depending on the game outcome 
     */
    gameOver(winOrLose) {
        let h1 = document.getElementById("game-over-message");

        switch (winOrLose) {
            case "win":
                h1.innerHTML = "you guessed the phrase";
                startOverlay.classList.add("win");
                break;
            case "lose":
                h1.innerHTML = "you did not guess the phrase";
                startOverlay.classList.add("lose");
                break;
        }
        startOverlay.style.display = "flex";
    }
}
