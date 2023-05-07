const number = document.getElementById("calc-operation");
let value = "";

const getSeven = () => {
  value = value + "7";
  console.log((number.innerHTML = value));
};
