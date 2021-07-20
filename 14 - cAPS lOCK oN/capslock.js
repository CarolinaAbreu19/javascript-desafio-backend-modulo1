const input = "   CAPS    ";

const palavra = input.trim();
let firstLetterLower, mostLettersUpper, allLettersUpper;

const firstLetter = palavra.charAt(0);
const otherLetters = palavra.slice(1);

if(palavra === palavra.toUpperCase()) {
    allLettersUpper = true;
} else{
    if(firstLetter === palavra[0].toLowerCase()) {
        firstLetterLower = true;
    }
    if(otherLetters === otherLetters.toUpperCase()) {
        mostLettersUpper = true;
    }
}

if(allLettersUpper) {
    const newWord = palavra.toLowerCase();
    console.log(newWord)
} else if(firstLetterLower && mostLettersUpper) {
    const array = [];
    array.push(firstLetter.toUpperCase(),otherLetters.toLowerCase());
    const newWord = array.join("");
    console.log(newWord);
} else {
    console.log(palavra);
}