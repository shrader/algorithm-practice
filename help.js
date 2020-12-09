/* 
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. 
John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as 
parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and
ls (list of distances, all distances are positive or null integers and this list has at least one element). 
The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null,
None, Nothing, depending on the language.

With C++, C, Rust, Swift, Go, Kotlin, Dart return -1.

Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> null

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

Note:
don't modify the input list ls


*/

/* 

Attempt 1


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
   //get every unique combination (order doesnt matter for sum a+b+c == c+a+b)
   //by looping through each element, adding the current element to curr until curr.length = k 
   //each time taking an array (by slicing) of possible combinations that it hasn't used yet
   //and going through each of those
  function rabbitHole(nums, townCount, choices ) { //nums holding the numbers to be summed, townCount = how many more numbers we need to add, choices are distances we haven't yet combined with our current combo
    console.log('nums: '+ nums + ' townCount: ' + townCount);
    if (townCount <= 0 || nums.count >= k ) { //this is supposed to check that we dont try to sum more than k numbers, but I still have a bug that will let it have too many numbers inside.
      return;
    } else {
      for (let j = 0; j < choices.length-k; j++) { 
        console.log(`j:${j} num:${choices[j]}`);
          nums.push(choices[j]); //add the current number to the nums/curr array to be summed
          if (nums.count <= k) { //if you reached your target # of distances
            let currAnswer = nums.reduce((a,b)=>a+b); //sum them together by reducing the array
            answers.push(currAnswer); //add the answer to answers array
            console.log(`added ${answers}`);
            break; //break the loop since you have the answer for this iteration
          }
          rabbitHole(nums, townCount -1, choices.slice(j+1)); //otherwise call rabbitHole again b/c you have more #'s to add
      }
      return
    }
  }
  for (let i = 0; i < arr.length-k; i++){ // loop through the initial full array
    if (answers.includes(t)) { //if lets say your on the the third element but you have already found the best sum
      return t; //return that because there is no better sum, so no need to continue
    }
    let curr = [arr[i]]; //make container to hold numbers to be combined, add the curent element to start
    rabbitHole(curr, k - curr.length, arr.slice(i+1) ) //call rabbitHole([container for nums to combine], #of nums left to add, [arr of #'s that havent been used yet])
      
  }
    console.log(answers);
    answers = answers.filter(a => a <= t); //only keep values that are less than or equal to t (target distance)
    return Math.max(...answers); //return the one that is closest to the distance which should be the "Best sum"
}
