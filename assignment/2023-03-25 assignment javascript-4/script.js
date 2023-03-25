// alert(`--------`);
// If lengths of three sides of a triangle are input through the
// keyboard, write a program to find the area of the triangle.
// const a = Number(prompt(`Enter First Side`));
// const b = Number(prompt(`Enter Second Side`));
// const c = Number(prompt(`Enter Third Side`));
function findTriangle(x, y, z) {
  const s = (x + y + z) / 2;
  console.log(` Side of Triangle${s}`);
  area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(`Area of triangle is --->${s}`);
}
// findTriangle(a, b, c);

// 2.If a five-digit number is input through the keyboard, write a
// program to calculate the sum of its digits.
// **(Hint: Use the modulus operator ‘%’)**

// const first = Number(prompt(`Enter First Number`));
// const Second = Number(prompt(`Enter Second Number`));
// const Third = Number(prompt(`Enter third Number`));
// const Fourth = Number(prompt(`Enter Forth Number`));
// const fifth = Number(prompt(`Enter Fifth Number`));
function calculate(s1, s2, s3, s4, s5) {
  const s = s1 + s2 + s3 + s4 + s5;
  console.log(`Sum of these Number---> ${s}`);
  const sum = s / 10;
  console.log(`Sum--->${sum}`);
}
// calculate(first, Second, Third, Fourth, fifth);

// 8.Any integer is input through the keyboard. Write a program to find out whether it is an odd number or even number.

// const num = Number(prompt(`Enter any Number and find odd even`));
function findOddEven(n1) {
  if (n1 % 2 === 0) {
    console.log(`This is a even Number`);
  } else if (n1 % 2 === 1) {
    console.log(`This is a odd Number`);
  } else {
    console.log(`Please Enter Valid Number`);
  }
}
// findOddEven(num);

// 9.  Any year is input through the keyboard. 'Write a program to
// determine whether the year is a leap year or not.
// (Hint: Use the % (modulus) operator)

// const leap = Number(prompt(`Enter Any Year`));
function findYear(year) {
  if (year % 4 === 0) {
    console.log(`This is leap year`);
  } else {
    console.log(`this is not a leap year`);
  }
}
// findYear(leap);

// 11. If the ages of Ram, Shyam and Ajay are input through the keyboard, write a program to determine the youngest of the three.
const first = Number(prompt(`enter Ram age`));
console.log(`Ram Age ${first}`);
const second = Number(prompt(`enter Shaym age`));
console.log(`Shyam Age ${second}`);
const third = Number(prompt(`enter ajay age`));
console.log(`Ajay Age ${third}`);
function ageFind(ram = "", shyam = "", ajay = "") {
  if (ram <= shyam) {
    console.log(`Ram is youngest Shaym`);
  } else if (shyam <= ajay) {
    console.log(`Shaym is youngest Ajay`);
  } else if (ajay <= ram) {
    console.log(`Ajay is youngest Ram`);
  } else {
    return 0;
  }
}
ageFind(first, second, third);
