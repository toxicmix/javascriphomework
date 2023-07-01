// Assignment Code
var lholder = "abcdefghijklmnopqrstuvwxyz";
var uholder = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nholder = "0123456789";
var sholder = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var password = "";
var lowercase;
var uppercase
var numeric;
var specialChar;
var passwordLength;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  asklength();
  askParamiters();
  password = generatePassword(uppercase, lowercase, numeric, specialChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//asks the parameters of password
//lowercase, uppercase, numeric, and/or special characters
function askParamiters(){
  lowercase = confirm("lowercase?");
  uppercase = confirm("uppercase?");
  numeric = confirm("numaric?");
  specialChar = confirm("special charecter?");
}

function asklength(){
  passwordLength = parseInt(prompt("length of password"));
  if(passwordLength < 8 || passwordLength > 128){
    asklength();
  }
  else{
    return;
  }
}


function generatePassword(u, l, n, s) {
  var password = ""; // Initialize an empty password string
  var passwordCharacters = "";

  if (u) {
    passwordCharacters += uholder;
    password += uholder.charAt(Math.floor(Math.random() * uholder.length));
  }
  if (l) {
    passwordCharacters += lholder;
    password += lholder.charAt(Math.floor(Math.random() * lholder.length));
  }
  if (n) {
    passwordCharacters += nholder;
    password += nholder.charAt(Math.floor(Math.random() * nholder.length));
  }
  if (s) {
    passwordCharacters += sholder;
    password += sholder.charAt(Math.floor(Math.random() * sholder.length));
  }

  // Calculate the remaining length based on the selected options
  var remainingLength = passwordLength - password.length;

  for (let i = 0; i < remainingLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  console.log(password);
  console.log(password.length);
  return password; // Return the generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
