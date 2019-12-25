function revString(str) {
  let x = str.split("");
  x = x.reverse();
  let y = x.join("");
  console.log(y);
  return y;
}

revString("hello");