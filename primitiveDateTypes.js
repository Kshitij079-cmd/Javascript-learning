// nn ss u bb
/** N - null
N - number
S - string  SUNS Bo Bi N
S - symbol
B - boolean
B - Bigint
U - Undefined*/

//Javascript is dynamic language, because we don't have to define data type compulsorily unlike statical typed language where we have to define data type during compile time.

let a = null;
let b = 786;
let c = 'Rajvanshi';
let d = Symbol("I am a nice symbol");
let e = true;// boolean
let f = BigInt(927) + BigInt(9);
let u = undefined; // by the way there is not need to define it by using undefined keyword, because by default if a program do no define it then it will be undefined.
console.log(a, b, c, d, e, f, u);
console.log(typeof a," and ", typeof u);

// Objects in Javascript
const item = {  // such of block is known as dictionary in python;
  "Rajvanshi": true,
  "Gargs": false,
  "Kshitij": 24,
  "codechef": undefined
}
console.log(item["Rajvanshi"]);
item.anuj = "25";
console.log(item);
let num =  new String("prakash")
console.log(num[0])
console.log(num)
console.log(num.__proto__)
console.log(num.length)