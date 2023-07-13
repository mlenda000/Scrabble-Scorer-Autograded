// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   let word = input.question('Please enter a word\t');
   points = oldScrabbleScorer(word);
   console.log(points)
return points;
};

let simpleScorer = function(word){
   let totalScore = 0;
   let temp = word.toUpperCase().trim()
   for(i =0;i<temp.length;i++){
       totalScore++;
   }
  return totalScore;   
};

let vowelBonusScorer = function(word){
   totalScore = 0;
   let temp = word.toUpperCase().trim()
   for(let i=0;i<temp.length;i++){
       if(temp[i] === 'A' || temp[i] === 'E' || temp[i] === 'I' || temp[i] === 'O' || temp[i] === 'U'){
           totalScore =+ 3;
       }else{
           totalScore++;
       }
   }
   return totalScore;
};

let scrabbleScorer;
const scoringAlgorithms =[];
// const scoringAlgorithms = [{'Name':'Simple Score','Description':'Each letter is worth 1 point.','Score Function':simpleScorer()}, {'Name': 'Bonus Vowels','Description':'Vowels are 3 pts, consonants are 1 pt.','Score Function':vowelBonusScorer()},{'Name':'Scrabble','Description':'The traditional scoring algorithm.','Score Function': oldScrabbleScorer()}]

function scorerPrompt() {
   let choice;
   console.log('Let\'s play some Scrabble!\n\n')
   let usrInp = input.question('Enter a word to score:\t');
   while(choice !== '0' || choice !== '1' || choice !== '2') {
   choice = input.question('Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2:');
   if (choice === '0'){
      console.log(`Score for \'${usrInp}\': ${simpleScorer(usrInp)}`);
      break
   }else if (choice === '1'){
      console.log(`Score for \'${usrInp}"\': ${vowelBonusScorer(usrInp)}`);
      break
   }else if (choice === '2'){
      console.log(`Score for \'${usrInp}"\': ${oldScrabbleScorer(usrInp)}`);
      break
   }else {
      console.log('Invalid choice! Please select 0, 1, or 2.');
   }
}

}
function transform(oldPointStructure) {
  
   return newPointStructure;
};

let newPointStructure = {
   'A':1,'B':3,'C':3,'D':2,'E':1,'F':4,'G':2,'H':4,'I':1,'J':8,'K':5,'L':1,'M':3,'N':1,'O':1,'P':3,'Q':10,'R':1,'S':1,'T':1,'U':1,'V':4,'W':4,'X':8,'Y':4,'Z':10
};

function runProgram() {
   scorerPrompt()
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
