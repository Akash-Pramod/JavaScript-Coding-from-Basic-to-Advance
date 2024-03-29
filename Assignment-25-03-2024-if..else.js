// Assignment - Date : 25/03/2024

// 1. Grading System
// Write a program that takes a student's score as input and prints out their grade (A, B, C, D, or F) based on certain criteria.

let score = 43;

let grade;

if (score > 90) {
    grade = "A";
} else if (score >= 75 && score <= 90) {
    grade = "B";
} else if (score >= 60 && score <= 75) {
    grade = "C";
} else if (score >= 45 && score <= 60) {
    grade = "D";
} else {
    grade = "F"
}

console.log(`Grade for given score ${score} is ${grade}.`);



// 2. Leap Year Checker
// Create a program that checks if a given year is a leap year or not.

// Condition for leap year : Exactly divisible by 4 and 400

let year = 2023;

if (year % 4 === 0 && year % 400 === 0) {
    console.log("The given year is a leap year.");
} else {
    console.log("The given year is not a leap year.");
}

// 3. Day of the Week
// Write a program that takes a number from 1 to 7 as input and prints the corresponding day of the week.

let num = 6;

if (num == 1) {
    day = 'Monday';
} else if (num == 2) {
    day = 'Tuesday';
} else if (num == 3) {
    day = 'Wednesday';
} else if (num == 4) {
    day = 'Thursday';
} else if (num == 5) {
    day = 'Friday';
} else if (num == 6) {
    day = 'Saturday';
} else if (num == 7) {
    day = 'Sunday';
} else {
    console.log('Give the number between 1 to 7.');
}

console.log(`Day: ${day}`);
//  After using this code I'm getting error if num > 7, why?

// 4. Calculator
// Develop a simple calculator program that takes two numbers and an operator (+, -, *, /) as input and performs the corresponding operation.

let num1 = 3;
let num2 = 7;
let operator = '*';

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "A number can not divide by zero . give another number and try again";
        }
        break;
    default:
        result = "Given operator is invalid.";
}
console.log(`Result : ${result}`);

// 5. Temperature Converter
// Create a program that converts temperature from Celsius to Fahrenheit or Fahrenheit to Celsius based on user input.

// c for celsius and f for fahrenheit
let conversionType = 'f';
let result;

if (conversionType === 'c') {
    let celsius = 34;
    result = (celsius * 9 / 5) + 32;
    console.log(`Conversion from celsius to fahrenheit : ${result}`);
} else if (conversionType === 'f') {
    let fahrenheit = 54;
    result = (fahrenheit - 32) * 5 / 9;
    console.log(`Conversion from fahrenheit to celcius : ${result}`);
} else {
    console.log('Given conversionType is invalid, Try Again !');
}

// 6. Age Classifier
// Write a program that takes a person's age as input and prints out whether they are an infant, child, teenager, adult, or senior citizen.

let age = 1.5;

let ageCategory;

if (age <= 1) {
    ageCategory = 'Infant';
} else if (age > 1 && age < 13) {
    ageCategory = 'Child';
} else if (age >= 13 && age <= 19) {
    ageCategory = 'Teenager';
} else if (age > 19 && age < 60) {
    ageCategory = 'Adult';
} else {
    ageCategory = 'Senior Citizen';
}
console.log(`Age category for given age is ${ageCategory}.`);

// 7. Month Name
// Develop a program that takes a number from 1 to 12 and prints the corresponding month name.

let number = 3;

switch (number) {
    case 1:
        console.log('The month is January.');
        break;
    case 2:
        console.log('The month is February.');
        break;
    case 3:
        console.log('The month is March.');
        break;
    case 4:
        console.log('The month is April.');
        break;
    case 5:
        console.log('The month is May.');
        break;
    case 6:
        console.log('The month is June.');
        break;
    case 7:
        console.log('The month is July.');
        break;
    case 8:
        console.log('The month is August.');
        break;
    case 9:
        console.log('The month is September.');
        break;
    case 10:
        console.log('The month is October.');
        break;
    case 11:
        console.log('The month is November.');
        break;
    case 12:
        console.log('The month is December.');
        break;
    default:
        console.log("Give the number from 1 to 12 and try again")
}



// Problem on Loops


// Using `console.log` log all the values from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Using `console.log` log all the even values from 1 to 10.

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


// Using `console.log` log all the od values from 1 to 10.
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}



// Calculate the sum of all numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(sum);
}



// Log all the values from 1 to 10 using while loop
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// Calculate the sum of all numbers from 1 to 10.
let j = 1;
let Sum = 0;

while (j <= 10) {
    Sum += j;
    j++;
}

console.log('Sum of all numbers from 1 to 10 : ', Sum);