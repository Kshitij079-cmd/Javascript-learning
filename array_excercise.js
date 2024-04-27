const prompt = require('prompt-sync')();
// question 1. pushing a new number to arrays
// let numbers  = [1, 2, 3, 5, 3, 2, 1]
// let addtonumbers = prompt("Enter the number you want to add: ")
// console.log("length of array before adding:", numbers.length)
// addtonumbers = Number.parseInt(addtonumbers)
// let a = numbers.push(addtonumbers)
// console.log(`our array after pushing the new number is: ${numbers}`)
// console.log("Now, the length of array has become:", numbers.length)

// //Question 2. Keep adding numbers until 0 is added to array
// console.log(" ")
// let numbers  = [1, 2, 3, 5, 3, 2, 1]
// let addtonumbers;
// do {
//     addtonumbers = prompt("Enter the number you want to add: ")
//     console.log("length of array before adding:", numbers.length)
//     addtonumbers = Number.parseInt(addtonumbers)
//     numbers.push(addtonumbers)
//     console.log(`our array after pushing the new number is: ${numbers}`)
//     console.log("Now, the length of array has become:", numbers.length)
// }while(addtonumbers != 0);

// console.log(" ")
// //Question 3. Filter the numbers divisible by 10
// let divisiblity = [10, 20, 25, 35, 40, 45, 48]
// let divide = divisiblity.filter((num)=>{
//     return num % 10 == 0 ;
// })
// console.log("The number which are completely divisible by 10 are: ", divide)
// console.log(" ")
// //Question 4. Create an array of square of given numbers
// console.log("-----using array.map() function-----")
// let no = [3, 5, 6]
// console.log("printing arrays", no)
// let ar = no.map((value)=>{
//     console.log("Printing value",value)
//     return value * value ;
// })
// console.log("squaring the given numbers and creating its arrays",ar)

//Question 5. Find out factorial of given array
console.log("-----Using array.reduce() method-----")
let n = [1,2,3,4,5,6,7 ];

let factorial = n.reduce((x, y)=>{
    return x * y;
});


console.log("factorial of given array is:", factorial)