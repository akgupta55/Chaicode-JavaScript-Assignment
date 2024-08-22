// hand practice
//Decalaration

// let arr = new Array(); // 1st way

let person = {
  name: "ajay",
  age: 23,
};

let arr = [1, 2, 3, "rahul", "ajay", person]; // 1st way

// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[5]);
// console.log(arr[5].name);

// length of an array
let lnth = arr.length;
// console.log(lnth);

// adding element after last index
arr.push("ashish");

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// remove element from last index

arr.pop();

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// Add to Top of the Array
arr.unshift("orange");

// Remove From Top of the Array
arr.shift();

// how to accses array elements

// using for loop

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// using while loop

let i = 0;
while (i < arr.length) {
  //   console.log(arr[i]);
  i++;
}

// using map

// let newArr = arr.map((element, index, array) => {
//   return { element, index, array };
// });
// console.log(newArr);

// using filter

let arrNum = [1, 2, 3, 4, 5, 6];

// let newArr = arrNum.filter((element, index, array) => {
//   return element > 3;
// });
// console.log(newArr);

// using reduce

// let newArr = arrNum.reduce((prev, ele) => {
//   return prev + ele;
// }, 2);
// console.log(newArr);

// let newArr = arrNum.some((element, index, array) => {
//   return element > 3;
// });
// console.log(newArr);

// let newArr = arrNum.every((element, index, array) => {
//   return element > 3;
// });
// console.log(newArr);

// find
// findindex
// silce
// splice
// fill
let arrx = [1, 2, 3, 4];

let nex = arrx.fill(9, 1);

// console.log(nex);

// sort

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
}

// Task 2: Access the first and last elements of the array and log them to the console.

// console.log(nums[0]);  // 1st element
// console.log(nums[nums.length - 1]); // 2nd element

// Activity 2: Array Methods (Basic)
// •	Task 3: Use the push method to add a new number to the end of the array and log the updated array.

nums.push(6);
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
}

// •	Task 4: Use the pop method to remove the last element from the array and log the updated array.

nums.pop();
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
}

// •	Task 5: Use the shift method to remove the first element from the array and log the updated array.

nums.shift();
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
}

// •	Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

nums.unshift(7);
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
}

// Activity 3: Array Methods (Intermediate)
// •	Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledArr = nums.map((item) => {
  // return item * 2;
});
// console.log(doubledArr);

// •	Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let evenNumber = nums.filter((item) => {
  return item % 2 === 0;
});

// console.log(evenNumber);

// •	Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sum = nums.reduce((prev, curr) => {
  return prev + curr;
}, 0);
// console.log(sum);

// Activity 4: Array Iteration
// •	Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let index = 0; index < nums.length; index++) {
  // console.log(nums[index]);
}

// •	Task 11: Use the forEach method to iterate over the array and log each element to the console.

// Syntax

// array.forEach(callback(currentValue, index, array), thisArg);

const numbers = [1, 2, 3, 4, 5];

// Example 1: Basic iteration and logging
numbers.forEach((number) => {
  // console.log(number);
});

// Example 2: Using index and array in the callback
numbers.forEach((number, index, array) => {
  // console.log(`Index: ${index}, Number: ${number}, Array: ${array}`);
});

// Example 3: Modifying each element
let modifiedNumbers = [];
numbers.forEach((number) => {
  modifiedNumbers.push(number * 2);
});
// console.log(modifiedNumbers); // Output: [2, 4, 6, 8, 10]

// Activity 5: Multi-dimensional Arrays
// •	Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Creating a 3x3 matrix (2D array)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Logging the entire matrix to the console
// console.log(matrix);

// •	Task 13: Access and log a specific element from the two-dimensional array.

// Creating a 3x3 matrix (2D array)
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing and logging the element in the second row and third column
const specificElement = matrix2[1][2]; // Remember, indices start from 0
console.log(specificElement);
