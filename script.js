// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

//character array set//

var numbs = ["0","1","2","3","4","5","6","7","8","9"];
var specChar = [" ","!","#","$","%","&","'","(",")","*","+","-",".","/",":","<","=",">","?","@","[","]","^","_","{","}","~"];
var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//blank arrays//

var computedArray = [];
var givenArray = [];



//promps//
var charAmount = prompt ("select a number of characters between 8-128");
    
    if(charAmount < 8) {
        promp("Error, please select a number between 8 and 128");
        return;
    }
    
    
    
var numbers = confirm ("add numbers to your password?");
var capitols = confirm ("add capitol letters to your password?");
var lowercase =confirm ("add lowercase letters to your password?");
var specialChar = confirm ("add special characters to your password?");

//array conditional statements//


if(numbers){
    computedArray = computedArray.concat(numbs);
}
if(specialChar) {
    computedArray = computedArray.concat(specChar);
}
if(lowercase) {
    computedArray = computedArray.concat(lowers);
}
if(capitols){
    computedArray = computedArray.concat(uppers);
} else{
    promp("Error! you must select at least one option to recieve a passoword");
    return;
}


//adding a little RNG to the mix//

for(var i = 0; i < charAmount; i++){
    givenArray.push (computedArray[Math.floor(Math.random() * computedArray.length)]);
}

return givenArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
