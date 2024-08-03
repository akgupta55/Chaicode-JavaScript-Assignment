// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// •	Task 1: Write a function to check if a number is even or odd and log the result to the console.
// •	Task 2: Write a function to calculate the square of a number and return the result.
// Activity 2: Function Expression
// •	Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
// •	Task 4: Write a function expression to concatenate two strings and return the result.
// Activity 3: Arrow Functions
// •	Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
// •	Task 6: Write an arrow function to check if a string contains a specific character and return a Boolean value.
// Activity 4: Function Parameters and Default Values
// •	Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// •	Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
// Activity 5: Higher-Order Functions
// •	Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// •	Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value,
//    and then applies the second function to the result.

// ------------------------------------- Activity 1: Function Declaration -------------------------------------------------

function evenORodd(num) {
  let result;
  num % 2 === 0
    ? (result = `The num ${num} is Even`)
    : (result = `The num ${num} is Odd`);
  return result;
}

// console.log(evenORodd(56));

function squareNum(num) {
  return num * num;
}

// console.log(squareNum(5));

// ------------------------------- Activity 2: Function Expression ------------------------------------------------

function maxi(num1, num2) {
  let result;
  num1 > num2
    ? (result = `The maximum number is ${num1}`)
    : (result = `The maximum number is ${num2}`);
  return result;
}

// console.log(maxi(9, 17));

function concatenate(str1, str2) {
  return `${str1} ${str2}`;
  //   return str1 + str2;
}

// console.log(concatenate("hello my name", "is ajay"));

// function map(f, a) {
//   const result = new Array(a.length);
//   for (let i = 0; i < a.length; i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }

// const cube = function (x) {
//   return x * x * x;
// };

// const numbers = [0, 1, 2, 5, 10];
// // console.log(map(cube, numbers));

// const foo = function bar() {
//   return console.log("Hello My name");
// };

// // console.log(foo());
// // console.log(bar());
// bar();

// -------------------------------- Activity 3: Arrow Functions --------------------------------------------------

const sum = (num1, num2) => num1 + num2;

// console.log(sum(3, 4));

const specificChar = (str, ch) => {
  for (let i = 0; i < 4; i++) {
    if (str[i] === ch) {
      // If it finds a match (str[i] === char), it returns true.
      return true;
    }
  }
  return false; // If the loop completes without finding the character, it returns false.
};

// console.log(specificChar("ajay", "z"));

// -------------------------------------------- Activity 4: Function Parameters and Default Values --------------------------------------

function multiply(a, b = 1) {
  return a * b;
}

// Examples
// console.log(multiply(5)); // Output: 5 (5 * 1)
// console.log(multiply(5, 3)); // Output: 15 (5 * 3)

function greet(name, age = 25) {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Examples
// console.log(greet("Alice")); // Output: Hello, Alice! You are 25 years old.
// console.log(greet("Bob", 30)); // Output: Hello, Bob! You are 30 years old.

// -------------------------------------------- Activity 5: Higher-Order Functions ------------------------------------

// One such technique is using higher order functions.
// Higher order functions are functions that take one or more functions as arguments,
// or return a function as their result.

function repeateFn(fn, itr) {
  return function () {
    for (let i = 0; i < itr; i++) {
      fn();
    }
  };
}

const sayHello = () => console.log("hello !");

const callManyTimes = repeateFn(sayHello, 5); // fun define calling

// fun call
callManyTimes();

// --------------------------------------- next task --------------------

function composeFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}

// Example usage:
const addTwo = (num) => num + 2;
const multiplyByThree = (num) => num * 3;

const result = composeFunctions(addTwo, multiplyByThree, 5);
console.log(result); // This will output 21 because (5 + 2) * 3 = 21
