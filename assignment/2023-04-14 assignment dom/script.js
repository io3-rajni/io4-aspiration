// 1. Write a program that prints the numbers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz`);
  } else if (i % 5 == 0) {
    console.log(`buzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz`);
  } else {
    console.log(i);
  }
}
// 2.Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
const arr = [25, 85, 63, 41, 50];
const arr1 = arr.reduce((previous, currentVal) => {
  return previous + currentVal;
});
console.log(arr1);

// 3. Write a function that takes a string as an input and returns the reverse of the string.
const name1 = "Rajni Maurya";
const reverse = (str) => {
  return String(str).split("").reverse().join("");
};
console.log(reverse(name1));

//4. Write a function that takes an array of strings and returns the longest string in the array.
const array = [
  "delhi",
  "ludhiana",
  "punjab",
  "lucknow",
  "vishakhapattanam",
  "rajasthan",
  "Goa",
];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i; j < array.length; j++) {
//     if (array[i].length >= array[j + 1].length) {
//       console.log(`this is a longest string`, array[j]);
//     } else {
//       console.log("small", array[j]);
//     }
//   }

//   console.log(array);
// }

// //5. Write a program that prompts the user to enter a number, then prints out all the prime numbers up to that number.
const primeNum = Number(prompt(`Enter any number`));
// console.log(`prime number--->`, primeNum);
const number = (ele) => {
  if () {
    console.log(`is prime number`, ele);
  } else {
    console.log(`prime not number`, ele);
  }
};
number(primeNum);
