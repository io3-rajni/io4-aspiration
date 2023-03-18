//2. Write a function to enter your you favorite avengers and concat with string
//Input: entered Ironman from keyboard
//Output: My favorite avenger is IronMan. I am dying heart fan of IronMan
const first1 = prompt(`Enter Your First Cartoon`);
const second2 = prompt(`Enter Your Second Cartoon`);
const third3 = prompt(`Enter Your third Cartoon`);

function cartoon({ first, second, third }) {
  console.log(
    `My favorite Cartoon are ${first},${second}and${third} I,m daying heart fan of doremon`
  );
}

cartoon({ first1, second2, third3 });
