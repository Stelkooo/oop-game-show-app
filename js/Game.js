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
}