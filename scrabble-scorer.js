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
	if (word === undefined){
      return
   }
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
   console.log('Let\'s play some Scrabble!\n');
   let check = false;
   
   usrInp = input.question('Enter a word to score:\t');
   // let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/;

return usrInp;
};

let simpleScore = function(word){
   if (word === undefined){
      return
   }
   let totalScore = 0;
   for(let i=0;i<word.length;i++){
   totalScore++
   }
   
  return totalScore;   
};

let vowelBonusScore = function(word){
   if(word === undefined){
      return
   }
   totalScore = 0;
   let temp = word.toUpperCase().trim()
   for(let i=0;i<temp.length;i++){
       if(temp[i] === 'A' || temp[i] === 'E' || temp[i] === 'I' || temp[i] === 'O' || temp[i] === 'U'){
           totalScore += 3;
       }else{
           totalScore++;
       }
   }
   return totalScore;
};

let scrabbleScore = function(word){
   if (word === undefined){
      return
   }
   temp = word.toLowerCase();
	let totalScore = 0;
 
	for (let i = 0; i < temp.length; i++) {
	  for (const item in newPointStructure) {
		 if (item === temp[i]) {
			totalScore += newPointStructure[temp[i]];
		 }
 
	  }
	}
	return totalScore;
};

const scoringAlgorithms = [{'Name':'Simple Score','Description':'Each letter is worth 1 point.','scorerFunction': simpleScorer = function(usrInp){return simpleScore(usrInp)}}, {'Name': 'Bonus Vowels','Description':'Vowels are 3 pts, consonants are 1 pt.','scorerFunction':vowelBonusScorer = function(usrInp){return vowelBonusScore(usrInp)}},{'Name':'Scrabble','Description':'The traditional scoring algorithm.','scorerFunction': scrabbleScorer = function(usrInp){return scrabbleScore(usrInp)}}]

function scorerPrompt(usrInp) {
 let choice = -1;
   while(choice < 0 || choice > 2) {
   choice = input.question(`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].Name}: ${scoringAlgorithms[0].Description}\n1 - ${scoringAlgorithms[1].Name}: ${scoringAlgorithms[1].Description}\n2 - ${scoringAlgorithms[2].Name}: ${scoringAlgorithms[2].Description}\nEnter 0, 1, or 2:`);
   if (choice === '0'){
      console.log(`Score for \'${usrInp}\': ${scoringAlgorithms[0]['scorerFunction'](usrInp)}`);
      
   }else if (choice === '1'){
      console.log(`Score for \'${usrInp}"\': ${scoringAlgorithms[1]['scorerFunction'](usrInp)}`);
      
   }else if (choice === '2'){
      console.log(`Score for \'${usrInp}"\': ${scoringAlgorithms[2]['scorerFunction'](usrInp)}`);
      
   }else {
      console.log('Invalid choice! Please select 0, 1, or 2.');
   }
}

}
function transform(oldPointStructure) {
  let newPoints = {};
   for (item in oldPointStructure){
      let ops = oldPointStructure[item];
      for(i=0;i<ops.length;i++){
         newPoints[ops[i].toLowerCase()] = Number(item);
      }
   }
   return newPoints;
};

let newPointStructure = transform(oldPointStructure);
//console.log(newPointStructure)
function runProgram() {
   scorerPrompt(initialPrompt());
   
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
//