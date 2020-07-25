//let cell11 = `<div id="cell-1-1" class="cell white"></div>`

function cellTemplate(rowNum, cellNum) {
   //console.log(cellNum % 2)
   var isCellEven = true
   var isRowEven = true
   if (cellNum % 2 == 1) isCellEven = false
   if (rowNum % 2 == 1) isRowEven = false
    //console.log(`writing cell ${rowNum, cellNum} and even is ${even}`)
    if (isCellEven != isRowEven) {
        //Black Cell
        return `
        <div id="cell-${rowNum}-${cellNum}" class="cell black">
            <div class="checker white-checker"></div>
        </div>
        `
    } else
        //White Cell
    return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
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
function rowTemplate(rowNum) {
    var rowString = ''
    console.log(`drawing row number ${rowNum}`);
    for(var cellNum=1; cellNum<=8; cellNum++) {
        rowString = rowString + `<div id="row-${rowNum}" class="row">`
        rowString = rowString + cellTemplate(rowNum, cellNum)
        rowString = rowString + `</div>`
        //console.log(rowString);
    }
    return rowString
}

function boardTemplate() {
    var boardString = ''
    for(var rowNum=1; rowNum<=8; rowNum++) {
        
        boardString = boardString + rowTemplate(rowNum);
        
        //console.log(boardString);
    }
    return boardString
}