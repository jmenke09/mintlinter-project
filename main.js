let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let origStory = story.split(' ');

let betterWords = origStory.filter((word) =>
    !unnecessaryWords.includes(word)
);

let wordCount = betterWords.length;
let sentenceCount = 0;

betterWords.forEach(word => {
    if(word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        sentenceCount ++;
    }
});

let overused1 = overusedWords[0];
let overused2 = overusedWords[1];
let overused3 = overusedWords[2];
let count1 = 0;
let count2 = 0;
let count3 = 0;

betterWords.forEach((word) => {
    if (word === overused1) {
        count1 ++;
    } else if (word === overused2) {
        count2 ++;
    } else if (word === overused3) {
        count3 ++;
    }
});

console.log(`Words: ${wordCount}`);
console.log(`Sentences: ${sentenceCount}`);
console.log(`"${overused1}" used ${count1} time(s)`)
console.log(`"${overused2}" used ${count2} time(s)`)
console.log(`"${overused3}" used ${count3} time(s)`)
console.log(betterWords.join(' '));

