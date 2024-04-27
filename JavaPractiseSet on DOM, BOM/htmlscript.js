let x = document.getElementsByTagName("span")[0]
console.log(x)
let y = document.getElementsByTagName("span")[0]
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)
console.dir(y)

console.log(document.body.firstChild.data)
console.log(document.body.textContent)
dollar = $0.nextSibling
console.log(dollar)//this will checkk and elements nextsibling in a HTML page
/*** Browser's console box responses
 * span#first
htmlscript.js:4 #text
htmlscript.js:5 SPAN
htmlscript.js:6 span#first
contentScript.bundle.js:621 Content script works!
contentScript.bundle.js:621 Must reload extension for modifications to take effect.
first.innerHTML
'<b>Hi!! </b>Hey I am Span'
first.innerHTML = "<br><i>This is a new line setting innerHTML string and giving italic tag to it</i>"
'<br><i>This is a new line setting innerHTML string and giving italic tag to it</i>'
 */