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
const number = `enter prime Number`;
for (let i = 0; i <= number; i++) {
  let prime = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      prime = 1;
      break;
    }
  }
  if (i > 1 && prime == 0) {
    console.log(`Prime Number`, i);
  }
}
//6. Write a function that takes a sentence as an input and returns the number of words in the sentence.
const lengthFind = "i am Rajni asdsdf asfsdfsdfdsf sadfsdf";
let count = 0;
let count1 = 0;
let splitString = lengthFind.split("");
splitString.map((item, i) => {
  if (item.trim()) {
    count++;
  } else {
    count1++;
  }
});
console.log("length of string", count, count1);

// for(let i=1;i<=lengthFind.length;i++){
//   if(){

//   }
// }

// const sentence=sentence.filter(ele, ind)=>{
// if(ele/2==0){
// console.log(ele)
// }
// }

//7. Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array.

const evenNum = [12, 85, 74, 663, 96, 5];
const even = evenNum.filter((ele) => ele % 2 == 0);
console.log(even);
//10. Write a function that takes two numbers as inputs and returns their greatest common divisor.
for (let i = 1; i <= 10; i++) {
  console.log(`2 x ${i} = ${11 * i}`);
}
