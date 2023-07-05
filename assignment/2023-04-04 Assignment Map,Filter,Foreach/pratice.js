var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (element, index, array) {
  array[index] = element * element;
  //   console.log(array[index]);
  console.log("hyudgefuh", array);
});
console.log(numbers);
