// Assignment on Objects - Date: 28/03/2024



// Assignment 1 :

//  - Create a variable named `character` using `let` assign a value of empty object.

let character = {};




//  Re-assign the value of `character` variable to and object with the key `characterName` and value of "Arya"

character.characterName = "Arya";
console.log(character);






// - A variable named `age` is predefined with value 20. Add a new key named `character-age` with the value of `age` variable i.e 20 (don't use the value 20)

character.age = 20;
console.log(character);

character["character-age"] = character.age;
console.log(character);
console.log(character["character-age"]);



// - Add a new key `sur name` with the value of the surname of the character i.e "Stark". (Don't remove the space between `sur` and `name`)

character["sur name"] = 'Stark';
console.log(character);



// - Add a new key `title` with the value title of the character i.e "Lady of Winterfell"
character.title = 'Lady of Winterfell';
console.log(character);



// - Add a new property to the character object named `isFemale` and value will be `true`
character.isFemale = true;
console.log(character);




//  - Add a new property in the character object `isAdult`. The value will be true if age is greater than 18 or it will be false.

character.isAdult = character.age > 18;
console.log(character);



// - Add a new key with the name stored in variable `keyName` defined below i.e `playedBy` (use [] for computed property) and the value of "Maisie Williams"

let keyName = 'playedBy';

character[keyName] = 'Maisie Williams';
console.log(character);



// Using the function `console.log` log the value of the key `42`. You don't have to add the key
console.log(character[42]);


// - Add a new key named `totalSeasons` with the value of `1 + 2 + 3 + 2`. Use this expression
character.totalSeasons = 1 + 2 + 3 + 2;
console.log(character);


// - Access the value of the key `totalSeason` (it should be 8)
console.log(character.totalSeasons);




// Questions based on below code :
let keyValue = 'username';
let charactor = {
    username: 'arya',
};
// 1.
console.log(charactor['keyValue']);
// 2.
console.log(charactor[keyValue]);


// Q : What will be the output of 1 and 2
// Ans : output of 1 : undefined, output of 2 : arya




// Q : Why are they different
// Ans : When trying to get the value of 'username' with keyword 'KeyValue' as string in first log then console start searching 'keyValue' in object 'character' directly which is not present in 'charactor' and when console doesn't find any key with the name of 'keyValue' then it returns undefined . BUT when trying to access the 'username' from character with variable 'keyValue' without single or duble quote then console search that keyboard firstly outside the console and after getting the value of 'keyValue' with name 'username' with double or single quote then console enter in object 'charactor' and get 'username' key with value 'arya' so, it returns 'arya'.




// Q : Can I use . dot notation to access the value (using variable name). Explain reason?
// Ans : No, we can't access the value using dot notation because dot notation works fine using property-name of the object 'charactor' but here we wre trying to access through the variable name which is not a property of the object 'charactor'.





// Q : What is the difference between . dot notation and [] bracket notation. Explain
// Ans : Dot notation is used when we want to access the property of the object directly but when we want to access the property of object with the name of special character, number and nested object we used bracket notation. Bracket Notation is also used when we have to access the property of the object using varialbe name of outside the object. Dot notation is easly readable.





// Q : What are situation where we use dot notation and bracket notation.
// Ans : Dot notation is used when we want to access the property of the object directly but when we want to access the property of object with the name of special character, number and nested object we used bracket notation. Bracket Notation is also used when we have to access the property of the object using varialbe name of outside the object.





// Assignment 2

// 1. Define a variable named `students` and assign a blank object to it.

let students = {};


// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.

students.studentName = 'Akash Pramod';


// 3. Using `console.log` log the value of `studentName` key from the `students` object

console.log(students.studentName);

// 4. Add a another key of the value of variable `batch` in the object with the value of 16.
students.batch = 16;


// 5. Using `console.log` log the value of `batch` key from the `students` object
console.log(students.batch);


// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
students.isAdult = students.batch > 18;



// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(students.isAdult);



// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.
students[42] = 'The answer to the meaning of life';



// 9. Using `console.log` print the value of key `42` from the `students` object
console.log(students[42]);


// 10. Check the length of object named `students`.
let objLength = Object.keys(students).length;
console.log(objLength);

// 11. Can you define a key of `let or var` in any object? Reason.

// Ans : Yes we can define to a key as all the key in an object would be a string so, we can define the key 'let or var' as string inside double or single quote

// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
console.log(students);

delete students.isAdult;

console.log(students)




// 13. Update the value of the key batch in the object `students` and print it using `console.log`
console.log(students.batch);
students.batch = 25;
console.log(students.batch);


console.log(students);



//  ******************************************* ASSIGNMENT COMPLETED ********************************************  //




