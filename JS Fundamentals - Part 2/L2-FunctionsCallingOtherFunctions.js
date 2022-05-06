/*
LECTURE: Functions Calling Other Functions

1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice
*/

function percentageOfWorld1(population){
    const pop = (population/7900)*100;
    const round = Math.round(pop*100)/100;
    return round;
}

function describePopulation(country, population){
    const per = percentageOfWorld1(population);
    const desc = `${country} has ${population} million people, which is about ${per}% of the world`;
    console.log(desc);
}

describePopulation('India', 1400);
describePopulation('Finland', 6);
describePopulation('Chile', 19);