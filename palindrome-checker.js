function palindrome(str) {
  let x = str.replace(/\s/g, '');
  let newStr = x.match(/([^_.,][\w*])\w+/g);
  newStr = newStr.join('').toLowerCase();
  let reverseStr = newStr.split("").reverse().join("");
  
  console.log(`${newStr} : ${reverseStr}`);
  return newStr === reverseStr ? true : false;
}



palindrome("_eye")
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0");
