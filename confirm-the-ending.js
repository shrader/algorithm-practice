function confirmEnding(str, target) {
 let targetLength = target.length;
 let arrEnd = str.length -1;
 let wrdEnding = [];
 let strArr = str.split("");
console.log(target + ":" + targetLength);
console.log(strArr);
for (let i = targetLength; i > 0; --i) {
  //console.log("i "+i+":"+strArr[i]);
  wrdEnding.push(strArr[arrEnd]);
  arrEnd--;
}
let x = wrdEnding.reverse().join("");
console.log(x);
return x === target ? true : false;

}

confirmEnding("Bastian", "n");
