class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let phraseHTML = "<ul>";

        for (let i of this.phrase) {
            if (i === " ") {
                phraseHTML += `
    <li class="space"> </li>`;
            } else {
                phraseHTML += `
    <li class="hide letter ${i}">${i}</li>`;
            }
        }
        
        phraseHTML += `
</ul>`;
        phraseSection.innerHTML = phraseHTML;
    }

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

    showMatchedLetter(letter) {        
        for (let item of letters) {
            if (item.classList.contains(letter)) {
                item.classList.replace("hide", "show");
            }
        }
    }
}