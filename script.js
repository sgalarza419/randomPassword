//Array of possible characters
var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<",">", "~"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var allChar = [symbolChar , numberChar, lowerChar, upperChar];
// charSet defined
var charSet;
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var wantPass = confirm("Would you like to generate a random password?");
if (wantPass === true){

  // Password Needs to be 8 - 128 characters
  var inputPass = prompt("How many characters would you like your password to be?");
  for (inputPass === false; inputPass < 8 || inputPass > 128; inputPass++){
    // if (inputPass < 8 || inputPass > 128) 
    alert("Password needs to be between 8 - 128 characters");
    var inputPass = prompt("How many characters would you like your password to be?");
  }
  
  for (allChar === false; !symbol && !number && !lower && !upper; allChar++) {
    alert("Please choose at least one type of character");
    var symbol = confirm("Would you like symbol characters in your password?");
    var number = confirm("Would you like number characters in your password?");
    var lower = confirm("Would you like lowercase characters in your password?");
    var upper = confirm("Would you like uppercase characters in your password?");
  }
// If all character types chosen

if (lower === true && number === true && symbol === true && upper === true) {
    var charSet = symbolChar.concat(numberChar,upperChar,lowerChar);
}

// If three character types chosen

else if (lower === false && number === true && symbol === true && upper === true) {
    var charSet = numberChar.concat(symbolChar, upperChar);
}
else if (lower === true && number === false && symbol === true && upper === true) {
  var charSet = lowerChar.concat(symbolChar, upperChar);
}
else if (lower === true && number === true && symbol === false && upper === true) {
  var charSet = lowerChar.concat(numberChar, upperChar);
}
else if (lower === true && number === true && symbol === true && upper === false) {
  var charSet = lowerChar.concat(numberChar, symbolChar);
}

// If two character types chosen

else if (lower === false && number === false && symbol === true && upper === true) {
  var charSet = symbolChar.concat(upperChar);
}
else if (lower === false && number === true && symbol === true && upper === false) {
  var charSet = symbolChar.concat(numberChar);
}
else if (lower === true && number === false && symbol === true && upper === false) {
  var charSet = symbolChar.concat(lowerChar);
}
else if (lower === false && number === true && symbol === false && upper === true) {
  var charSet = numberChar.concat(upperChar);
}
else if (lower === true && number === true && symbol === false && upper === false) {
  var charSet = numberChar.concat(lowerChar);
}
else if (lower === true && number === false && symbol === false && upper === true) {
  var charSet = upperChar.concat(lowerChar);
}

// If one character type is selected

else if (lower === false && number === false && symbol === false && upper === true) {
  var charSet = upperChar;
}
else if (lower === false && number === false && symbol === true && upper === false) {
  var charSet = symbolChar;
}
else if (lower === false && number === true && symbol === false && upper === false) {
  var charSet = numberChar;
}
else if (lower === true && number === false && symbol === false && upper === false) {
  var charSet = lowerChar;
};

for (var i=0; i < charSet.length; i++){
  console.log(charSet[i]);
}
}
