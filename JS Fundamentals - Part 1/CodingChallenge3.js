/*Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

=============================================================================================*/

//Data 1 :
//let d1 = 96; let d2 = 108; let d3 = 89;   //avg : 97.66
//let k1 = 88; let k2 = 91; let k3 = 110;   //avg : 96.33

//Bonus 1 :
//let d1 = 97; let d2 = 112; let d3 = 101;    //avg : 103.33
//let k1 = 109; let k2 = 95; let k3 = 123;    //avg : 109

//Bonus 2 :
let d1 = 97; let d2 = 112; let d3 = 101;    //avg : 103.33
let k1 = 109; let k2 = 95; let k3 = 106;    //avg : 103.33

const avgD = (d1+d2+d3)/3;
const avgK = (k1+k2+k3)/3;
console.log(avgD, avgK);

if(avgD === avgK && avgD>=100 & avgK>=100)
console.log("Its a draw");
else if(avgD > avgK && avgD>=100)
console.log("Dolphins Win");
else if(avgK > avgD && avgK>=100)
console.log("Koalas Win");
else
console.log("No Team Wins");