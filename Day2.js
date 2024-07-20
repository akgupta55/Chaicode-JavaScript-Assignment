// Day 2: Operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations
// •	Task 1: Write a program to add two numbers and log the result to the console.
// •	Task 2: Write a program to subtract two numbers and log the result to the console.
// •	Task 3: Write a program to multiply two numbers and log the result to the console.
// •	Task 4: Write a program to divide two numbers and log the result to the console.
// •	Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
// Activity 2: Assignment Operators
// •	Task 6: Use the += operator to add a number to a variable and log the result to the console.
// •	Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
// Activity 3: Comparison Operators
// •	Task 8: Write a program to compare two numbers using > and < and log the result to the console.
// •	Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
// •	Task 10: Write a program to compare two numbers using == and === and log the result to the console.
// Activity 4: Logical Operators
// •	Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// •	Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
// •	Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
// Activity 5: Ternary Operator
// •	Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

// ---------------------------------------- Activity 1: Arithmetic Operations ------------------------------------------------

let num1 = 20;
let num2 = 10;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// ---------------------------------------- Activity 2: Assignment Operators ------------------------------------------------

// ----- (+=)

console.log("----------------------------------------");

let a = 2;
let b = "hello";

console.log(a); // before
console.log((a += 3)); // Addition
// Expected output: 5
console.log(a); // after

console.log(b); // before
console.log((b += " world")); // Concatenation
// Expected output: "hello world"
console.log(b); // after

// ------ (-=)

let x = 2;

console.log((x -= 3)); // a = 2 - 3
// Expected output: -1

console.log((x -= "Hello"));
// Expected output: NaN

// ---------------------------------------- Activity 3: Comparison Operators ------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

console.log("----------------------------------------");

// The greater than (>) operator returns true if the left operand is greater than the right operand, and false otherwise.
console.log(5 > 3);
// Expected output: true

console.log(3 > 3);
// Expected output: false

// Compare bigint to number
console.log(3n > 5);
// Expected output: false

console.log("ab" > "aa");
// Expected output: true

//---------------------------------------------------------------------------------------------------------------------------
// The less than (<) operator returns true if the left operand is less than the right operand, and false otherwise.

console.log("----------------------------------------");

console.log(5 < 3);
// Expected output: false

console.log(3 < 3);
// Expected output: false

// Compare bigint to number
console.log(3n < 5);
// Expected output: true

console.log("aa" < "ab");
// Expected output: true

//---------------------------------------------------------------------------------------------------------------------------
//The greater than or equal (>=) operator returns true if the left operand is greater than or equal to the right operand, and false otherwise.

console.log("----------------------------------------");

console.log(5 >= 3);
// Expected output: true

console.log(3 >= 3);
// Expected output: true

// Compare bigint to number
console.log(3n >= 5);
// Expected output: false

console.log("ab" >= "aa");
// Expected output: true

//---------------------------------------------------------------------------------------------------------------------------
//The less than or equal (<=) operator returns true if the left operand is less than or equal to the right operand, and false otherwise.

console.log("----------------------------------------");

console.log(5 <= 3);
// Expected output: false

console.log(3 <= 3);
// Expected output: true

// Compare bigint to number
console.log(3n <= 5);
// Expected output: true

console.log("aa" <= "ab");
// Expected output: true

//---------------------------------------------------------------------------------------------------------------------------
// The equality (==) operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

console.log("----------------------------------------");

console.log(1 == 1);
// Expected output: true

console.log("hello" == "hello");
// Expected output: true

console.log("1" == 1);
// Expected output: true

console.log(0 == false);
// Expected output: true

// Noted : Object: return true only if both operands reference the same object.

const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true

//---------------------------------------------------------------------------------------------------------------------------
// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

console.log("----------------------------------------");

console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false

const object11 = {
  key: "value",
};

const object22 = {
  key: "value",
};

console.log(object11 === object22); // false
console.log(object11 === object22); // true
