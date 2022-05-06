/*
LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax
*/

const country = 'India';
const continent = 'Asia';
const language = 'Hindi';
const population = 1400;

let description = console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);