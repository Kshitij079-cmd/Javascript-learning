/* follow the link to know more about string methods https://www.w3schools.com/js/js_array_methods.asp */
// toString() function converting arrays into string
let arr = [1, 2, 50, "Anuj" ]
let container = arr.toString() // container is now a string
console.log(container, "type of container is", typeof container)
// Joining arrays
let goldChaing = [0, 0, 0, "0"]
let chain = goldChaing.join("-")
console.log("joining the gold chain like this:", chain)
// Pushing a new element to array's list
console.log("Removing the last element of array:", arr.pop()+"\n", "remaining arrays will be:", arr)

console.log(`Pushing new element/s to Array -${arr}`)
let newElement = arr.push("kshitij")
console.log(`total arrays will be: ${newElement} and the new array list is, ${arr}`)
//concatenating Arrays
let class_12_a = ["aman", "vikas", "piyush"]
let class_12_b = ["Pooja", "Pariksha", "preeti"]
let merging_class = class_12_a.concat(class_12_b)
console.log("today, two classes will be merged, so student names are:\n", merging_class)
console.log("and total numbers of student are \n", merging_class.length)

/*Flattening an array - process of reducing/removing the dimensionality of arrays */
let dimensionality = [[1, 2], [3,5]]
let newArr = dimensionality.flat();
console.log("Flaterring the arrays ",newArr)


/* The first parameter (1) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Parivesh" , "5") define the new elements to be added.
 */
console.log("Printing New Array arr:", arr)
//deleting the item from array
//deleting any item from array, doesn't decrease the length of arrays, only deletes and shows empty space
console.log(`deleting item from the first initialised array ${arr}`)
let item = delete arr[2]
console.log(`deleted item from the first initialised array `, item + `, array becomes ${arr}`)
console.log(`but the length of array is still ${arr.length}`)

// sorting method
let arrange = class_12_a.sort()
console.log("sorting alphabetically", arrange, "print sorted array:", class_12_a)

//reversing the string
console.log(class_12_a.reverse())

let newAr = [1,2,3,6,7,8,9,19]
console.log("Printing the newAr = ", newAr);
let slicing = newAr.slice (1,6); //slicing does not permanently delete any element from an array
console.log(`Priting sliced array ${slicing}\n Original newAr is ${newAr}`); 
let splicing = newAr.splice(1,0) //splice(start, deleteCount)
console.log(`Priting spliced array ${splicing}\n Original newAr is ${newAr}`); 
 splicing = newAr.splice(1,6) //splice(start, deleteCount) deleting items
console.log(`Deleting these items in array ${splicing}\n Original newAr is ${newAr}`); 
splicing = newAr.splice(1,0,6) //splice(start, deleteCount, item1)
console.log(`Priting another spliced array ${splicing}\n Original newAr is ${newAr}`); 

/*splice() function can be used to add mulitple elements in an array */
let addElements = arr.splice(1, 0, "Parivesh", '5')
console.log("adding some elements to array", addElements);