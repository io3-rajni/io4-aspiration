/** 
 * @description Function to get student data
   @param {Number} number0
 * @param {Number} number1
 * @param {Number} number2
 * @param {Number} number3
 * @param {Number} number4
 * @param {Number} number5
 * @param {Number} number6
 * @param {Number} number7
 * @param {Number} number8
 * @param {Number} number9
 */
const first = Number(prompt(`Enter First Number`));
const second = Number(prompt(`Enter second Number`));
const third = Number(prompt(`Enter third Number`));
const fourth = Number(prompt(`Enter Fourth Number`));
const fifth = Number(prompt(`Enter Fifth Number`));
const sixth = Number(prompt(`Enter sixth Number`));
const seventh = Number(prompt(`Enter seventh Number`));
const eighth = Number(prompt(`Enter eighth Number`));
const ninth = Number(prompt(`Enter ninth Number`));
const tenth = Number(prompt(`Enter tenth Number`));
function findAverage(
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  num10
) {
  const total =
    num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
  console.log(`Sum Of all this Number---> ${total}`);
  const average = total / 10;
  console.log(`Average Of all 10 Number --> ${average}`);
}
findAverage(
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth
);
