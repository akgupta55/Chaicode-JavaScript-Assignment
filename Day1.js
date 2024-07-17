// Day 1: Variables and Data Types
// Tasks/Activities:
// Activity 1: Variable Declaration
// •	Task 1: Declare a variable using var, assign it a number, and log the value to the console.
// •	Task 2: Declare a variable using let, assign it a string, and log the value to the console.
// Activity 2: Constant Declaration
// •	Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
// Activity 3: Data Types
// •	Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
// Activity 4: Reassigning Variables
// •	Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
// Activity 5: Understanding const
// •	Task 6: Try reassigning a variable declared with const and observe the error.

//----------------- Task 1: Declare a variable using var, assign it a number, and log the value to the console.---------------------------------------------

var num1;
num1 = 10;
// console.log(num1);

// -------------------- Task 2: Declare a variable using let, assign it a string, and log the value to the console. ------------------------------------

let str;
str = "My Name Ajay Kumar Gupta";
// console.log(str);

// ------------------- Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console. -----------------------------------

const isBool = true;
// console.log(isBool);

// ------------------ Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. ----------

// -------- number ------------

var numVar = 10;
console.log(typeof numVar);

let numLet = 10;
console.log(typeof numLet);

const numConst = 10;
console.log(typeof numConst);

// -------- string ------------

var strVar = "10";
console.log(typeof strVar);

let strLet = "10";
console.log(typeof strLet);

const strConst = "10";
console.log(typeof strConst);

// -------- boolean ------------

var isBoolVar = true;
console.log(typeof isBoolVar);

let isBoolLet = true;
console.log(typeof isBoolLet);

const isBoolConst = true;
console.log(typeof isBoolConst);

// -------- object ------------

var objVar = { name: "Ajay Kumar Gupta", YearOfPassOut: 2024 };
console.log(typeof objVar);

let objLet = { name: "Ajay Kumar Gupta", YearOfPassOut: 2024 };
console.log(typeof objLet);

const objConst = { name: "Ajay Kumar Gupta", YearOfPassOut: 2024 };
console.log(typeof objConst);

// -------- array ------------

var arrlVar = [1, 88, 11];
console.log(typeof arrlVar);

let arrLet = [1, "we", 11];
console.log(typeof arrLet);

const arrConst = [1, "we", 11];
console.log(typeof arrConst);

// ---------------------- Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console. ----------------

let newVar = 10;
console.log(newVar);
newVar = 20;
console.log(newVar);

// ------------------------- Task 6: Try reassigning a variable declared with const and observe the error. ---------------------------

const noCh = 10;
noCh = 30;
console.log(noCh);

// TypeError: Assignment to constant variable.
