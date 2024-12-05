/******************************************************************************

WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!



All the assignment instructions are commented out so that you can write your 

code in between them. Remember to read the instructions CAREFULLY, write short 

comments for your code, and feel free to ask for help if you're stuck.



GOOD LUCK!

******************************************************************************/



/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/



/****************************************************************************** 

ASSIGNMENT 2



Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/



// String
let greeting = "Hello, world!";
const name = "John Doe";

// Number
let age = 25;
const pi = 3.14159;

// Boolean
let isActive = true;
const isOnline = false;

// Array
let numbers = [1, 2, 3, 4];
const colors = ["red", "blue", "green"];

// Modifying the array declared with const
colors.push("yellow");

console.log(greeting);
console.log(name);
console.log(age);
console.log(pi);
console.log(isActive);
console.log(isOnline);
console.log(numbers);
console.log(colors);



/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/



// Regular Operators
let num1 = 10;
let num2 = 5;

// Addition (+)
let sum = num1 + num2;
console.log("Addition:", sum);  // 10 + 5 = 15

// Subtraction (-)
let difference = num1 - num2;
console.log("Subtraction:", difference);  // 10 - 5 = 5

// Multiplication (*)
let product = num1 * num2;
console.log("Multiplication:", product);  // 10 * 5 = 50

// Division (/)
let quotient = num1 / num2;
console.log("Division:", quotient);  // 10 / 5 = 2

// Shorthand Operators

// Increment (++)
let counter = 0;
counter++;  // Increases counter by 1
console.log("Increment (++):", counter);  // 1

// Decrement (--)
counter--;  // Decreases counter by 1
console.log("Decrement (--):", counter);  // 0

// Addition Assignment (+=)
let score = 10;
score += 5;  // Adds 5 to score (score = score + 5)
console.log("Addition Assignment (+=):", score);  // 10 + 5 = 15

// Subtraction Assignment (-=)
let balance = 100;
balance -= 30;  // Subtracts 30 from balance (balance = balance - 30)
console.log("Subtraction Assignment (-=):", balance);  // 100 - 30 = 70




/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 



(HINT: Use the && (logical AND) to check all 3 in one IF statement)



If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 



If any of the conditions for logging in are not met, console.log an error 

message.



Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/




let userName = "";


let userAge = 18;


let userIsLoggedIn = false;


let userIsBlocked = false;


let goToPage = "";



// Checking if all conditions are met
if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
    // If all conditions are true
    userIsLoggedIn = true;
    goToPage = "/home";
    console.log("Welcome, " + userName + "!");
} else {
    // If any condition is false
    console.log("Error: Login conditions not met.");
}



/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:



const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/




// Test Case 1: userMale is true
let userMale = true;  // Change this to true or false to test different cases
const userTitle = userMale ? "Mr." : "Mrs.";  // Ternary operator to assign "Mr." if userMale is true, or "Mrs." if false
console.log(userTitle);  // Logs "Mr." because userMale is true

// Test Case 2: userMale is false
userMale = false;  // Change userMale to false for this test
const newUserTitle = userMale ? "Mr." : "Mrs.";  // Using ternary again
console.log(newUserTitle);  // Logs "Mrs." because userMale is false