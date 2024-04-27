//STRING METHODS IN JAVASCRIPT
/* strings are imutable or cannot be change */
let string = "Kshitij"
console.log("length of this string is: "+ string.length)
console.log("I will make the string in upper case: "+ string.toLocaleUpperCase())
console.log("after slicing required elements from this string, it will look like this: ", string.slice(1, 3))
console.log("after slicing required elements from this string, it will look like this: ", string.slice(3))
let newString = string.replace("Kshitij", "  Anuj  ")
console.log("string after replacing: ", newString)
console.log( "removing the white spaces from new string ",newString.trim())
let word = "WORD"
console.log(string.concat(" is also a string like, ", word, ", Ok!!!"))
//question 1. using for loop to print a string
for (let i=0; i<string.length; i++) {
    console.log(string[i]);
    
    
}

//Question 2: using include() function in javascript
let text = "Hello world, welcome to the universe.";
// let result = text.includes("world", 12); // line throwing false
let result = 'world';
console.log(`the word "${result }" ${text.includes(result)? ' is ': ' is not '} included in the text`)
console.log(`the word "${result }" ${text.endsWith(result)? 'has': ' has not '} there at the end text`)
console.log(`the word "${result }" ${text.startsWith(result)? ' is ': ' is not '} included at the begining of the text`)
console.log("hence, the sentence end with, ", text.endsWith('.'))
console.log("hence, the sentence starts with, ", text.startsWith('Hello'))


//Question 3. create a program to extract amount from the string - " Please give 1000 rupees"
let request = "please give 1000 rupees"
let amount = Number.parseInt(request.slice(12, 17))
console.log(amount, "and type of amount is", typeof amount)


let replace = "shine"
let replacement = replace.replace('n', 'p')

console.log(replace, "is the unreplace string of", replacement)

let emergence = "Prevention_is_better_than_cure";
console.log(emergence);
console.log(emergence.trim());
console.log(emergence.split('_'))// can converts a complete string into array
