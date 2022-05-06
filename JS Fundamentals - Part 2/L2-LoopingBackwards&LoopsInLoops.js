/*
LECTURE: Looping Backwards and Loops in Loops

1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];

2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country

3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway �
*/

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

console.log(listOfNeighbours.length);

for(let i = 0; i < listOfNeighbours.length; i++){
    console.log(`In i loop ${i}`);
    for(let j = 0; j < listOfNeighbours[i].length; j++){    //arr[0].length means the length of index 0 is 2, so basically its j < 2
        console.log(`In j loop ${j}`);
        console.log(`Neighbour : ${listOfNeighbours[i][j]}`);
    }
}