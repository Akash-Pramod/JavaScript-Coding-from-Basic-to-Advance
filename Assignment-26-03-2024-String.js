// Assignment on String - Date: 26/03/2024




// 1. Print Each Character:
// Write a program that prints each character of a given string on a new line.

const str = 'Akash';

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}





// 2. Count Characters:
// Create a function that counts the number of characters in a string.

const myName = 'Akash Pramod';
// console.log(myName.length);

let countChar = 0;

for (let i = 0; i < myName.length; i++) {
    countChar++;
}
console.log(countChar);




// 3. Reverse String:
// Write a program that prints the string in reverse order.

const stateName = 'Karnataka';

let reversedString = '';

for (let i = stateName.length - 1; i >= 0; i--) {
    reversedString += stateName[i];
}
console.log(reversedString);







// 4. Check Specific Character:
// Implement a function that checks if a string contains a specific character.

let sentence = "Life is beautiful, so start enjoying it."

let char = 'e';
for (let specialChar = 0; specialChar < sentence.length; specialChar++) {
    if (sentence[specialChar] === char) {
        console.log(true);
        break;
    } else {
        console.log(false);
    }
}
// Why I'm getting true and false for every character in string ?






// 5. Concatenate Strings:
// Write a function that concatenates two strings together.

const myFirstName = 'Akash';
const myLastName = 'Pramod';

console.log(myFirstName + ' ' + myLastName);







// 7. Repeat String:
// Write a function that repeats a given string a specified number of times.

let myFullName = 'AkashPramod';

console.log(myFullName.repeat(3));





// 8. Check if String is Empty:
// Implement a function that checks if a string is empty.
let string = 's';

if (string.trim() === '') {
    console.log(true);
} else {
    console.log(false);
}






// 9. Count Occurrences:
// Write a program that counts the number of occurrences of a specific character in a string.


let myCountry = 'Bharat Mata';

let specificChar = 'a';

let countOfOccurence = 0;
for (let i = 0; i < myCountry.length; i++) {
    if (myCountry[i] == specificChar) {
        countOfOccurence++;
    }
}
console.log(countOfOccurence);