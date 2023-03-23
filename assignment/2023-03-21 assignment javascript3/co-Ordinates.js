/*2.
 * Write  program to receive Cartesian co-ordinates (x,y) of a point and convert thm into
 * into polar co-ordinates (r,Φ)
 * 
 * //calculate the value of r
    r = sqrt(x*x + y*y);
    //calculate the value of phi
    //for tan inverse we use atan(value)
    phi = atan(y/x);
 */

const a = Number(prompt(`Enter Number`));
const b = Number(prompt(`Enter Number`));
console.log(`Enter First Number --> ${a}`);
console.log(`Enter second Number --> ${b}`);
function coOrdinates(x = 0, y = 0) {
  //calculate the value of r
  const r = Math.sqrt(x * x + y * y);
  console.log(`Receive Cartesian ${r.toFixed(2)}`);
  //calculate the value of phi
  const phi = Math.tan(x / y);
  console.log(`Calculate Phi Value ${phi}`);
  //convert radian value into degree
  p = 3.141592;
  const degree = phi * (180 / p);
  console.log(`Print Phi value ${degree}`);
}
coOrdinates(a, b);
