const prompt = require('prompt-sync')();
let how_old = prompt('Hey Enter your age: ');
    how_old = Number.parseInt(how_old)
    
        if(how_old<=0){
            console.log("TRY AGAIN!!!!!")
        }
        else if(how_old<=9){
            console.log("You are a kid, you can't even think of driving")
        }
        else if(how_old>9 && how_old<=17){
            console.log("you can think for driving after 16+ years for non gear vehicles")
        }
        else{
            console.log("yes, you can drive all geared vehicles")
        }
    console.log("you can", (how_old<18?  "not drive geared vehicles": "drive all geared and non geared vehicles ")) // in this line we have used ternary operator


    // More question on conditional expressions
    // Problem no. - using logical operators, to find whether the age of the person lies between 18 and 95

let umar = prompt("Tumhari umar kya hai: ");
    umar = Number.parseInt(umar)
if(umar>=10 && umar<17){
    console.log("This person must be a teenager");
}
else if(umar>0 && umar<=10){
    console.log("this is a kid");
}
else if(umar>=18 && umar<26){
    console.log("this person must be a youngster, and, will become an adult");
}

else{
    console.log("Age doesn't lies between 1 to 26, hence, this person must be an adoloscent or above");
}



/** Switching to switch case statement */
let age = prompt("what is your age: ");
    age = Number.parseInt(age)

switch (age) {
    case 12:
        console.log("you are kid and a teenager too");
        if(age<18){
            console.log("but not an adult ")
        }
        break;

    case 18:
        console.log("you are 18 and above, but,still you are teenager too ");
        break

    default:
        if(age<=11){
            console.log("this age is undefined, you must be a kid ");
        }
        else if(age==19){
            console.log("you are turning into younger, but still a teenager");
        }
        else if(age>19 && age<=62){
            console.log("Now you are an independent person");
        }
        else if(age>=63){
            console.log("you should get retired from job and take some rest");
        }
        else{
            console.log("age is not defined");
        }
        break;
}