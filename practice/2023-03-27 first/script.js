// alert(`------`);
// const month = prompt("enter any month, Ex: Jun");
const month = "enter any month, Ex: Jun";

function findMonth(month) {
  console.log(`Month ${month}`);
  let m = month
    .toUpperCase()
    .split("")
    .filter((m, i) => i <= 2)
    .join("");
  console.log(`Month ${m}`);
  switch (m) {
    case "JAN":
      return "this is january month";

    case "FEB":
      return "this is february month";
    case "MAR":
      return "this is march month";
    case "APR":
      return "this is april month";
    case "MAY":
      return "this is may month";
    case "JUN":
      return "this is june month";
    case "JUL":
      return "this is july month";
    case "AUG":
      return "this is august month";
    case "SEP":
      return "this is september month";
    case "OCT":
      return "this is october month";
    case "NOV":
      return "this is november month";
    case "DEC":
      return "this is december month";
    default:
      return "somthing went wrong";
  }
}
console.log(findMonth(month));
const arr = ["1", "2", "3", "4", "5"];
// const te = [...arr].sort((a, b) => b - a);
console.log(arr.reverse());
const arr1 = [
  "66.67%",
  "33.33%",
  "66.67%",
  "66.67%",
  "66.67%",
  "100.00%",
  "66.67%",
  "50.00%",
  "100.00%",
  "50.00%",
  "66.67%",
  "33.33%",
  "33.33%",
  "66.67%",
  "100.00%",
  "66.67%",
  "66.67%",
  "33.33%",
  "66.67%",
  "100.00%",
  "0.00%",
  "66.67%",
  "0.00%",
  "66.67%",
  "66.67%",
  "66.67%",
  "33.33%",
  "66.67%",
  "33.33%",
  "66.67%",
  "100.00%",
  "100.00%",
  "66.67%",
  "100.00%",
  "33.33%",
  "33.33%",
  "66.67%",
  "100.00%",
];
console.log(arr1.reverse());
