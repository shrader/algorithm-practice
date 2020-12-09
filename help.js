/*
let answer = [];
function chooseBestSum(t, k, ls, mem={}, arr=[], sum=0) {
   // console.log(`sum:${sum}`);
  if (ls.length < k) {
    return null;
  }
  if (answer.includes(t)) {
    return
  } 
  if (k === 0) {
    mem[arr.join('')] = sum
    //console.log(answer);
      answer.push(sum);
      return
  }
  for (let num of ls) { 
    let smaller = ls.slice(1); //maybe in the wrong spot?
    //console.log(arr.concat([num]));
    console.log('ls '+ls);
   chooseBestSum(t, k-1, smaller, mem, arr.concat([num]), sum+num);
   }
    //console.log(mem);
  console.log('answer ' + answer);
  console.log('answer legnth ' + answer.length);
  console.log('t: '+ t);
    let best = answer.filter(x => x <=t );
    best = Math.max(...best);
  console.log('best ' + best);
 console.log('obj length/size' +Object.keys(mem).length);
    return best
  
} */

function  chooseBestSum(t, k, ls) {
  if (ls.length < k) {
    return null;
  }
  let answers = [];
  let arr = ls;
  let sum = 0;
  let curr = [];
  //get every unique combination (order doesnt matter for sum a+b+c == c+a+b)
   //by looping through each element, adding the current element to curr until curr.length = k 
   //each time taking an array (by slicing) of possible combinations that it hasn't used yet
   //and going through each of those
  function rabbitHole(nums, townCount, choices ) { //nums holding the numbers to be summed, townCount = how many more numbers we need to add, choices are distances we haven't yet combined with our current combo
    console.log('nums: '+ nums + ' townCount: ' + townCount);
    if (answers.includes(t)) { //if lets say your on the the third element but you have already found the best sum
      return t; //return that because there is no better sum, so no need to continue
    }
    if (townCount <= 0 || nums.count >= k ) {  //this is supposed to check that we dont try to sum more than k numbers, but I still have a bug that will let it have too many numbers inside.
      return;
    } else {
      for (let j = 0; j < choices.length-k; j++) {
        console.log(`j:${j} num:${choices[j]}`);
          nums.push(choices[j]); //add the current number to the nums/curr array to be summed
          if (nums.count <= k) { //if you reached your target # of distances
            let currAnswer = nums.reduce((a,b)=>a+b);  //sum them together by reducing the array
            answers.push(currAnswer); //add the answer to answers array
            console.log(`added ${answers}`);
            break; //break the loop since you have the answer for this iteration
          } else{
              rabbitHole(nums, townCount -1, choices.slice(j+1)); //otherwise call rabbitHole again b/c you have more #'s to add
            }
      }
      return
    }
  }

    rabbitHole(curr, k - curr.length, arr) //call rabbitHole([container for nums to combine], #of nums left to add, [arr of #'s that havent been used yet])
    console.log(answers);
    answers = answers.filter(a => a <= t); //only keep values that are less than or equal to t (target distance)
    return Math.max(...answers); //return the one that is closest to the distance which should be the "Best sum"
}
