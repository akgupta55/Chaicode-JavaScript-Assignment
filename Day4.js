// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop
// •	Task 1: Write a program to print numbers from 1 to 10 using a for loop.
// •	Task 2: Write a program to print the multiplication table of 5 using a for loop.
// Activity 2: While Loop
// •	Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
// •    Task 4: Write a program to print numbers from 10 to 1 using a while loop.
// Activity 3: Do... While Loop
// •	Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
// •	Task 6: Write a program to calculate the factorial of a number using a do...while loop.
// Activity 4: Nested Loops
// •	Task 7: Write a program to print a pattern using nested for loops:

//                   *
//                   **
//                   ***

// Activity 5: Loop Control Statements
// •	Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
// •	Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

// ------------------------------------- Activity 1: For Loop -------------------------------------------------------------

for (let count = 1; count <= 10; count++) {
  //   console.log(count);                              // task 1
  //   console.log(`5 * ${count} = ${5 * count}`);      // task 2
}

// -------------------------------------- Activity 2: While Loop --------------------------------------------------------

let count = 0;
let sum = 0;

while (count <= 10) {
  sum += count;
  count++;
}

// console.log(sum);

let counter = 10;

while (counter > 0) {
  //   console.log(counter);
  counter--;
}

// ----------------------------------------- Activity 3: Do... While Loop -----------------------------------------------
let i = 1;
do {
  //   console.log(i);
  i++;
} while (i <= 5);

let fact = 1;
let num = 5;

do {
  fact = fact * num;
  num--;
} while (num > 0);

// console.log(fact);

// -------------------------------------------- Activity 4: Nested Loops --------------------------------------------

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    // console.log("*", j);
  }
  // console.log("\n");
}

// ------------------------------------------ Activity 5: Loop Control Statements -----------------------------------------

for (i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  // console.log(i);
}

for (i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
