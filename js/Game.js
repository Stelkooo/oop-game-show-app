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

    startGame() {
        let startOverlay = document.getElementById("overlay");
        startOverlay.style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase.phrase);
    }

    getRandomPhrase() {
        return this.phrases[(Math.floor(Math.random() * 5))];
    }

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

    removeLife() {
        let hearts = document.getElementsByClassName("tries");
        if (this.missed === 4) {
            hearts[this.missed].children[0].src = "images/lostHeart.png";
            this.gameOver();
        } else {
            hearts[this.missed].children[0].src = "images/lostHeart.png";
        }
        this.missed++;
    }

    checkWin() {
        let lettersShowing = 0;
        for (let item of letters) {
            if (item.classList.contains("show")) {
                lettersShowing++;
            }
        }
        if (lettersShowing === letters.length) {
            this.gameOver();
        }
    }

    gameOver() {
        
    }
}
