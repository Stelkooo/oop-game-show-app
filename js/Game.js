class Game {
    constructor () {
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
}
