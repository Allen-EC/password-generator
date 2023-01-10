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

// Create global object for the properties for the password. 
let passwordProperties = 
{
  passwordLength : 0,
  upperChars : false,
  lowerChars : false,
  numChars  : false,
  specialChars : false
};

// getNum will display a prompt, and return a number between minVal and maxVal inclusive.
function getNum(messagePrompt, minVal, maxVal)
{
  var newString = "";
  var newNum = prompt(messagePrompt);
  if(newNum === null || newNum === "")
  {
    return false;   // If the user clicks OK without entering a number, of if the user clicks cancel, just exit the function, and return false.
  }

  // Check to ensure the user has only entered numeric digits.
  if(isNaN(newNum))
  {
    newString = "Please enter only a number between " + minVal + " and " + maxVal + " inclusive.";
    alert(newString);
    return false;
  }

  // Convert the number from a string to a decimal number.
  newNum = parseInt(newNum);

  // Check if number is too small.
  if(newNum < minVal)
  {
    newString = "Password length must be at least " + minVal + " characters long.";
    alert(newString);
    return false;
  }

  // Check if number too large.
  if(newNum > maxVal)
  {
    newString = "Password length must be no more than " + maxVal + " characters long.";
    alert(newString);
    return false;
  }

  // If the code reaches here, then all must  be OK, so return the number.
  return newNum;
}

// Function to prompt user for password options
function getPasswordOptions()
{
  passwordProperties.passwordLength = getNum("Please enter a lengh for your password between 10 and 64 characters:", 10, 64);
  if(passwordProperties.passwordLength === false)
  // If getNum has returned 'false', then the user has not entered a valid nnumber, so just leave, returning 'false'.
  {
    return false;
  }

  // Ask user for the types of characters they want in the password.
  passwordProperties.lowerChars = confirm("Should the password include 'Lowercase' letters?");
  passwordProperties.upperChars = confirm("Should the password include 'Uppercase' letters?");
  passwordProperties.numChars = confirm("Should the password include 'Numeric' characters?");
  passwordProperties.specialChars = confirm("Should the password include 'Special' characters ($@%&*, etc)?");
  
  // Check that the user has selected at least one type of character.
  if(passwordProperties.lowerChars === false
    && passwordProperties.upperChars === false
    && passwordProperties.numChars === false
    && passwordProperties.specialChars === false)
  {
    alert("Password must contain at least 1 type of character")
    return false;
  }

  // All values for the password properties have been selected.
  return true;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword()
{
  getPasswordOptions();
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