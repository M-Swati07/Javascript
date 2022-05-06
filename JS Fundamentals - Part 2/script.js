/*
'use strict';   //avoids accidental errors in the code - 1. forbids to do certain things and 2. shows visible errors

let hasDriversLincense = false;
const passTest = true;

if(passTest) hasDriversLincense = true;  //since here the s is not there in Drivers so it will throw error in console(done by strict) so then u can notice the mistake and correct it
if(hasDriversLincense) console.log(`I can drive 🚗`);   //after putting the correct variable name it will print in the console

//variable holds a value but a function holds 1 or more lines of code
//functions - reusing the code 
function logger(){
    console.log("My name is Swati");
}

logger();   //invoking/running/calling the function
logger();
logger();
logger();   //it will print 4 times in console

function fruitProcessor(apples, mangoes){
    console.log(apples, mangoes);
    const juice = `Juice with ${apples} apples and ${mangoes} mangoes.`;
    return juice;
}

console.log(fruitProcessor(3,4));
console.log(fruitProcessor(10,7));

//Function Declaration - can be called before declaration
function calAge1(birthYear){
    return 2022 - birthYear;
}

//Function Expression - function without a variable, will throw error if called before decla.ration
const calAge2 = function (birthYear){
    return 2022 - birthYear;
}

console.log(calAge1(1998), calAge2(1998));


//Arrow function - no return usage and no parenthesis if its one-liner code
const calAge3 = birthYear => 2022 - birthYear;
console.log(calAge3(1998)); 

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} will retire in ${retirement} years`;
}

console.log(yearUntilRetirement(1998, 'Swati'));
console.log(yearUntilRetirement(2005, 'Monika'));

//Functions Calling Other Functions
function cutFruits(fruit){
    return fruit * 4;
}

function fruitProcessor1(apples, mangoes){
    const applePiece = cutFruits(apples);
    const mangoPiece = cutFruits(mangoes);
    return `Juice with ${applePiece} piece of apples and ${mangoPiece} piece of mangoes`;
}

console.log(fruitProcessor1(3,4));

//Reviewing Functions
function calAge (birthYear1){
    return 2022 - birthYear1;
}

const yearUntilRetirement1 = function(birthYear1, firstName1){
    const age = calAge(birthYear1);
    const retirementLeft = 60 - age;

    if(retirementLeft > 0){
        console.log(`${firstName1} will retire in ${retirementLeft} years`);
        return retirementLeft;  //once return is executed it will exit from here and will not print the console.log, so in order to print it write it before the return statement
    }else{
        console.log(`Dude you already retired`);//to make the line go up - Alt + up arrow, down - Alt + down arrow 
        return -1;
    }
}

console.log(yearUntilRetirement1(1998, 'Swati'));
console.log(yearUntilRetirement1(1960, 'Mike'));


====================================================================================================*/

//ARRAYS 
/*
const friend1 = "Dimple";
const friend2 = "Sweety";
const friend3 = "Nibedita";

const friends = ["Dimple", "Sweety", "Nibedita"];
console.log(friends);

const years = new Array(1990, 1991, 1992);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Sam';
console.log(friends);   //why a const value got changed - only primitive values(are immutable) cannot be changed but array is not primitive so its mutable(can be changed)
//friends = ['Tom', 'Nick']---can't change the entire array at once

const swati = ['Swati', 'Murty', 24, 'Programmer', friends]
console.log(swati)

//Exercise
function age(year){
    return 2022 - year;
}

const year = [1990, 1991, 1992]

console.log(age(year[0]), age(year[1]), age(year[year.length - 1]));

const ages = [age(year[0]), age(year[1]), age(year[year.length - 1])]
console.log(ages);

//Basic Array Methods
const state = ['Jharkhand', 'Orissa', 'Karnataka'];

//add elements - push : at the end
state.push('Tamil Nadu');
console.log(state);

//unshift : at the front
state.unshift('West Bengal');
console.log(state);
console.log(state.length);

//remove elements
state.pop();    //pop : removes last element
console.log(state);

state.shift();  //shift : removes first element
console.log(state);
const poppedElement = state.pop();
console.log(poppedElement);
console.log(state);

console.log(state.indexOf('Orissa'));
console.log(state.indexOf('Karnataka'));    //will return -1 as not present

state.push(20);
console.log(state.includes('Orissa'));  //includes : will return true/false if value is present/not
console.log(state.includes('Karnataka'));
console.log(state.includes('20'));  //will return false as includes doesn't perform type coercion
console.log(state.includes(20)); //it will give true now

if(state.includes('Jharkhand')){
    console.log(`You have a state called Jharkhand`);
}

===========================================================================================================*/

//Objects

//arrays are ordered and that's how elements are accessed
//use arrays for ordered data
/*
const swatiArray = ['Swati', 'Murty', 2022-1998, 'Programmer', ['Ross', 'Joey', 'Chandler']];

//in objects the order of the values are not ordered, key value pairs
//data can accessed using the key 
//use objects for un-structured data
const swati = {
    firstName : 'Swati',
    lastName : 'Murty',
    age : 2022 - 1998,
    job : 'Programmer',
    friends : ['Ross', 'Joey', 'Chandler']
};

console.log(swati);

//how to get data from the objects
console.log(swati.lastName);
console.log(swati['lastName']); //can be used to store an expression see below. Can only work in brackets not dots

const nameKey = 'Name';
console.log(swati['first' + nameKey]);
console.log(swati['last' + nameKey]);


const interestedIn = prompt(`What do u want to know about swati. Choose from firstname, lastname, age, job and friends`);
console.log(interestedIn);  //it will print whatever u typed in prompt
console.log(swati.interestedIn);    //will give un-defined as u are trying to access something that is not present in the object 
console.log(swati[interestedIn]);   //when u use [] instead of . as previous line it will replace the interestedIn with the value u entered in prompt and swati[job] -> Programmer

//undefined is thrown whenever it tries to access a property that doesn't exist
if(swati[interestedIn])
console.log(swati[interestedIn]);
else
console.log(`Wrong Input!! Choose from firstname, lastname, age, job and friends`);

swati.location = 'Jamshedpur';
swati['twitter'] = '@swati';
console.log(swati);

//Challenge
//"Swati has 3 friends and her best friend is called Joey"
console.log(`${swati.firstName} has ${swati.friends.length} friends and her best friend is called ${swati.friends[1]}`);
*/

//Object Methods
const swati_1 = {
    firstName : 'Swati',
    lastName : 'Murty',
    birthYear : 1998,
    job : 'Programmer',
    friends : ['Ross', 'Joey', 'Chandler'],
    hasDriversLicense : true,

    //1 way
    /*calcAge : function(birthYear){
        return 2022 - birthYear;
    } */  //calcAge here is a property of the 'swati_1' object

    //you can't write like -> function calcAge(birthYear){ return 2022 - birthYear; } , this will be function declaration and will throw an error as its not a property of an object


    //2 way
    //since above we have birthYear property and still passing 1998 in calcAge in line 257 and 258
    //so this can be omitted as its repitive and we can use 'this' property to refer birthYear that is already defined
    /*calcAge : function(){
        console.log(this);
        return 2022 - this.birthYear;
    }*/


    //3 way
    calcAge : function(){
        this.age = 2022 - this.birthYear;   //age is another property here where we are storing the value and can later access it
        return this.age;
    },  //put comma after ending this otherwise it will throw error in getSummary


    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()}-year old 
        ${swati_1.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} 
        driver's license.`
    }

};

//referencing to line 224 to 226
//console.log(swati_1.calcAge(1998)); //using (.) dot
//console.log(swati_1['calcAge'](1998));  //using [] bracket

//referencing to line 232 to 235
console.log(swati_1.calcAge());

//referencing to line 242 to 245
console.log(swati_1.age);



//Challenge
//"Swati is a 24-year old Programmer, and she has a driver's license"
//MY-WAY
if(swati_1.hasDriversLicense){
    console.log(`${swati_1.firstName} is a ${swati_1.age}-year old 
            ${swati_1.job}, and she has a driver's license`);
}else{
    console.log(`${swati_1.firstName} is a ${swati_1.age}-year old 
            ${swati_1.job}, and she has no driver's license`);
}

//ANOTHER-WAY
console.log(swati_1.getSummary());  //go to line 248

//arrays also are special kind of objects in a way and they also have methods like push, pop, shift, unshift
//here we created built-in methods on objects

/*=============================================================================================================================================*/

//FOR LOOP
for(let i = 7; i <= 10; i++){
    console.log(`Lifting weights repetition ${i}`);
}

const SamArray = ['Sam', 'Antonio', 2022-1990, 'Doctor', ['Mike', 'Molly', 'Pete'], false];

const types = [];

for(let i = 0; i < SamArray.length; i++){
    //Reading from Sam array
    console.log(SamArray[i], typeof SamArray[i]);

    //filling types array
    types[i] = typeof SamArray[i];  //1st Way
    types.push(typeof SamArray[i]); //2nd Way
}

console.log(types);


//Example
const years = [1990, 1991, 1992, 1993]
const ages = []

for(let i=0; i < years.length; i++){
    ages.push(2022 - years[i]);
}
console.log(ages);


//Continue and Break
console.log('-----------ONLY STRINGS----------')
for(let i = 0; i < SamArray.length; i++){
    if(typeof SamArray[i] != 'string') continue;    //will continue even after it gets the value
    console.log(SamArray[i], typeof SamArray[i]);
}


console.log('-----------BREAK WHEN NUMBER COMES----------')
for(let i = 0; i < SamArray.length; i++){
    if(typeof SamArray[i] == 'number') break;   //will stop once it gets the value
    console.log(SamArray[i], typeof SamArray[i]);
}


//Looping backwards
const SamArray1 = [
    'Sam',
    'Anderson',
    2022-1993, 
    'Engineer', 
    ['Michael', 'Mellisa', 'Peter']
];

//traverse from 4 to 0 in Sam array
for(let i = SamArray1.length - 1; i >= 0; i--){
    console.log(i, SamArray1[i]);
}

//Loop in Loops
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`Starting exercise ${exercise}`);
    for(let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep} for exercise ${exercise}`);
    }
}

//While Loop
let rep = 1;
while(rep <= 5){
    console.log(`WHILE LOOP : Lifting weights repetition ${rep}`);
    rep++;
}


//Here we don't know how many times we have to roll a dice so there is no counter value - in this case while loop is useful !!
//Math.trunc will make the value from decimal to a whole number
//Math.trunc(Math.random() * 6) will give 0 to 5 numbers, on adding +1 it will give 6 also
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You have rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) 
        console.log(`Loop is about to end....`)
}
//in a condition when the dice is rolled at 6 in the first attempt then it won't print anything
//coz the while condition became false so it will exit the loop
