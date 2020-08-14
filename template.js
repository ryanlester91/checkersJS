function cellTemplate(rowNum, cellNum) {
   //figure out the parity of the row and cell
   var isCellEven = true
   var isRowEven = true
   if (cellNum % 2 == 1) isCellEven = false
   if (rowNum % 2 == 1) isRowEven = false
    //console.log(`writing cell ${rowNum, cellNum} and even is ${even}`)
    if (isCellEven != isRowEven) {
        //Black Cell
        
        let cellString =`
        <div id="cell-${rowNum}-${cellNum}" class="cell black">
            <div class="checker white-checker"></div>
        </div>
        `;
        if (rowNum <=3) {
            cellString = cellString + checkerTemplate('white', 'false')
        }
        else if (rowNum >=6) {
        cellString = cellString + checkerTemplate('black', 'false')
        }
        else {
            cellString = cellString + checkerTemplate('black', 'true')
        }
        cellString = cellString + `</div>`
        return cellString
    } else
        //White Cell
    return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
}

function checkerTemplate(color, hidden) {
    return `<div class="checker ${color}-checker" hidden="${hidden}"></div>`
}

function parity(num) {
    if (num % 2 === 0) return 'even'
    else return 'odd'
}

function determineColor(rowNum, cellNum) {
    if(parity(rowNum) === parity(cellNum)) return 'white'
    else return 'black'
}

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
