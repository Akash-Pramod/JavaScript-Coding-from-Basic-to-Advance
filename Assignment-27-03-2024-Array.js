// Assignment on Array - Date: 27/03/2024



// Assignment 1 on Array

// 1. Declare an empty array and store it in a variable.

let emptyArr = [];


// 2. Now check the type of empty array you declared above.
console.log(typeof (emptyArr));


// 3. Create an array named `colors` that contains five different names of colors as strings.
let colors = ['Yellow', 'Red', 'Green', 'Orange', 'Blue'];


// 4. Access the first color in the array and print it to the console using `console.log()`
let firstColor = colors[0];
console.log(firstColor);


// 5. Access the third color in the array and print it to the console using `console.log()`
let thirdColor = colors[2];
console.log(thirdColor);


// 6. Access the last color in the array and print it to the console using `console.log()`
let lastColor = colors[colors.length - 1];
console.log(lastColor);


// 7. Write one line of code that changes the value of the first color in the list to "black" (overwriting the previous value).

colors[0] = 'Black';
console.log(colors);


// 8. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).

colors[colors.length - 1] = 'Ultraviolet';
console.log(colors);


// 9. Now, Find the length of the array named `colors`.

let lengthOfColors = colors.length;
console.log(lengthOfColors);


// 10. Create a new variable called fourthColor and set it equal to the fourth color in the list.

let fourthColor = colors[3];
console.log(fourthColor);


// 11. Add another color to the end of the list.
colors[colors.length] = 'Brown';    // 1st way of adding color at last position in the list
colors.push('gray');                // 2nd way of adding color at last position in the list
console.log(colors);


// 12. Add another color to the beginning of the list (use array method array.unshift('gray'))
colors.unshift('White');
console.log(colors);


// 13. Remove the first color from the starting of the array
colors.shift();
console.log(colors);


// 14. Remove the last color from the end of list, and then print the length of the array to the console one more time.
colors.pop();
console.log(colors);

// 15. Remove the second color from the end of list.
colors.splice(-2, 1);
console.log(colors);


// 16. Write a for loop to iterate through every element in the array and print each element to the console.
for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);
}


// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
for (let index = 0; index < colors.length; index++) {
    console.log(index, ',', colors[index]);
}



// 18. Write a for..of loop to iterate through every element in the array and print each element to the console.
for (let color of colors) {
    console.log(color);
}


// 19. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
console.log("***************");
let lastColorOfColors = colors[colors.length - 1];
console.log(lastColor);






// Assignment 2 on Array

// 1. Create an array named numbers and store 5 number values in it

let numbers = [12, 25, 56, 34, 64];


// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for (let index = 0; index <= numbers.length - 1; index++) {
    sum = sum + numbers[index];
}
console.log(sum);


// 3. Calculate the average of array items and print it to the console using console.log()
let add = 0;
for (let index = 0; index <= numbers.length - 1; index++) {
    add = add + numbers[index];
}
console.log(add / numbers.length);


// 4. Find the highest number in the array and print it to the console using console.log()

let highestNumber = numbers[0];

for (let index = 1; index <= numbers.length - 1; index++) {
    if (numbers[index] > highestNumber) {
        highestNumber = numbers[index];
    }
}
console.log(highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowestNumber = numbers[0];

for (let index = 1; index <= numbers.length - 1; index++) {
    if (numbers[index] < lowestNumber) {
        lowestNumber = numbers[index];
    }
}
console.log(lowestNumber);


// 6. Find the even numbers in the array and print them to the console using console.log()

for (let index = 0; index <= numbers.length - 1; index++) {
    if (numbers[index] % 2 === 0) {
        console.log(numbers[index]);
    }
}


// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let index = 0; index <= numbers.length - 1; index++) {
    if (numbers[index] % 2 !== 0) {
        console.log(numbers[index]);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for (let index = 0; index <= numbers.length - 1; index++) {
    if (numbers[index] % 5 === 0) {
        console.log(numbers[index]);
    }
}

// 9. Log all the element of the array one by one

for (let index = 0; index <= numbers.length - 1; index++) {
    console.log(numbers[index]);
}

// 10. Find all the number in the array that is divisible by 3
for (let index = 0; index <= numbers.length - 1; index++) {
    if (numbers[index] % 3 === 0) {
        console.log(numbers[index]);
    }
}