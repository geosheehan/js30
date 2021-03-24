// ## Array Cardio Day 2

const people = [
   { name: 'Wes', year: 1988 },
   { name: 'Kait', year: 1986 },
   { name: 'Irv', year: 1970 },
   { name: 'Lux', year: 2015 }
];

const comments = [
   { text: 'Love this!', id: 523423 },
   { text: 'Super good', id: 823423 },
   { text: 'You are the best', id: 2039842 },
   { text: 'Ramen is my fav food ever', id: 123523 },
   { text: 'Nice Nice Nice!', id: 542328 }
];



// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
function checkFor19yo(person) {
   return 19 <= ((new Date).getFullYear() - person.year);
}

const isAdult = people.some(checkFor19yo);
console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(checkFor19yo);
console.log({ allAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentID = 823423;
function findComment(comment) {
   return commentID === comment.id;
}

const specificComment = comments.find(findComment);
console.log(specificComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex(findComment)
console.log(commentIndex);
comments.splice(commentIndex, 1);
console.table(comments);

