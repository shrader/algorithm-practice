/*  Code Wars Question:

Description
You organize a sports league in a round-robin-system. Each team meets all other teams. In your league a win gives a team 2 points, a draw gives both teams 1 point. After some games you have to compute the order of the teams in your league. You use the following criteria to arrange the teams:

Points
Scoring differential (the difference between goals scored and those conceded)
Goals scored
First you sort the teams by their points. If two or more teams reached the same number of points, the second criteria comes into play and so on. Finally, if all criteria are the same, the teams share a place.

Input
number: Number of teams in your league.
games: An array of arrays. Each item represents a played game with an array of four elements [TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
Output
positions: An array of positions. The i-th item should be the position of the i-th team in your league.
Example
number = 6
games = [[0, 5, 2, 2],   // Team 0 - Team 5 => 2:2
         [1, 4, 0, 2],   // Team 1 - Team 4 => 0:2
         [2, 3, 1, 2],   // Team 2 - Team 3 => 1:2
         [1, 5, 2, 2],   // Team 1 - Team 5 => 2:2
         [2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
         [3, 4, 1, 1],   // Team 3 - Team 4 => 1:1
         [2, 5, 0, 2],   // Team 2 - Team 5 => 0:2
         [3, 1, 1, 1],   // Team 3 - Team 1 => 1:1
         [4, 0, 2, 0]]   // Team 4 - Team 0 => 2:0
You may compute the following table:

Rank    Team	For : Against	GD	Points
1.	    Team 4	  5 : 1	        +4	    5
2.	    Team 5	  6 : 4	        +2            4
3.  	    Team 3          4 : 3	        +1	    4
4.	    Team 0	  3 : 5          -2	    2
4.	    Team 1	  3 : 5	        -2	    2
6.	    Team 2	  2 : 5          -3	    1
Team 5 and Team 3 reached the same number of points. But since Team 5 got a better scoring differential, it ranks better than Team 3. All values of Team 0 and Team 1 are the same, so these teams share the fourth place.

In this example you have to return the array [4, 4, 6, 3, 1, 2].

*/


function computeRanks(number, games) {
  let Teams = [];
  //make an object for each team
  for (let i=0 ; i<number; i++) {
      Teams[i] = {teamNum : i,
       points : 0,
       GD : 0,
       goals : 0,
       rank : 0};
        };
       
       //go through each game and update data
        games.forEach(game => {
          const teamA = game[0];
          const teamB = game[1];
          const goalA = game[2];
          const goalB = game[3];
          let teamAObj = Teams[teamA];
          let teamBObj = Teams[teamB];
          teamAObj.goals += goalA;
          teamBObj.goals += goalB;
        
        switch (true) {
          case (goalA === goalB):
            teamAObj.points += 1;
            teamBObj.points += 1;
          break;
          case (goalA > goalB):
            teamAObj.points += 2;
            let goalDif1 = goalA - goalB;
            teamAObj.GD += goalDif1;
            teamBObj.GD += -Math.abs(goalDif1);
          break;
          case (goalA < goalB):
            teamBObj.points += 2;
            let goalDif2 = goalB - goalA;
            teamBObj.GD += goalDif2;
            teamAObj.GD += -Math.abs(goalDif2);
          break;
        }
  
  });
  
//console.log(Teams);

function mergeSort(arr, prop){
 let len = arr.length;
 if(len <2)
    return arr;
 let mid = Math.floor(len/2),
     left = arr.slice(0,mid),
     right =arr.slice(mid);
 //send left and right to the mergeSort to break it down into pieces
 //then merge those
 return merge(mergeSort(left, prop),mergeSort(right, prop), prop);
}
      

function merge(left, right, prop){
let result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;
while(l < lLen && r < rLen){
   if(left[l][prop] < right[r][prop]){
     result.push(left[l++]);
   }
   else{
     result.push(right[r++]);
  }
}  
//remaining part needs to be addred to the result
return result.concat(left.slice(l)).concat(right.slice(r));
}

const rankArr = mergeSort(Teams,"points").reverse();

//everything above works ------------------------------------------------------------



console.log("rank array :");
console.log(rankArr);
console.log("--------------------------------");

let pointsArr = [];
let gdArr = [];
let goalArr = [];

rankArr.forEach(obj => {
pointsArr.push(obj.points);
gdArr.push(obj.GD);
goalArr.push(obj.goals);
});


//seperte for Each statments bc I need the arrays to be done before I can do this
rankArr.forEach(obj => {
let first = pointsArr.indexOf(obj.points);
let last = pointsArr.lastIndexOf(obj.points);
      
      //bad thing is this gets repeated for all tie values even if theyve already been sorted - refactor later
if (first !== last) {
      //Get all teams that are tied for this # points
  const filter1 = rankArr.filter(filterObj => filterObj.points === obj.points);
      //sort these teams tied on points by GD with mergeSort
  const rankGD = mergeSort(filter1,"GD").reverse();
      //splice these sorted teams with the same unsorted teams
      //get only the GD values that match this # of points
  let thisGDArr = gdArr.slice(first,(last+1));
  let firstGD = thisGDArr.indexOf(obj.GD);
  let lastGD = thisGDArr.lastIndexOf(obj.GD);
   if (firstGD !== lastGD) {
         //remember to sort within the filter1(Array)
    const filter2 = filter1.filter(GDObj => obj.GD === GDObj.GD);
    const rankGoals = mergeSort(filter2,"goals").reverse();
    Array.prototype.splice.apply(filter1, [firstGD,filter2.length].concat(rankGoals));  
   }
   Array.prototype.splice.apply(rankArr, [first,filter1.length].concat(rankGD));
  console.log("...............,,,,,,,,,,,,,,,,,,,...............,,,,,,,,,,,,");
 } 
});

//first pass ranking
for (let i = 0; i < rankArr.length; i++) {
rankArr[i].rank = i + 1;
}

//fix tie rankings
for (let i = 1; i < rankArr.length; i++) {
const prev = rankArr[i - 1];
const next = rankArr[i];
const betterRank = Math.min(prev.rank, next.rank);
const worseRank = Math.max(prev.rank, next.rank);
const pointTie = (prev.points === next.points);
const gdTie = (prev.GD === next.GD);
const goalTie = (prev.goals === next.goals);
switch(true) {
  case (prev.points > next.points):
    prev.rank = betterRank;
    next.rank = worseRank;
    break;
  case (prev.points < next.points):
    prev.rank = worseRank;
    next.rank = betterRank;
    break;
  case (pointTie &&(prev.GD > next.GD)):
    prev.rank = betterRank;
    next.rank = worseRank;
    break;
  case (pointTie &&(prev.GD < next.GD)):
    prev.rank = worseRank;
    next.rank = betterRank;
    break;
  case (pointTie && gdTie &&(prev.goals > next.goals)):
    prev.rank = betterRank;
    next.rank = worseRank;
    break;
  case (pointTie && gdTie &&(prev.goals < next.goals)):
    prev.rank = worseRank;
    next.rank = betterRank;
    break;
  case (pointTie && gdTie && goalTie):
    prev.rank = betterRank;
    next.rank = betterRank;
    break;
}

}





//take the team number and the rank and fill out the return array
let returnArr = [];
for (let i = 0; i < rankArr.length; i++) {
returnArr[rankArr[i].teamNum] = rankArr[i].rank;
}
console.log(rankArr);
return returnArr;

}
