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
        this.activePhrase = null;
    }
    startGame() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
    }
}