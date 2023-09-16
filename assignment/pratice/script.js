const arr = ["Rajni", "Maurya"];
// const arr2 = arr.value("");
// const arr1 = [];
// const x = arr.length;
const arr1 = [];
let res = [];
const reverseStr = (arr) => {
  const newArr = arr.split("");
  for (let i = newArr?.length; i >= 0; i--) {
    arr1.push(arr[i]);
  }
  res.push(arr1.join(""));
  //   console.log("arr inside", res);
};
console.log("arr1", res);
for (let i = 0; i < arr.length; i++) {
  reverseStr(arr[i]);
}

const dup1 = [1, 5, 7, 9, 6, 63, 5821];
const dup = [4, 6, 692, 923, 92, 26, 1, 8, 7, 5];
const findDup = (arr, arr1) => {
  const duplicate = [...new Set([...dup1, ...dup])];
  console.log(duplicate);
};
findDup();
