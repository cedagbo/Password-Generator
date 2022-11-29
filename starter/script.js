// (Data already given!) Initialising password options as arrays that the user should consider along the way
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var characterLength = prompt("Please enter a password. It should be between 10 and 64 characters.");
  //Set the conditions in case the user does not follow some instructions well defined
  if(characterLength <= 9 || characterLength >=65){
    alert("Please follow the instructions. Password must be at least 10 characters length and no more than 64.");
    var characterLength = prompt("What's the length of the password you want to generate?")
  }
  alert("Your password will have " + charactersLength + "characters.");
}
// Set out the password criteria 
var confLowerCasedCharacters = confirm("Click OK whether you want to include lowercase characters");
var confUpperCasedCharacters = confirm("Click OK if you want to consider uppercase in yyour password");
var confNumericCharacters = confirm("Click OK if you want your password to contain numeric characters.");
var confSpecialCharacters = confirm("Click OK if you choose to include special characters");

// Let us initialise password parameters
var passwordCharacters = []
if (confLowerCasedCharacters) {
  passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
}
if (confUpperCasedCharacters) {
  passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
}
if (confNumericCharacters) {
  passwordCharacters = passwordCharacters.concat(numericCharacters)
}
if (confSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);