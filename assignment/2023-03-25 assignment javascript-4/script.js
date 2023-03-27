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

/**
 * 5. In a company if an employee is paid as under:
 * If his basic salary is less than Rs. 1500,
 * then HRA=10% of basic salary and DA=90% of basic salary.
 * If his salary is either equal to or above Rs. 1500,
 * then HRA = Rs. 500 and DA = 98% of basic salary.
 * If the employee's salary is input through the keyboard
 *  write a program to find his gross salary.
 */

const salary = Number(prompt(`Enter basic Salary`));
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
findGrossSalary(salary);
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
const val = Number(prompt(`enter any first number`));
console.log(`First number is ${val}`);
const val1 = Number(prompt(`enter  any second number`));
console.log(`Second number is ${val1}`);

function absolute(num1, num2) {
  const find = Math.abs(num1 * num2);

  console.log(` Absolute value is---> ${find}`);
}
absolute(val, val1);
