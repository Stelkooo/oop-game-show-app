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
        this.activePhrase = new Phrase("null");
    }
    startGame() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.display = 'none';
        this.activePhrase.phrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }
    handleInteraction(btn) {
        btn.disabled = true;
        if (this.activePhrase.checkLetter(btn.innerHTML) = false) {
            btn.classList.add('wrong');
            this.removeLife();
        } else {
            btn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(btn.innerHTML);
            if (this.checkForWin() = true) {
                this.gameOver();
            }
        }
    }
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[hearts.length - 1 - this.missed].src = "images/lostHeart.png";
        this.missed++;
        if (this.missed === 5) {
            gameOver();
        }
    }
}