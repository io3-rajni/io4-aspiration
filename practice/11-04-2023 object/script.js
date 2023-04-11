const obj = {};
obj.state = "punjab";
obj.state2 = "Delhi";
console.log(`---->1`, obj);
const newObj = new Object();
const ass = Object.assign(newObj, { car: "audi" }, { car1: "kia" });
console.log(`--->2`, ass);
const object = Object.create(null);
console.log(`---->3`, object);
const objCreate = {
  name: "Rajni",
  age: 24,
  state: "Punjab",
  city: "Ludhiana",
};
console.log(`--->4`, objCreate);

function rivers(name, state, country) {
  this.riverName = name;
  this.stateName = state;
  this.countryName = country;
}
const first = new rivers("Ganga", "Bangal", "Indian");
const second = new rivers(`Jamuna`, "Delhi", "India");
console.log(`----->5`, first, second);

const studentData = {
  id: 3,
  name: "Clementine Bauch",
  username: "Samantha",
  email: "Nathan@yesenia.net",
};
console.log("14.--->", studentData);

const sonet = {};
// sonet.wheels = 4;
// sonet.doors = 5;
// sonet.color = "white";
console.log("8--->", sonet);
