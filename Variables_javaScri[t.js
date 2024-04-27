let a = 97; // a is our declared variable;
console.log(a);
a = "Maltruind";
console.log(a);
console.log(" ");
console.log("We have just seen that we change the data of any variable declared earlier");


//VAR, LET, CONST lecture continues;
var b = "codechef";
var c = null;
var d = undefined;
console.log(typeof b, typeof c);
let e = "Harry";
var f = "checker"
{
  let e = 'teacher';
  // scope of e will be remain in {} curly scope only if we use let keyword
  console.log("checking scope", e);
}
console.log(b);
console.log("CHECKING SCOPE",e);// this e is a globally scoped variable
console.table([a,b,c,d,e]);

const author = "David Brook";
/**  let author = 5; //Throws an error because const identifier cannnot be change once declared
const book; // Throws an error because const identifier must be initialized during declaration
**/
console.log(author);
 //By default, it's advisable to employ const for variables in most scenarios, particularly when dealing with sensitive data, to prevent accidental reassignment. This practice helps maintain the integrity of the data by ensuring that const variables cannot be reassigned. However, if there's an awareness that a specific variable may need to be reassigned during the program's execution, it's more appropriate to use let.

let introduced = "Kshitij";
console.log("My name is: ", introduced);

let anotherName = introduced;
console.log("Saved introduced name in let anotherName variable: ",anotherName);
anotherName = 'Anuj';
console.log("Another name is", anotherName);
console.log(`After checking original value of 'introduced' variable, the value of original copy is: `, introduced);

let user1 = {
  email : "User@google.com",
  upiID : "upi@ysbi"
}
console.log("user1 upi ID",user1.upiID, "\nuser1 email ID",user1.email);
let user2 = user1;
user2.email = "yamraj@mail.com";
console.log(user2.email)
console.log("details of user1 and user2 after getting reference by user2 object:  user1= ", user1 ,"and User2= ", user2);


// memory of local variables stored in stack. If we want to access any variables without stack-based memory manipulation, we have to take the reference of that variable into a newVariable
const guitar = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(guitar);
for (let i = 0; i < 3; i++) {
  guitar.pop();
}
console.log("removed required elements from the stack")
console.log(guitar)

const musicalInstrument = guitar;
console.log("sending the current copy of guitar variable ",musicalInstrument)


// Define the stack data structure using primitive data types
let top = null; // Initialize top of the stack as null
let size = 0;   // Initialize the size of the stack as 0

// Function to push an element onto the stack
function push(element) {
    top = element; // Update top of the stack with the new element
    size++;       // Increment the size of the stack
    console.log(`Pushed ${element} onto the stack.`);
}

let newElement = top;
console.log("the value of newElement by referencing element variable", newElement)
// Function to pop an element from the stack
function pop() {
    if (size === 0) {
        console.log("Stack underflow: Cannot pop from an empty stack.");
        return null;
    } else {
        let poppedElement = top; // Store the current top of the stack
        top = null;              // Clear the top of the stack
        size--;                  // Decrement the size of the stack
        console.log(`Popped ${poppedElement} from the stack.`);
        return poppedElement;
    }
}

// Function to display the current state of the stack
function displayStack() {
    console.log("Current top of the stack:", top);
    console.log("Current size of the stack:", size);
}

// Push elements onto the stack
push(1);
push(2);
push(3);
displayStack();

// Pop elements from the stack
pop();
displayStack();

// Push another element onto the stack
push(4);
displayStack();


