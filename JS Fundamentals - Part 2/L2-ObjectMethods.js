/*
LECTURE: Object Methods

1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.

2. Call the 'describe' method

3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.
*/

const myCountry = {
    country : 'India',
    capital :  'New Delhi',
    language : 'Hindi',
    population : 1400,
    neighbours : ['Nepal', 'Bhutan', 'Bangladesh'],

    describe : function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, 
            ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    checkIsland : function(){
        this.isIsland = this.neighbours.length > 0 ? 'true' : 'false';
        return this.isIsland;
    }
}

console.log(myCountry);
console.log(myCountry.describe());  //don't forget to give the () incase of calling the functions
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);    //if you only write line 37 and not 36 line 37 will not execute, but if u write line 36 and then write line 37 then it works. IDK how 🙄

