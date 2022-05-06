/*
LECTURE: Type Conversion and Coercion

1. Predict the result of these 5 operations without executing them:
'9' - '5';                  ----------4
'19' - '13' + '17';         ----------617
'19' - '13' + 17;           ----------23
'123' < 57;                 ----------false
5 + 6 + '4' + 9 - 4 - 2;    ----------114 + 9 - 4 - 2 => 123 - 4 - 2 => 119 - 2 => 117

2. Execute the operations to check if you were right
*/

// minus : will subtract
// plus : will concat

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);   //1143 is the correct answer ---- as 4 is still a string it can't be added to (9 - 4 - 2), only concatenated
