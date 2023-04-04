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

// 4. The following example, which filters out any string which is less than 8
// characters
const words = ["Python", "Javascript", "Go", "Java", "PHP", "Ruby"];
const string = words.filter((str) => typeof str == "string" && str.length <= 8);
console.log(string);

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

// 14. Square and sum the array elements using the arrow function and then find the
// average of the array.
let num = [25, 45, 55, 77, 88, 99];

const number = num.filter((num) => typeof num.length == "number" && num++);
{
  console.log(num);
}
