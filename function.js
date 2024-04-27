// function OnePlusAvg(x, y) {
//     return Math.round(1 +(x+y)/2); //shows rounded of figure 
// }
// let a = 4;
// let b = 5;
// let c = 6;
// console.log("One Plus average of a and b is: ", OnePlusAvg(a, b))
// console.log("One Plus Average of b and c is: ", OnePlusAvg(b, c));
//question. Function to find mean of 5 numbers

function mean(p, q, r, x, y){
    let add_divide = (p+q+r+x+y)/5;
    return add_divide;
}
 alpha = 5,
 bharat = 6,
 chirag = 10,
 dhruv = 10,
 eshita = 9


console.log("mean of five number a, b, c , d and e is: ", mean(alpha, bharat, chirag, dhruv, eshita))
console.table([alpha, bharat, chirag, dhruv, eshita]);

//rest operator in function
function calculatethePrice(val1, val2,...num1){
    console.log("arranging the items",val1, val2, num1);
    return val1, val2, num1
}
calculatethePrice(20, 500, 5000,1000)
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}, and full name is ${anyobject.FullName}`);
    return;
}
handleObject({//creation of object after function declaration
    username:"kshitij",
    FullName: "Kshitij Rajvanshi"
})