// RANDOM PASSWORD GENERATOR

// creates 4 new arrays all catagorized 
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', '', ')', '<', '>', '?', ':', '|'];
let numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// sets the letiable of characters to a empty string
let characters = '';

// sets the letiable of characters to a empty string
let generateBtn = document.querySelector("#generate");

// Writes the let password into the password box, this is how you display the random string to the textbox
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password
}
// when clicking the button, will run the function write password which in turn runs the function generate password
generateBtn.addEventListener("click", writePassword);
// generates a random password in a string and pulls the return of the function the the letiable password 
function generatePassword() {
    console.log("u touched the button!!!") // used to test my work slowly
    let charLength = parseInt(prompt("How many characters would you like your password to be?")) // opens a prompt for number input only with a range of 8-128
    if (charLength < 8 || charLength > 128) { // determines the  can be no less that 8
        alert("Password must be greater than 8 and less than 128")
        return ''; // returns a empty password box so that undefined is not displayed 
    }

    characters = []; // pulls the selected characters from their respective arrays and turns them into a string of the letiable characters
    // opens a prompt with either a yes or no button, which respectivly return boolean values of either true or false
    const specialChar = confirm("Would you like to include special characters?")
    if (specialChar) { // if statement that only dispalys if user clicks on yes
        characters = characters.concat(special); // if they selected yes will add special characters from the array special to the characters string
        console.log(`characters: ${characters}`) // used for debugging to keep track of the characters string
        // console.log(specialChar)
    }

    const numericChar = confirm("Would you like to include numeric characters?") // pretty much same as above just another if statement that only runs if the user clicks yes
    if (numericChar) {
        characters = characters.concat(numeric);
        // console.log(characters)
        // console.log(numericChar)

    }
    const uppercaseChar = confirm("Would you like to include uppercase characters?")
    if (uppercaseChar) {
        characters = characters.concat(upper);
        // console.log(characters)
        // console.log(uppercaseChar)
    }
    const lowercaseChar = confirm("Would you like to include lowercase characters?")
    if (lowercaseChar) {
        characters += characters.concat(lower);
        // console.log(characters)
        // console.log(lowercaseChar)
    }
    if (!specialChar && !numericChar && !uppercaseChar && !lowercaseChar) { // fixes the first real bug i found. if user clicks no to all obove options but sumbits a good number, will display the alert below and reset the password box to its original text
        alert("You must select atleast one type of character")
        return '';
    }

    let password = ''; // sets the letibale of password for iside of the function to a empty string 
    for (let i = 0; i < charLength; i++) { // for loop i starts at first selected character in string
        const random = Math.floor(Math.random() * characters.length); // creates a cont random which multiplys 1 by a number within the length of the array characters
        password += characters[random]; // builds the password string 1 by 1 until it hits the character length specified in the begining of the loop
    }
    console.log("made by christian smith")
    return password; // prints password to the text box
}


