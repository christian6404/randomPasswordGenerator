var special = ['!','@','#','$','%','^','&','*','(','',')','<','>','?',':','|'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var characters = '';
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password
}

generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    console.log("u touched the button!!!")
    var charLength=prompt("How many characters would you like your password to be?")
        if (charLength<=7){
            alert("Password must be atleast 8 characters")
            return;
        } else if (charLength>=128){
            alert("Password must be nomore than 128 characters")
            return;
        } else {
            console.log(charLength)
        }
        characters = '';

    const specialChar=confirm("Would you like to include special characters?")
        if (specialChar == true){
            characters += special.join('');
            console.log(characters)
            console.log(specialChar)
        }

    const numericChar=confirm("Would you like to include numeric characters?")
        if (numericChar == true){
            characters += numeric.join('');
            console.log(characters)
            console.log(numericChar)

        }
    const uppercaseChar=confirm("Would you like to include uppercase characters?")
        if (uppercaseChar == true){
            characters += upper.join('');
            console.log(characters)
            console.log(uppercaseChar)
        }
    const lowercaseChar=confirm("Would you like to include lowercase characters?")
        if (lowercaseChar == true){
            characters += lower.join('');
            console.log(characters)
            console.log(lowercaseChar)
        } 
        if (!specialChar && !numericChar && !uppercaseChar && !lowercaseChar) {
            alert("You must select atleast one type of character")
            return '';
        }

        var password = '';
        for (let i = 0; i < charLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length); // took me a long time to figure this out completely
            password += characters[randomIndex];
        }
        return password;
        console.log("made by christian smith")
}


