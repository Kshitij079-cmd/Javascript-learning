// let num = [2, 5, 9, 250]

// //using for loops to print arrays
// for (let i = 0; i < num.length; i++) {
//     let element = num[i];
//     console.log("Printing arrays,", element)
// }

// //using foreach loop
// num.forEach((elements) => {
//     console.log(elements*elements)

// })
// // array.from
// let name = "kshitij"
// console.log("-----Using Array.from()-----")
// let arr = Array.from(name)
// console.log(arr)

// //using for in loop
// console.log("-----Using for in loop-----")
// for(let i in num){
//     console.log(i)
// }
// // using for of loop
// console.log("-----Using for of loop-----")
// for(let i of name){
//     console.log(i)
// }
//using array.map()function
console.log("-----using array.map() function-----")
let newArr = [45, 46, 94]
let ar = newArr.map((value, index, array)=>{
    console.log("Printing value, index and array",value, index, array)
    return value * value ;
})
console.log("squaring the given numbers and creating its arrays",ar)

//array.filter() method
let arr = newArr.filter((element)=>{
    return element > 90;
})
console.log("Ok!!!!, filtering.... ", arr)

//array.reduce() method
console.log("-----Using array.reduce() method-----")
let numbers = [175, 23, 1, 1];

let innerHTML = numbers.reduce(myFunc);

function myFunc(a, b) {
  return a - b;
}
console.log(innerHTML)