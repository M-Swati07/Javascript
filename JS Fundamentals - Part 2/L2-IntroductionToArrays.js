/*
LECTURE: Introduction to Arrays

1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values
*/

function percentageOfWorld1(population){
    const pop = (population/7900)*100;
    const round = Math.round(pop*100)/100;
    return round;
}

const populations = [1400, 6, 19, 1300];
if(populations.length === 4)
console.log(`True`);
else console.log(`False`);

/*
const percentages = [
    console.log(percentageOfWorld1(populations[0]) + `%`), 
    console.log(percentageOfWorld1(populations[1]) + `%`),
    console.log(percentageOfWorld1(populations[2]) + `%`),
    console.log(percentageOfWorld1(populations[3]) + `%`)
]*/

const percentages = [];
for(let i=0; i<populations.length; i++){
    const per = percentageOfWorld1(populations[i]);
    //console.log(per + `%`);
    percentages.push(per);
}

console.log(percentages);

