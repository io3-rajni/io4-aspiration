// alert(`------`);
const month = prompt("enter any month, Ex: Jun");

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

// const month = prompt("enter any month, Ex: Jun");

// function findMonth(month) {
// 1
// jan
//JAN
//Jan
//JAn
//JANuary.
//   console.log("month---", month);

//   let m = month
//     .toUpperCase() // OCTOBER
//     .split("") // ['O','C','T','O','B','E','R',]
//     .filter((m, i) => i <= 2) //['O','C','T']
//     .join(""); //  OCT;
//   console.log("m---", m);

//   switch (m) {
//     case "JAN":
//       return "This is January";
//     case "FEB":
//       return "This is February";
//     case "MAR":
//       return "This is MARCH";
//     case "APR":
//       return "This is APR";
//     case "MAY":
//       return "This is MAY";
//     case "JUN":
//       return "This is JUNE";
//     case "JUL":
//       return "This is July";
//     case "AUG":
//       return "This is August";
//     case "SEP":
//       return "This is SEPTEMBER";
//     case "OCT":
//       return "This is OCTOBER";
//     case "NOV":
//       return "This is November";
//     case "DEC":
//       return "This is December";
//     default:
//       return "Not a valid month";
//   }
// }

// console.log(findMonth(month));
