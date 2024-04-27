const prompt = require('prompt-sync')();
/*
for (let i = 1; i <= 10; i++) {
    let result = 3 * i;
    console.log(`3 * ${i} = ${result}`);
}
*/

//Program to add first N natural numbers
/*
let sum = 0;
let n = prompt("enter the value of n: ")
n = Number.parseInt(n); // passing integer to string - enter the value of n: 
for(let i = 0; i<n; i++){
    sum += (i+1)
    console.log((i+1), " + ")
}
console.log("sum of first " + n + " natural number is "+ sum)
*/


// let obj = {
//     aman : 45,
//     bharat : 68,
//     chirag : 25
// }
// for (let a in obj) { // scope of let keyword remains for the block only
//     console.log("Marks of " + a + " are " + obj[a])
//     }


/* scope of "let" keyword, remaing for the block only. But if you use "var" keyword, then you are defining that identifier as a global identifier and var identifier's value with remain same for complete program */


/*Dealing with do while loops*/
// let n = prompt("enter the value of n: ")
// n = Number.parseInt(n);

// let i = 10;
// do{
//     console.log(i)
//     i++;
// }while(i<n) // do-while loops first execute the loop then check for condition whether it is true or false



//QUESTIONS TO PRACTICE


let surnames = {
    raj : "kundra",
    kapil : "sharma",
    ajey : "nagar",
    ajay : "baveja"
}
//question 1. using plain for loop
for(let i=0; i<Object.keys(surnames).length; i++){
    console.log("surname of "+ Object.keys(surnames)[i]+ " is "+ surnames[Object.keys(surnames)[i]]);
}

//question 2. using for in loop
console.log("----------PRINTING WITH FOR IN LOOP----------")
for (let key in surnames) {
    console.log("surname of "+ key + " is "+ surnames[key])
}

//question 3. prompting user to input a correct number (we will use loops here)
console.log("----- PROMPTING USER TO PRINT THE CORRECT NUMBER-------")
let cn = 97;
let i;
while (i!=cn) {
    
    i = prompt("enter the correct number-> ")
    
}


console.log("you have entered the correct number");

//QUESTION 4. function to find out mean of 5 numbers
function mean(p, q, r, x, y){
    let add_divide = (p+q+r+x+y)/5;
    return add_divide;
}


let a = prompt("enter the number a: ")
a = Number.parseInt(a);
let b = prompt("enter the number b: ")
b = Number.parseInt(b);
let c = prompt("enter the number c: ")
c = Number.parseInt(c);
let d = prompt("enter the number d: ")
d = Number.parseInt(d);
let e = prompt("enter the number e: ")
e = Number.parseInt(e);



console.log("mean of five number a, b, c , d and e is: ", mean(a, b, c, d, e))
