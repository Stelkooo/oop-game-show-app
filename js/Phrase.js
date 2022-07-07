class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let phraseSection = document.getElementById("phrase");
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
}