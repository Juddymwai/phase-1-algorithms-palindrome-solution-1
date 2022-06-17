function isPalindrome(word) {
  // Write your algorithm here
  let wordCase = word.toLowerCase()
  let wordReverse = word.split('').reverse().join('')
  if (wordCase===wordReverse){
    return true

  }
  else {
    return false
  }
 


}


/* 
  Add your pseudocode here
  change the input into lowercase
  "Then reverse the input string with the help of split and join method
  use strict equality assignment to check if the input string and reverse string is same
  Return true is its the same and false when its not
*/

/*
  Add written explanation of your solution here
*/
// i will convert the word into lowercase as the first step. secondi wil define a second varable that reverses the word by use of split method and join method. 
//   i will then use if statement to compare the two varables using strict equaliy assignment. 
//   when the condition is met, i expect the result to be true, and if the condition will not be met, i will expect a false return
  

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
