class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * adds the phrase to the screen
     */
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === ' ') {
                phraseUl.innerHTML += `<li class="space"> </li>`;
            } else {
                phraseUl.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        }
    }
    /**
     * checks whether letter is in phrase
     * @param {String} letter 
     * @returns true/false
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    /**
     * shows the letter if it is in the phrase
     * @param {String} letter 
     */
    showMatchedLetter(letter) {
        for (let i = 0; i < phraseUl.children.length; i++) {
            const char = phraseUl.children[i];
            if (char.innerHTML === letter) {
                char.classList.replace('hide', 'show');
            }
        }
    }
}