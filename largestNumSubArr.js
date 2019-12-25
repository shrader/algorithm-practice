function largestNumSubArr(arr) {
  // You can do this!
  let newArr = [];
  
  for (let x of arr) {
     let y = Number.NEGATIVE_INFINITY;
     for (let i = 0; i < x.length; i++) {
    if (x[i] > y) {
      y = x[i];
      console.log("x:" + x + "i:" + i + "y:" + y);
      }
     }
     newArr.push(y);
     console.log("pushed " + y);
  }
  return newArr;
}