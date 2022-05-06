/*
LECTURE: Arrow Functions

1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3
*/

const percentageOfWorld3 = population => {
    const pop = (population/7900)*100;
    const round = Math.round(pop*100)/100;  //multiply 1st and then divide the whole by 100 if rounding to 2 decimal places
    return round;
}

console.log(`--------------------Arrow Functions-----------------------`);
console.log(`India owns ${percentageOfWorld3(1400)}% of the world population`);
console.log(`Finland owns ${percentageOfWorld3(6)}% of the world population`);
console.log(`Chile owns ${percentageOfWorld3(19)}% of the world population`);