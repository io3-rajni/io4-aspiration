document.write(`1. First Star Pattern`);
document.write(`<br/>`);
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`* &nbsp`);
  }
  document.write(`<br/> `);
}
document.write(`2. Second Star Pattern`);
document.write(`<br/>`);

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write(`* &nbsp`);
  }
  document.write(`<br/> `);
}
document.write(`3. third Star Pattern`);
document.write(`<br/>`);
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`* &nbsp`);
  }
  document.write(`<br/>`);
}
for (let k = 1; k <= 4; k++) {
  for (let l = 4; l >= k; l--) {
    document.write(`* &nbsp`);
  }
  document.write(`<br/>`);
}
document.write(`4. Fourth Star Pattern`);
document.write(`<br/>`);
for (let i = 1; i <= 5; i++) {
  for (let j = 4; j >= i; j--) {
    document.write(`&nbsp &nbsp `);
  }
  for (let k = 1; k <= i; k++) {
    document.write(`* &nbsp`);
  }
  document.write(`<br/>`);
}

document.write(`5. Fifth Star Pattern`);
document.write(`<br/>`);

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`&nbsp &nbsp `);
  }
  for (let k = 5; k >= i; k--) {
    document.write(`* &nbsp`);
  }
  document.write(`<br/>`);
}

document.write(`6. Sixth Star Pattern`);
document.write(`<br/>`);
for (let i = 1; i <= 5; i++) {
  for (let j = 4; j >= i; j--) {
    document.write(`&nbsp &nbsp &nbsp`);
  }
  for (let m = 1; m <= i; m++) {
    document.write(`* &nbsp&nbsp`);
  }
  document.write(`<br/>`);
}
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`&nbsp &nbsp `);
  }
  for (let k = 5; k >= i; k--) {
    document.write(`* &nbsp`);
  }
  document.write(`<br/>`);
}
document.write(`7. Seventh Star Pattern`);
document.write(`<br/>`);
for (let i = 1; i <= 5; i++) {
  for (let j = 4; j >= i; j--) {
    document.write(`&nbsp &nbsp`);
  }
  for (let k = 1; k <= i; k++) {
    document.write(`* &nbsp &nbsp`);
  }
  document.write(`<br/>`);
}
document.write(`8. eight Star Pattern`);
document.write(`<br/>`);
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`&nbsp &nbsp`);
  }
  for (let k = 5; k >= i; k--) {
    document.write(`* &nbsp &nbsp`);
  }
  document.write(`<br/>`);
}

document.write(`9. Ninth Star Pattern`);
document.write(`<br/>`);
for (let i = 1; i <= 5; i++) {
  for (let j = 4; j >= i; j--) {
    document.write(` &nbsp &nbsp`);
  }
  for (let k = 1; k <= i; k++) {
    document.write(` * &nbsp &nbsp`);
  }
  document.write(`<br/>`);
}
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`&nbsp &nbsp`);
  }
  for (let k = 4; k >= i; k--) {
    document.write(`*&nbsp &nbsp &nbsp`);
  }
  document.write(`<br/>`);
}
