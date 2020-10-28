//Array of possible characters
var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<",">", "~"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var finalPass = [" "]
var allChar =["symbolChar", "numberChar","lowerChar","upperChar"];

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
  
  for (allChar === false; !passSymbol && !passNumber && !passLower && !passUpper; allChar++) {
    alert("Please choose at least one type of character");
    var passSymbol = confirm("Would you like symbol characters in your password?");
    var passNumber = confirm("Would you like number characters in your password?");
    var passLower = confirm("Would you like lowercase characters in your password?");
    var passUpper = confirm("Would you like uppercase characters in your password?");
  }


  //testing prompt
  // alert(" code is " + inputPass);
  }
