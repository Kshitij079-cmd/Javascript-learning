alert("hello")
let timeout= setTimeout(function () {
    alert("I am inside a setTimeout Function")
    
}, 6000)
let askTimeout = prompt("Do you want to run setTimeout Function")
if("n"== askTimeout){
    clearTimeout(timeout)
}
console.log(timeout)