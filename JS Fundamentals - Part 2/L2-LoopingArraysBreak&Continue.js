/*
LECTURE: Looping Arrays, Breaking and Continuing

1. Let's bring back the 'populations' array from a previous assignment

2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier

3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
*/

function percentageOfWorld1(population){
    const pop = (population/7900)*100;
    const round = Math.round(pop*100)/100;
    return round;
}

const populations = [1400, 6, 19, 1300];
const percentages2 = [];

for(let i = 0; i < populations.length; i++){
    const per = percentageOfWorld1(populations[i])
    console.log(per + `%`);
    percentages2.push(per);
}
console.log(percentages2);