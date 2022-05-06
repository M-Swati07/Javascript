/* VALUES & VARIABLES
let js = 'amazing';
//if(js === 'amazing') alert("Javascript is Amazing!!");

console.log(10+20-40+90);
console.log(30);
console.log("Swati");

let firstName = "Swati";
console.log(firstName);
console.log(firstName);

let PI = 3.14; //js knows the value PI so u can use it like a constant
console.log(PI);

let $salary = 90000; //$ can be used in the naming convention
console.log($salary);

//Assignment - 1
let country = "India"
let continent = "Asia"
let population = "1405.2M"
console.log(country+","+continent+","+population);*/
//===================================================================================//

//DATATYPES
/*let js = true;
console.log(js);
console.log(typeof true);
console.log(typeof js);
console.log(typeof 24.7);
console.log(typeof "Swati");

js = "Yes"; //when u want to chng value of a variable then don't write let again
console.log(js);
console.log(typeof js);

let year; 
console.log(year);
console.log(typeof year);
year = 1998; console.log(year);

console.log(typeof null); //null is not an object its a bug in the js code, it should return null like typeof undefined is undefined

let age = 30;   //let can be used to change/re-assign a value of a variable
age = 31;

const birthYear = 1998; //const can't be used to re-assign new value to the variable(Immutable variable)
//birthYear = 1999;
//const job; //const should always be initialized otherwise it will throw error

//let is block scoped and var is function scoped
var job = "developer";
//job = "analyst";
console.log(job);

//when u don't declare a variable then in that case Javascript will create a property on the global object 
lastName = "Murty"  
console.log(lastName);


==============================================================================================================*/

//BASIC OPERATORS
//Math Operators
/*const currentYear = 2022;
const ageSwati = currentYear - 1998;
const ageLata = currentYear - 1974;
const ageKumar = currentYear - 1964;

console.log(ageSwati, ageLata, ageKumar, ageKumar/2, 8-4, 5**3);
//5**3 means 5 to the power 3 = 5*5*5

const firstName = "Swati";
const lastName = "Murty";
console.log(firstName+" "+lastName);    //Concatenation

//Assignment Operators
let x = 10 + 5; //15
console.log(x);
x += 10; //x=x+10 = 15+10 = 25
console.log(x);
x *= 4; //x=x*4 = 25*4 = 100
console.log(x);
x++; //101
console.log(x);
x--; //100
console.log(x);

//Comparison Operators for boolean values(>,<,>=,<=)
console.log(ageLata>ageKumar);
console.log(ageSwati>=18);

const isFullAge = ageSwati >= 18;
console.log(currentYear-1998 > currentYear-1964);

const avg = (ageSwati+ageLata)/2;
console.log(ageSwati, ageLata, avg);

=============================================================================================================*/

//STRING AND TEMPLATE LITERALS
/*const firstName = "Swati"
const currentYear = 2022
const birthYear = 1998
const job = "Developer"

//Old Method
const me = "I'm " +firstName+ ", a " +(currentYear-birthYear)+ " year old " +job;
console.log(me);

//New Method
//In Template Literals we are using $ and {}, not ()
const meNew = `I'm ${firstName}, a ${currentYear-birthYear} year old ${job}`;
console.log(meNew);
console.log(`Hello there, how are you!!!`);

//Old Method
console.log('String with \n\
multiple \n\
lines \n\
without \n\
backtick');

//New Method
console.log(`String with 
multiple 
lines 
using
backtick`);

=========================================================================================================================================*/

//IF-ELSE 
/*const age = 15;
if(age>=18){
    console.log("Swati can start driving 🚗");  //for emoji -> windows+. 
} else{
    const yearsLeft = 18-age;
    console.log(`Swati is too young. Wait another ${yearsLeft} years🙂!!!`);
}

const birthYear = 1998;
let century;
if(birthYear>=2000){
    century = 21;
}else{
    century = 20;
}
console.log(century);

===========================================================================================================================================*/

//TYPE CONVERSION AND COERCION
//Type Conversion - when we have to convert the type manually, Coercion - when JS automatically converts type from background
/*
// type conversion
const inputYear = "1998";
console.log(Number(inputYear) + 12); //to change a string to number use type conversion Number()

console.log(Number("Swati"));   //output - NaN
console.log(typeof NaN); //output - number, but it means an invalid number

console.log(String(20));

//type coercion
console.log('I am ' +24+ ' years old'); //even if quotes not used and + sign used it will concatenate the whole thing to a string
console.log('20'+'10'+5);   //+ sign concatenates, output -> 20105
console.log('20'-'10'-5);   //- sign will change to number and perform math operation, output -> 5
console.log('10'/'5');  // output - 2

let n = '1'+ 1; //11
n = n-1;
console.log(n); //10

2+3+4+'5'   //2+3+4 = 9+'5' -> concatenated so output is 95
'10'-'4'-'3'-2+'5'  //10-4-3-2 = 1+'5' -> 15

=============================================================================================================================================*/

//TRUTHY AND FALSY VALUES

//5 falsy value : 0, '', undefined, null, NaN
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Swati"));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;
if(money){  //if(0) ---falsy value
    console.log("Don't spend it all");
}else{
    console.log("You should get a Job");
}   //since money=0 its a falsy value so else block executed

let height; //if const is used instead of let it will throw undefined height error, let will execute the stmts
if(height){  
    console.log("Height is defined");
}else{
    console.log("Height is undefined");
}   //undefined height ---falsy value so else block executed

=============================================================================================================*/

//EQUALITY OPERATORS == & ===
//=== : doesn't do type coercion(STRICT)
//== : does type coercion(LOOSE)

//const age = 18;
//if(age === 18) console.log("You just turned into an adult");

/*
'18'== 18 ------it converts string to number == does type coercion
true
'10' === 10 ------it doesn't convert string to number === doesn't do type coercion
false
*/

//const age = 18;--------try with both and check
/*const age = '18';
if(age === 18) console.log("You just turned into an adult - STRICT");
if(age == 18) console.log("You just turned into an adult - LOOSE");

const fav = prompt("What's your favourite number");// to change string to number u can also write Number before prompt - type conversion
console.log(fav);
console.log(typeof fav);

//if(fav == 40)---'40' == 40
//console.log("40 is LOOSE!!");

if(fav === 40)  //try adding NOT in front it will print 
console.log("40 is STRICT!!");

=============================================================================================================*/

//LOGICAL OPERATORS
/*const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);    
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//OR - if one is true it will be true

// if(hasDriversLicense && hasGoodVision)
// console.log("Sarah can drive");
// else console.log("Someone else should drive");

const isTired = false;   //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !(isTired))
console.log("Sarah can drive");
else console.log("Someone else should drive");

============================================================================================================*/

//SWITCH STATEMENT
/*
const day = "sunday"

switch(day){
    case "monday" : 
        console.log("Work1 Day");
        break;  //try commenting break it will execute the next case, once it sees the break it will stop

    case "tuesday" :
        console.log("Work2 Day");
        break;

    case "wednesday" : 
    case "thursday" : 
        console.log("Normal Day");
        break;
    
    case "friday" :
        console.log("Weekend Day");
        break;

    case "saturday" : //execute same o/p for sat and sun 
    case "sunday" : 
            console.log("FunDay");
            break;
    default : console.log("Not a valid day");
}

// you can also use if-else but the terms are repititive in it so switch is preferred
/*if(day === 'monday') console.log(".........");
else if(day === wednesday || day === thursday) console.log("........."); etc etc etc

============================================================================================================================================*/

//STATEMENTS AND EXPRESSIONS
/*Statements - are full sentences that translates the actions, actions that are programmed to perform 
Expressions - that produce values

3+4, 1991, true && false ------- expressions
if (2 > 1){
    const str = "2 is greater than 1";
}

here const str = "2 is greater than 1"; ------is a stmt ending with semicolon
but 2 is greater than 1 -------is an expression

============================================================================================================================================*/

//TERNARY OPERATORS
// we can use ternary operators inside template literals but we can't use if-else inside template literals 

const age = 20;
age >= 18 ? console.log("Drink Wine 🍷") : console.log("Drink Water 💧");

const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water 💧'}`);
