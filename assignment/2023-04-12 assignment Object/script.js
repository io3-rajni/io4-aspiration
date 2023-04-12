// 1. Write a program to create an empty object without using any object prototype, and insert some property with value and delete one property also from the object.
const obj = {};
obj.name = "Rajni";
obj.surname = "Maurya";
obj.city = "Ludhiana";
obj.State = "Punjab";
delete obj.city;
console.log(obj);
// 2. Write a program to create a object and insert  property in the object which is firstName,lastName, address, pincode.
const object = {
  firstName: "Rajni",
  lastName: "Maurya",
  address: "shimla Puri Ludhiana",
  Pincode: 141016,
};
console.log(object);

// 3. Write a program to take input through the keyword and store their value in the object which is

const objectName = {
  name: "",
  age: "",
  rollNo: "",
};
console.log(Object.assign({ name: "rajni" }, { age: 24 }, { rollNo: 1 }));

// 5. Write a program to check that a property exist in the object or not.
const state = {
  state1: "Delhi",
  state2: "Mumbai",
  state3: "Punjab",
  state4: "Uttar Pradesh",
};
console.log(state.hasOwnProperty("state2"));
// 4. Write a program to prevent the insertion and deletion from the object.
const stateIndia = {
  state1: "Delhi",
  state2: "Mumbai",
  state3: "Punjab",
  state4: "Uttar Pradesh",
};
delete stateIndia.state2;
console.log(Object.freeze(stateIndia));
stateIndia.state5 = "Rajasthan";
console.log(Object.isFrozen(stateIndia));

// 1. Create an object called "car" with the following properties:

// "make"(string);
// "model"(string);
// "year"(number);
// "color"(string);
// "isRunning"(boolean);
//    Then, add the following methods to the "car" object:

//    "start" which changes the "isRunning" property to true
//    "stop" which changes the "isRunning" property to false
//    "getAge" which returns the age of the car (i.e. the difference between the current year and the "year" property)

const carObject = {
  make: "india",
  model: "",
  year: 2000,
  color: "black",
  isRunning: true,
};
