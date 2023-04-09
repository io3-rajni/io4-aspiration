// 2. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
const arr = "I am a string";
console.log(Array.isArray(arr)); // output- false
const arr1 = [1, 2, 4, 0, "array"];
console.log(Array.isArray([arr1])); // output- true

// 3. Find the length of following
const first = [5, 12, 8, 130, 44];
const second = ["g", "e", "e", "k", "s"];
const third = ["shoes", "shirts", "socks", "sweaters"];
const fourth = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const fifth = ["Monday", 90, false, undefined, "90", "g", "CAT"];
console.log(
  "Find Length-->",
  "First",
  first.length,
  "Second",
  second.length,
  "Third",
  third.length,
  "Fourth",
  fourth.length
);

// 4. Find the element at ( use at, [ ])
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; //at 3rd positions;
const thing = ["shoes", "shirts", "socks", "sweaters"]; // at 4th positions
const array = ["Monday", 90, false, undefined, "90", "g", "CAT"]; //at 5th positions
const letter = ["g", "e", "e", "k", "s"]; //at 10th position
console.log(week.at(3), thing.at(4), array.at(5), letter.at(10));

// 5. Add two array (concat)
const array1 = ["Sunday", "Monday"];
const array2 = ["Friday", "Saturday"];
const array3 = ["Tuesday", "Wednesday", "Thursday"];
const concat1 = array1.concat(array2, array3);
console.log("Concat Array", concat1);
const array4 = [5, 12, 8, 130, 44];
const array5 = ["g", "e", "e", "k", "s"];
const concat2 = array4.concat(array5);
console.log("Concat2 ", concat2);

// 6. Sort following arrays.
const one = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const two = ["z", "g", "e", "e", "k", "s"];
const three = [15, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const four = ["shoes", "shirts", "socks", "sweaters"];
const five = ["Monday", 90, false, undefined, "90", "g", "CAT"];
const sort = one.sort();
const sort1 = two.sort();
const sort2 = three.sort();
const sort3 = four.sort();
const sort4 = five.sort();

console.log("Sort--->", sort, sort1, sort2, sort3, sort4);

// 7. Reverse the following arrays.
const rev= [210, 'Sunday', 702, true, null, '90', 'vinay', 'CAT']
b. =[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
c. =['z','i','a','x','k','s']
d. =[115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44]
e. =['shoes', 'shirts', 'socks', 'sweaters']
