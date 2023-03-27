const day = prompt(`enter day`);

console.log(`enter day ${d}`);

// (.toUppercase())
// .split("")
// //   .filter((d, i) => i <= 2)
// .join("");
function dayOfWeek(d) {
  switch (d) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    default:
      return "enter valid day";
  }
}
console.log(dayOfWeek(day));
