/*  If lengths of three sides of a triangle are input through the
 ** keyboard, write a program to find the area of the triangle.
 */
const firstSide = Number(prompt(`Enter First Side`));
const secondSide = Number(prompt(`Enter second Side`));
const thirdSide = Number(prompt(`Enter third Side`));
function areaOfTriangle(side1, side2, side3) {
  const side = (side1 + side2 + side3) / 2;
  console.log(`Three Side Of Triangle ${side}`);
  const area = Math.sqrt(
    side * (side - side1) * (side - side2) * (side - side3)
  );
  console.log(`Area of Triangle Is ${area.toFixed(2)}`);
}
areaOfTriangle(firstSide, secondSide, thirdSide);
