// alert(`--------`);
//1. If lengths of three sides of a triangle are input through the
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

// 3.  if a five-digit number is input through the keyboard,
// program to reverse the number.

// const num = prompt(`Enter any number`);
// console.log(`Enter Number ${num}`);
function rev(num) {
  return String(num).split("").reverse().join("");
}
// console.log(`Reversed integer ${Number(rev(num))}`);

//4. ‘If lengths of three sides of a triangle are input through the
// keyboard, write a program to find the area of the triangle.

// const first = Number(prompt(`Enter first side `));
// const second = Number(prompt(`Enter second side `));
// const third = Number(prompt(`Enter third side `));
function areaOfTriangle(s1, s2, s3) {
  let area = (s1 + s2 + s3) / 2;
  console.log(`three side of triangle ${area}`);
  const findArea = Math.sqrt(area * (area - s1) * (area - s2) * (area - s3));
  console.log(`Area of triangle----> ${findArea}`);
}
// areaOfTriangle(first, second, third);

// 5.  Write a program to receive Cartesian co-ordinates (x, y) of a point
// and convert them into polar co-ordinates (r, φ- 9)
// **Hint: r=Math.sqrt(x^2+y^2)and φ =Math.tan^-1 (y/X)**
// const firstVal = Number(prompt(`enter first value`));
// const secondVal = Number(prompt(`enter second value`));
function coOrdinates(val1, val2) {
  const r = Math.sqrt(val1 + val1 + val2 * val2);
  console.log(`add two value--->${r}`);
}

/**
 * 5. In a company if an employee is paid as under:
 * If his basic salary is less than Rs. 1500,
 * then HRA=10% of basic salary and DA=90% of basic salary.
 * If his salary is either equal to or above Rs. 1500,
 * then HRA = Rs. 500 and DA = 98% of basic salary.
 * If the employee's salary is input through the keyboard
 *  write a program to find his gross salary.
 */

// const salary = Number(prompt(`Enter basic Salary`));
function findGrossSalary(bs) {
  if (bs < 1500) {
    console.log(`Basic salary is----> ${bs}`);
    const HRA = (10 / 100) * bs;
    console.log(`HRA Salary is ${HRA}`);
    const DA = (90 / 100) * bs;
    console.log(`DA Salary is---->${DA}`);
    gs = HRA + DA + bs;
    console.log(`Gross salary is----->${gs} `);
  } else if (bs >= 1500) {
    console.log(`Basic salary is----> ${bs}`);
    const HRA = 500;
    console.log(`HRA Salary is ${HRA}`);
    const DA = (98 / 100) * bs;
    console.log(`DA Salary is---->${DA}`);
    gs = HRA + DA + bs;
    console.log(`Gross salary is--->${gs} `);
  }
}
// findGrossSalary(salary);
/**
 * 6.if cost price and selling price of an item are input through the keyboard,
 * write a program to determine whether the seller has made profit of incurred loss.
 * Also determine how much profit he made or loss he incurred
 */

// const sellingPrice = Number(prompt(`Enter selling price`));
// const costPrice = Number(prompt(`Enter cost price`));
function profitLoss(sp, cp) {
  if (sp > cp) {
    const profit = sp - cp;
    console.log(`Profit is---->${profit}`);
    oy;
  } else if (sp < cp) {
    const loss = cp - sp;
    console.log(`loss is---->${loss}`);
  } else if (sp == cp) {
    const same = sp - cp;
    console.log(`no Profit no Loss---->${same}`);
  }
}
// profitLoss(sellingPrice, costPrice);
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

// const first = Number(prompt(`enter Ram age`));
// console.log(`Ram Age ${first}`);
// const second = Number(prompt(`enter Shaym age`));
// console.log(`Shyam Age ${second}`);
// const third = Number(prompt(`enter ajay age`));
// console.log(`Ajay Age ${third}`);
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
// ageFind(first, second, third);

/**
 * 12. Write a program to find the absolute value of a number entered through the keyboard
 */

// const val = Number(prompt(`enter any first number`));
// console.log(`First number is ${val}`);
// const val1 = Number(prompt(`enter  any second number`));
// console.log(`Second number is ${val1}`);2

function absolute(num1, num2) {
  const find = Math.abs(num1 * num2);

  console.log(` Absolute value is---> ${find}`);
}
// absolute(val, val1);

// 16. A company insures its drivers in the following cases: -
// _If the driver is married._
// _If the driver is unmarried , male & above 30 years of age._
// _If the driver is unmarried, female & above 25 years of age._
// In all other cases, the driver is not insured. If the marital status, sex and age of the driver are the inputs, write a program to determine whether the driver should be insured or not.

// const gender = prompt(`Driver Gender Male/Female `);
// const mStatus = prompt(`Enter marital Status`);
// const age = prompt(`Enter Driver age`);
function insuredOrNot(g, ms, a) {
  if (g == "male" && ms == "married" && a >= "30") {
    console.log(
      ` The Driver is ${g} he is ${ms} and his age is ${a} should not be insured`
    );
  } else if (g == "male" && ms == "unmarried" && a <= 30) {
    console.log(
      ` The Driver is ${g} he is ${ms} and his age is ${a} should be insured`
    );
  } else if (g == "female" && ms == "married" && a >= 30) {
    console.log(
      ` The Driver is ${g} her marital Status is ${ms} and his age is ${a} should not be insured`
    );
  } else if (g == "female" && ms == "unmarried" && a <= 30) {
    console.log(
      ` The Driver is ${g} her marital Status is ${ms} and his age is ${a} should be insured`
    );
  }
}
// insuredOrNot(gender, mStatus, age);

// 15. The marks obtained by a student in 5 different subjects are input through the keyboard. The student gets a division as per the following rules:

// - Percentage above or equal to 60 - _First division_
// - Percentage between 50 and 59 - _Second division_
// - Percentage between 40 and 49 - _Third division_
// - Percentage less than 40 - _Fail_

/**
 * @description Function to get student data
 * @param {number} englishMarks

 * @param {number} mathMarks
 * @param {number} physicsMarks
 * @param {number} chemistryMarks
 * @param {number} computerMarks
 *
 *
 */
// const english = Number(prompt(`enter english marks`));
// const maths = Number(prompt(`enter Math marks`));
// const physics = Number(prompt(`enter physics marks`));
// const chemistry = Number(prompt(`enter chemistry marks`));
// const computer = Number(prompt(`enter Computer marks`));

function findDivision(eng = "", math = "", phy = "", chem = "", com = "") {
  let obtMarks = eng + math + phy + chem + com;
  console.log(`Obtained  Marks is ---->${obtMarks}`);
  let total = 500;
  console.log(`Total Marks is ---->${total}`);
  let per = (obtMarks / total) * 100;
  console.log(`Percentage--->${per}`);
  if (per >= 60) {
    console.log(`First Division`);
  } else if (per >= 50 && per <= 59) {
    console.log(`Second Division`);
  } else if (per >= 40 && per <= 49) {
    console.log(`Third Division`);
  } else if (per <= 40) {
    console.log(`Fail`);
  } else {
    console.log(`Try next time`);
  }
}
// findDivision(english, maths, physics, chemistry, computer);
const num = 45632;
const num1 = num.split(",");
console.log(num1);
