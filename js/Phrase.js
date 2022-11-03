let phraseUl = document.querySelector('#phrase ul');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        let phraseHTML = ``;
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === ' ') {
                phraseHTML += `<li class="space"> </li>`;
            } else {
                phraseHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        }
        phraseUl.innerHTML = phraseHTML;
    }
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter) {
        for (let i = 0; i < phraseUl.children.length; i++) {
            const char = phraseUl.children[i];
            if (char.innerHTML === letter) {
                char.classList.replace('hide', 'show');
            }
        }
    }
}