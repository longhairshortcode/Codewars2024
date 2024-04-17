//Tuesday March 26, 2024

//TASK*******

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//Examples: Input: [1, 5.2, 4, 0, -1], Output: 9.2
//Input: [], Output: 0
//Input: [-2.398], Output: -2.398

//Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

//ANSWER******
function sum (numbers) {
    if (numbers.length === 0){
      return 0
    }else
  return numbers.reduce((a, b) => a + b)
};


//(1st)Monday April 8, 2024

//TASK*********************Level 8 - Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
//ANSWER******************

function getAverage(marks){
  // add all the num in array
  let sum= marks.reduce((a, b) => a + b); 
  let avg = sum / marks.length;
  return Math.floor(avg)
  
  // divide by array length
  //round that number down
}

// Param: array, never empty, always integer?
// Return a number rep average rounded down to nearest integer


//[10, 10 , 10, 9] = 9.75 => 9 final


//(2nd)Monday April 8, 2024
//TASK*********************Level 8 - Convert number to reversed array of digits
//Given a random non-negative number, you have to return 
//the digits of this number within an array in reverse order.
//ANSWER******************
function digitize(n) {
  let nStr = n.toString();
  let myArr = [];
  let reverseArr = nStr.split('').reverse();

  for (let i = 0; i < reverseArr.length; i++) {
    myArr.push(Number(reverseArr[i]));
  }

  return myArr;
}

//OTHER ANSWERS FOR THIS:
function digitize(n) {
  let nArr = Array.from(String(n), Number);
  let revArr = nArr.reverse();
  return revArr;
}

function digitize(n) {
  //make n to a string, then to an array, then back to numbers, then reverse the array
  return String(n).split('').map(Number).reverse()
}


//April 14, 24
// Is every value in the array an array?
// This should only test the second array dimension of the array. 
// The values of the nested arrays don't have to be arrays.

const arrCheck = value => {
  for (let i=0; i<= value.length-1; i++){
    if (!Array.isArray(value[i])){
      return false;
     }
    }
  return true;
  }

//April 14, 24
// A non-empty array a of length n is called an array of all possibilities if it 
// contains all numbers between 0 and a.length - 1 (both inclusive). Write a function 
// that accepts an integer array and returns true if the array is an array of all possibilities, else false.

function isAllPossibilities(x){
  let length = x.length - 1; // Define length inside the function
  for (let i = 0; i <= length; i++){
      if (!x.includes(i)) {
          return false;
      }
  }
  return true;
}





const letters = []
const word = "lunch"
for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}


// TASK is a word a paladrone?
//My Wrong Answer
myString = "Leon"

function checkPaladrone(myString) {
  const strToArr = myString.split("")
  let revStrToArr = strToArr.reverse()
  if (strToArr === revStrToArr){
    return "YES A PALIDRONE!"
  }else{
    return "NOPE"
  }
}

checkPaladrone(myString);


//My correct answer
myStr = "Leon"

function isPal(myStr){
  let revStr = myStr.split("").reverse().join("")
  if (myStr === revStr){
    return true
  }else{
    return false
  }
}

//TASK(Codevolution JS Algo 7 Youtube) given a number, "n", find the first "n" elements of the Fibonacci sequence
//ANSWER
function fibo(n) {
let myArr = [0, 1];
for (let i = 2; i < n; i++){
  myArr.push((myArr[i - 2] + myArr[i - 1]))
}
  return myArr;
}

//His Answer:
function fibo(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

function fibo(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

function fibo(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

function fibo(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}
function fibo(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}