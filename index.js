const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(){
//   let newTutorials = []
//   for(let i = 0; i < tutorials.length; i++){
//     let words = tutorials[i].split(' ').map(word =>
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ')
//     newTutorials.push(words)
//   }
//   return newTutorials
// }
const titleCased = () => {
  return tutorials.map((tutorial) => {
    const wordsArray = tutorial.split(" ");
    const words = wordsArray.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
    return words;
  });
};