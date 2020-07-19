//let cell11 = `<div id="cell-1-1" class="cell white"></div>`

function cell(rowNum, cellNum) {
   //console.log(cellNum % 2)
   let even = true
   if (cellNum % 2 == 1) even = false
    console.log(`writing cell ${rowNum, cellNum} and even is ${even}`)
    if (even) {
        return `
        <div id="cell-1-${cellNum}" class="cell black">
            <div class="checker white-checker"></div>
        </div>
        `
    } else
    return `<div id="cell-1-${cellNum}" class="cell white"></div>`
}

/*let rowTemplate = `
    ${cell(1,1)}
    ${cell(1,2)}
    ${cell(1,3)}
    ${cell(1,4)}
    ${cell(1,5)}
    ${cell(1,6)}
    ${cell(1,7)}
    ${cell(1,8)}
`*/
function rowTemplate() {
    let rowString = ''
    for(let cellNum=1; cellNum<=8; cellNum++) {
        rowString = rowString + cell(1, cellNum)
        console.log(rowString);
    }
    return rowString
}