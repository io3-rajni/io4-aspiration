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
const rev = [210, "Sunday", 702, true, null, "90", "vinay", "CAT"];
const rev1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const rev3 = ["z", "i", "a", "x", "k", "s"];
const rev4 = [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const rev5 = ["shoes", "shirts", "socks", "sweaters"];
const res = rev.reverse();
const res1 = rev.reverse();
const res2 = rev.reverse();
const res3 = rev.reverse();
const res4 = rev.reverse();
const res5 = rev.reverse();

console.log("Reverse Method-->", res, res2, res3, res4, res5);

// 8. Find the index in the following arrays.
const first1 = [210, "Sunday", 702, true, null, "90", "vinay", "CAT"]; //find index of (90, true, ‘Ajay’)
console.log("First Find Index-->", first1.indexOf(true));
console.log("First Find Index-->", first1.indexOf("90"));
console.log("First Find Index-->", first1.indexOf("ajay"));

let second2 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Second Find Index-->", second2.indexOf("Tuesday"));
console.log("Second Find Index-->", second2.indexOf("Thursday"));
console.log("Second Find Index-->", second2.indexOf("Sunday"));
console.log("Second Find Index-->", second2.indexOf("monday"));

// find
// index of (‘Thursday’, ‘TuesDay, ‘sunday’, Monday)
let third3 = ["z", "i", "a", "x", "k", "s"]; //find index of (‘k’, ‘t’, ‘a’)
console.log("third Find Index-->", third3.indexOf("k"));
console.log("third Find Index-->", third3.indexOf("t"));
console.log("third Find Index-->", third3.indexOf("a"));

let fourth4 = [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44]; //find index of (90, -52,0.56)
console.log("Fourth Find Index-->", fourth4.indexOf("90"));
console.log("Fourth Find Index-->", fourth4.indexOf(-52));
console.log("Fourth Find Index-->", fourth4.indexOf(0.56));

let fifth5 = ["shoes", "shirts", "socks", "sweaters"]; //find index of(‘shoes’,’socks’,‘Sweaters’)
console.log(
  "Fifth Find Index-->",
  fifth5.indexOf("shoes"),
  fourth4.indexOf(0.56)
);
console.log("Fifth Find Index-->", fifth5.indexOf("socks"));
console.log("Fifth Find Index-->", fifth5.indexOf("Sweaters"));

// 9. Find the last index in the following arrays.
const lastIdx = [210, "Sunday", 702, true, null, "90", "vinay", "CAT"]; //find last index of (‘vinay’, null,‘Ajay’

const lastIdx1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; //findlast index of (‘Tuesday’, ‘TuesDay, ‘sunday’, Wednesday)
const lastIdx2 = ["z", "i", "a", "x", "k", "s"]; //find last index of (‘k’, ‘t’, ‘z’)
const lastIdx3 = [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44]; //find last index of (115,54,0.56, 81)
const lastIdx4 = ["shoes", "shirts", "socks", "sweaters"]; //find index of (‘shoes,socks’,‘Sweaters’)
console.log(
  `find last Index-->`,
  lastIdx.lastIndexOf("vinay"),
  lastIdx1.lastIndexOf("Tuesday"),
  lastIdx2.lastIndexOf("k"),
  lastIdx3.lastIndexOf(115),
  lastIdx4.lastIndexOf("shoes")
);
console.log(
  `find last Index-->`,
  lastIdx.lastIndexOf(null),
  lastIdx1.lastIndexOf("TuesDay"),
  lastIdx2.lastIndexOf("t"),
  `--->3`,
  lastIdx3.lastIndexOf(54),
  `----->4`,
  lastIdx4.lastIndexOf("sweaters")
);
console.log(
  `find last Index-->`,
  lastIdx.lastIndexOf("Ajay"),
  lastIdx1.lastIndexOf("sunday"),
  lastIdx2.lastIndexOf(0.56)
);

console.log(
  `find last Index-->`,
  lastIdx1.lastIndexOf("Wednesday"),
  lastIdx3.lastIndexOf(81)
);

//10. Find the index in the arrays.
// If element > 11
// b. If element * 10 +5 >= 100
// c. If element is less than 0
// d. If element is equal to 8
// e. If element is equal to 11 OR 12
const findInd = [314, 115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const newVar = [];
// console.log(findInd.push(newVar));
const findIndex = (array) => {
  array.map((e, i) => {
    switch (e) {
      case e > 11:
        newVar = e;
        //  newVar;
        return newVar.push(e);
        break;
      default:
        return 0;
    }
  });
};
console.log(newVar);
console.log(findIndex(findInd));

// 11. Please verify if following includes in array
const includes = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(includes.includes("Funday", "Sunday", "Wednesday"));
// (‘Sunday’, ‘wednesday’, ‘Funday’)
const includes1 = [101, -52, -10, 0.56, 5]; // if includes → (5, 8, ‘10’, 100+1, 10-5)

const isIncludes = (array, checkInclude) => {
  console.log(`${checkInclude} is include`, array.includes(checkInclude));
};
isIncludes(includes, "Sunday");
isIncludes(includes, "Funday");
isIncludes(includes, "Wednesday");
isIncludes(includes1, 5);
isIncludes(includes1, 8);
isIncludes(includes1, "10");
isIncludes(includes1, 100 + 1);
isIncludes(includes1, 10 - 5);
