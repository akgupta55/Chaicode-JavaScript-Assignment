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

// ---------------------------------------- Activity  4: Logical Operators ------------------------------------------------

console.log("----------------------------------------");

//The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
// More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

const aa = 3;
const bb = -2;

console.log(aa > 0 && bb > 0);

//The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true.
//It is typically used with boolean (logical) values. When it is, it returns a Boolean value.
//However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

console.log("----------------------------------------");

const aaa = 3;
const bbb = -2;

console.log(aaa > 0 || bbb > 0);
// Expected output: true

// The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa.
// It is typically used with boolean (logical) values.
// When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.

const ax = 3;
const bx = -2;

console.log(!(ax > 0 || bx > 0));

// ---------------------------------------- Activity 5: Ternary Operator ------------------------------------------------

// Conditional (ternary) operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?),
// then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
// This operator is frequently used as an alternative to an if...else statement.

console.log("----------------------------------------");

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"
