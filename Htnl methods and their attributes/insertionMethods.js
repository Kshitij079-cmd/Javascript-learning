let insert = document.getElementsByTagName('div')[0]
let div = document.createElement('div')
// insert.innerHTML = insert.innerHTML + '<h1>Hello!!! This is a new innerHTML section</h1>'
div.innerHTML = '<h1>Hello!!! This is a new innerHTML section</h1>'
// insert.appendChild(div)
console.log(insert.append(div))
console.log(insert.prepend(div))
console.log(insert.before(div))
console.log(insert.after(div))
console.log(insert.replaceWith(div))
