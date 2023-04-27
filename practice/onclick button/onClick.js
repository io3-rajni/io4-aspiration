console.log("rajni");
const btn = document.createElement("button");
console.log(btn);

document.body.appendChild(btn);
btn.innerHTML = "onclick";
btn.style.height = "50px";
btn.style.width = "100px";
btn.style.color = "white";
btn.style.background = "red";
btn.style.marginLeft = "40%";
btn.style.fontSize = "20px";
const countAdd = document.createElement("div");
console.log(countAdd);
let count = 0;
countAdd.innerHTML = "0";
countAdd.style.height = "50px";
countAdd.style.width = "100px";
countAdd.style.color = "black";
countAdd.style.marginLeft = "42%";
countAdd.style.fontSize = "100px";
document.body.appendChild(countAdd);
btn.addEventListener("click", () => {
  count++;
  countAdd.innerHTML = count;
  console.log("Rajni", count);
});

const btn1 = document.createElement("button");
console.log("btn1", btn1);
document.body.appendChild(btn1);
btn1.innerHTML = "btn1";
btn1.style.marginLeft = "50%";
btn1.style.marginTop = "5%";
btn1.style.background = "green";
btn1.style.height = "50px";
btn1.style.width = "100px";
btn1.style.fontSize = "25px";
btn1.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countAdd.innerHTML = count;
  }
  console.log("Ashu", count);
});
const btn2 = document.getElementsByTagName("button");
const printName = document.getElementById("access");

console.log(btn2[0].innerHTML);

btn2[0].addEventListener("click", () => {
  printName.innerHTML = Date();
});

let arr = [];
const clickFunction = () => {
  count = count + 2;
  arr.push(count);
  countAdd.innerHTML = arr.length;
  console.log("first", arr);
};
