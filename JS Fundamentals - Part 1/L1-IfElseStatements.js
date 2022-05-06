/*
LECTURE: Taking Decisions: if / else Statements

1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population) //that means portugal's population is 10 million

2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
*/

const country = 'India';
const continent = 'Asia';
const language = 'Hindi';
let population = 1400;

if(population > 33)
console.log(`${country}'s population is above average`);
else
console.log(`${country}'s population is ${33 - population} million below average`);
