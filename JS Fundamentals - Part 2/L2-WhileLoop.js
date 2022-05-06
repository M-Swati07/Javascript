/*
LECTURE: The while Loop

1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
but this time using a while loop (call the array 'percentages3')

2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

function percentageOfWorld1(population){
    const pop = (population/7900)*100;
    const round = Math.round(pop*100)/100;
    return round;
}

const populations = [1400, 6, 19, 1300];
const percentages3 = [];

let i = 0;
while(i < populations.length){
    const per = percentageOfWorld1(populations[i]);
    percentages3.push(per);
    i++;
}

console.log(percentages3);