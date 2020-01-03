function convertToRoman(num) {
    let ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    let tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let hundos = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
   let thousands = ["","M","MM","MMM"];
   let places = num.toString().length;
   let split = num.toString().split("");
   let strArr = [];
   switch (places) {
       case 1:
           strArr.push(ones[split[0]]);
           return strArr.join("");
       break;
       case 2:
           strArr.push(tens[split[0]]);
           strArr.push(ones[split[1]]);
           return strArr.join("");
   
       break;
       case 3:
           strArr.push(hundos[split[0]]);
           strArr.push(tens[split[1]]);
           strArr.push(ones[split[2]]);
           return strArr.join("");
   
       break;
       case 4:
           strArr.push(thousands[split[0]]);
           strArr.push(hundos[split[1]]);
           strArr.push(tens[split[2]]);
           strArr.push(ones[split[3]]);
           return strArr.join("");
       break;
   }
   console.log(places);
   console.log(split);
   }
   
   //convertToRoman(36);
   convertToRoman(3699);