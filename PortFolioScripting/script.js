// const prompt = require('prompt-sync')();

// console.log("trying my js file into html website")
// console.assert(5<50)
// let obj = {a:1, b:5, c:6}
// console.table(obj) // Displays you data in tabular format
// // console.log(console)
// console.log(" ")
// console.time("For loop")
// let multiply = 3
// for(let i = 1; i<=10; i++){
//     console.log(`${multiply} x ${i} = ${multiply*i}`)
// }
// console.timeEnd("For loop")

/* ALERT, PROMPT, CONFIRM, WRITE */
// alert("Enter the value of a")
// let a = prompt("Enter the value here => ")
// a = Number.parseInt(a)
// alert(`A is ${typeof a} type`)
// let write = confirm(`Do you want to print value of ${a} to home page `)
// if(write){
//     document.write(a);
// }
// else{
//     alert("Please allow me write to the home page")
// }

/*Winow, BOM, DOM objects */
window.console.log(window)
console.log(document.body)// converting a complete HTML page into a JavaScript object
document.body.style.background = "green"

/**Question 1. Program using prompt function asking user his/her age and alerting whether user can drive or not
 */

// let runAgain = true
// let how_old;
// while(runAgain){
//         let how_old = prompt('Hey Enter your age: ');
//             how_old = Number.parseInt(how_old)
//         if(how_old<=0){
//             console.error("TRY AGAIN!!!!!") // question 3. using console.error if age entered is negative
//         }
//         else if(how_old<=9){
//             alert("You are a kid, you can't even think of driving")
//         }
//         else if(how_old>9 && how_old<=17){
//             alert("you can think for driving after 16+ years for non gear vehicles")
//         }
//         else{
//             alert("yes, you can drive all geared vehicles")

//         }
//         alert("you can "+ (how_old<18?  "not drive geared vehicles": "drive all geared and non geared vehicles ")) // in this line we have used ternary operator
//         runAgain = confirm("do you want to run the loop")
//     }
//Question 4. program to change url if user inputs number more than 4
alert("To change the number you have to input number greater than 4");
let num = prompt("Enter the number");
num = Number.parseInt(num);
if (num > 4) {
  location.href = "https://www.youtube.com/";
} else {
  alert("you are in range only, can't change the webpage");
}

// let color = prompt("Enter the Background color you want to change")
// document.body.style.background = color
