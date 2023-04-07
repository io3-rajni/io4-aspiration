// 1. Square the value of every element in the array. Presume that you will only get
// numbers in the input array.
// a. Example
// i. Input: -> const input = [ 1, 2, 3, 4, 5 ]
// ii. Output: -> [ 1, 4, 9, 16, 25 ] ;

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (element, index, array) {
  array[index] = element * element;
  console.log(array[index]);
});
console.log(numbers);

// 2. If the given input is an array of numbers, return the sum of all the positive ones.
// If the array is empty or there aren't any positive numbers, return 0.
// a. Example :
// input:const input = [ 1, -4, 12, 0, -3, 29, -150];
// Output: 42
const input = [1, -4, 12, 0, -3, 29, -150];
let add = 0;
input.forEach((num) => {
  if (num > 0) {
    add = add + num;
  }
});
console.log(`Positive Numbers---> ${add}`);

// 3. Find the factorial of
// a. 3
// b. 5
// c. 4
// d. 10
const a1 = 5;
let factorial = 1;
const factor = (fac) => {
  for (let i = fac; i >= 1; i--) {
    factorial = factorial * i;
  }
};
factor(a1);
console.log(`factorial---->${factorial}`);

// 4. The following example, which filters out any string which is less than 8
// characters
const words = ["Python", "Javascript", "Go", "Java", "PHP", "Ruby"];
const string = words.filter((str) => typeof str == "string" && str.length <= 8);
console.log(string);

//5. Double the value of elements inside the array
const arr1 = [1, 4, 9, 16, 25];
const arr2 = [21, 0.4, 9, -1.6, 125];
const arr3 = arr1.concat(arr2);
console.log(`Concat array----> ${arr3}`);
arr3.map((find) => {
  const output = find * 2;
  console.log(`Double Value---->${output}`);
});

// 7. Find the leap year inside the array and create two arrays 1. with
// all leap years and 2. array without leap year
const a = [2001, 1994, 1999, 2016, 2025, 2028, 2099, 1992];
const b = [2021, 2004, 2090, 2016, 2125, 2028, 2032, 1972];
a.forEach(function (leapYear) {
  if (leapYear % 4 === 0) {
    console.log(`Is a Leap Year ${leapYear}`);
  }
});
b.forEach(function (leapYear) {
  if (leapYear % 4 === 1) {
    console.log(`Is not a Leap Year ${leapYear}`);
  }
});
// 9. Given an array of numbers, return a new array that has only the numbers that are 5 or
// greater.
const array = [21, 0.4, 9, -1.6, 12, 5, 81, 94, -9];
const emptyArray = [];
array.forEach((ele, ind) => {
  if (ele >= 5) {
    emptyArray.push(ind);
  }
});
console.log(emptyArray);

// 10. Given an array of numbers, return a new array that only includes the even numbers.
const evenNumber = [20, 1.4, 92, -1.61, 1.22, 50, 81, 94, -9];
const newArr = [];
evenNumber.forEach((ele) => {
  if (ele % 2 === 0) {
    newArr.push(ele);
  }
});
console.log("Even Number---->", newArr);

// 11. Given an array of strings, return a new array that only includes those that are 5
// characters or fewer in length
const arrFirst = ["dog", "wolf", "by", "family", "eaten", "camping"];
const arrSecond = [
  "Python",
  "Javascript",
  "Go",
  "Java",
  "PHP",
  "C++",
  "React",
  "RoR",
  "Ruby",
  "Swift",
  "Kotlin",
  "LISP",
];
const arrThird = arrFirst.concat(arrSecond);
console.log(arrThird);
const arrRes = arrThird.filter(
  (str) => typeof str == "string" && str.length >= 5
);
console.log("New Array --->", arrRes);

// 12. Define a function called cleanNames that accepts an array of strings containing
// additional space characters at the beginning and end. The cleanNames() function
// should use the array map method to return a new array full of trimmed names. For
// example:
// b. Output:->
// ["avengers", "captain_america", "ironman", "black panther"
const cleanNamesArr = [
  " avengers",
  " captain_america",
  "ironman ",
  " black panther ",
];
let join;
let res = [];
const cleanNames = (cleanNamesArr) => {
  cleanNamesArr.map((ele, idx) => {
    join = ele.trim();
    res.push(join);
  });
};
cleanNames(cleanNamesArr);
console.log(res);

// console.log(join);
// const Clear = cleanNames.map((val)=>

// );
// console.log(Clear);

// 14. Square and sum the array elements using the arrow function and then find the
// average of the array.
let num = [25, 45, 55, 77, 88, 99];
let add1 = 0;
console.log("Length--->", num.length);

// let square = Math.sqrt([num] * [num]);
// console.log(square);
// const number = (num) => {
for (let i = 0; i < num.length; i++)
  return num.map(function (x) {
    return Math.pow(x, 2);
  });
//     add1 = num[i] + add1;
//   }
//   let avg = add1 / num.length;
//   console.log(avg.toFixed(1));
// };
number(num);
// console.log(add1);
