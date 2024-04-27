let t = document.body.firstElementChild.firstElementChild
let td = t.rows[0].cells[0];
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies.rows)
console.log(t.rows.SectionRowIndex)
console.log(t.rows[1].rowIndex)
console.log(td.rowspan)
console.log("Cell Index:", td.cellIndex);
console.log(typeof td)
console.log(typeof t)
console.log(typeof window)