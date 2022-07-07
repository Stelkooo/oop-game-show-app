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
        for (const i of this.phrase) {
            if (letter === i) {
                return true;
            } else {
                return false;
            }
        }
    }

    showMatchedLetter(letter) {
        let letters = document.getElementsByClassName("letter");
        
        for (let item of letters) {
            if (item.classList.contains(letter)) {
                item.classList.replace("hide", "show");
            }
        }
    }
}