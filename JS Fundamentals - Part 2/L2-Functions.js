/*
LECTURE: Functions

1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const d1 = describeCountry('Finland', 6, 'Helsinki');
const d2 = describeCountry('India', 1391, 'New Delhi');
const d3 = describeCountry('Chile', 19, 'Santiago');

console.log(d1);
console.log(d2);
console.log(d3);