function longestWord(str) {
    const words = str.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
const sentence = "le van viet";
console.log("Tu dai nhat la: ", longestWord(sentence));
