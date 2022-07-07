class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * adds the phrase to the game display
     */
    addPhraseToDisplay() {
        let phraseHTML = "";

        for (let i of this.phrase) {
            if (i === " ") {
                phraseHTML += `
    <li class="space"> </li>`;
            } else {
                phraseHTML += `
    <li class="hide letter ${i}">${i}</li>`;
            }
        }

        phraseSection.children[0].innerHTML = phraseHTML;
    }
    /**
     * checks whether the letter is contained within the phrase
     * @param {String} letter - letter pressed by player 
     * @returns {boolean}
     */
    checkLetter(letter) {
        let isLetterInPhrase = false;
        for (let i = 0; i < this.phrase.length; i++) {
            const element = this.phrase[i];
            if (element === letter) {
                isLetterInPhrase = true;
            }
        }
        return isLetterInPhrase;
    }
    /**
     * shows the letter if the user got it right
     * @param {String} letter - letter pressed by player 
     */
    showMatchedLetter(letter) {        
        for (let item of letters) {
            if (item.classList.contains(letter)) {
                item.classList.replace("hide", "show");
            }
        }
    }
}