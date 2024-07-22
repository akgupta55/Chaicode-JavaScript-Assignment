// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// •	Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// •	Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
// Activity 2: Nested If-Else Statements
// •	Task 3: Write a program to find the largest of three numbers using nested if-else statements.
// Activity 3: Switch Case
// •	Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
// •	Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
// Activity 4: Conditional (Ternary) Operator
// •	Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// Activity 5: Combining Conditions
// •	Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// ----------------------------- Activity 1: If-Else Statements ------------------------------------------

function checkNum(num) {
  let result;
  if (num > 0) {
    result = "postive";
  }
  if (num === 0) {
    result = "Zero";
  } else {
    result = "Negative";
  }
  return result;
}

// console.log(checkNum(0));

function eligiblePersonAge(age) {
  let ans;
  if (age >= 18) {
    ans = "a person is eligible to vote.";
  } else {
    ans = "a person is not eligible to vote.";
  }
  return ans;
}

// console.log(eligiblePersonAge(21));

// ----------------------------- Activity 2: Nested If-Else Statements ---------------------------------------------------

function largestOfThree(num1, num2, num3) {
  let res;
  if (num1 > num2 && num1 > num3) {
    res = `1st num ${num1} is largest.`;
  } else if (num2 > num1 && num2 > num3) {
    res = `2nd num ${num2} is largest.`;
  } else {
    res = `3rd num ${num3} is largest.`;
  }
  return res;
}

// console.log(largestOfThree(2, 3, 4));
// console.log(largestOfThree(7, 3, 4));
// console.log(largestOfThree(2, 8, 4));

// -------------------------------------- Activity 3: Switch Case -------------------------------------------------------------------------

// const expr = 5;

// switch (expr) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednessday");
//     break;
//   case 5:
//     console.log("Thusday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("WRONG NUMBER");
// }

// const percentage = 39;

// switch (true) {
//   case percentage <= 100 && percentage >= 90:
//     console.log("Grade A");
//     break;
//   case percentage >= 80:
//     console.log("Grade B");
//     break;
//   case percentage >= 70:
//     console.log("Grade C");
//     break;
//   case percentage >= 60:
//     console.log("Grade D");
//     break;
//   case percentage >= 50:
//     console.log("Grade E");
//     break;
//   case percentage >= 40:
//     console.log("Grade F");
//     break;
//   default:
//     console.log("No Grade");
// }

//-------------------------------------- Activity 4: Conditional (Ternary) Operator --------------------------------------------------------------

function checker(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// console.log(checker(407));

// -------------------------------------------  Activity 5: Combining Conditions ----------------------------------------------------------

function leapYearOrNot(year) {
  if ((year % 4 === 0 || year % 100 !== 0) && year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not A Leap Year";
  }
}

// console.log(leapYearOrNot(2000));
