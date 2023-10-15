// Take Input from the user
const sentence = prompt("Enter the String to reverse: ");
// Splitting the Sentence into words
const words = sentence.split(" ");
// Function to reverse a WORD
const reverseWord = function(word) {
    let reverse = "";
    for(let i = 0; i < word.length; i++) {
        reverse = word[i] + reverse;
    }
    return reverse;
}
// Array to store the Reversed Words
const reversedWords = []
// Reversing all the words
words.forEach(word => {
    const reversed = reverseWord(word);
    reversedWords.push(reversed);
})
// Joining the words with a space(" ") to get Reversed Sentence
const reversedSentence = reversedWords.join(" ");
// Logging to the console
console.log(reversedSentence)