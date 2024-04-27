// const prompt = require('prompt-sync')();
// Synchronous programming
// let a = prompt("What is your name")
// let b = prompt("what is your age? ")
// let c = prompt("What is your favourite color? ")
// //Asychronous programming
// console.log(`The name is ${a}. His age is ${b} and His favourite color is ${c}`)
 function loadScript(src) {
    let script = document.createElement('script')
    script.src = src
    script.onload = function() {
        console.log("Loaded script with SRC: " + src)
        callback(null, src);
      }
    
 }
 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")