function renderBoard() {
    return `
    ${renderRow(1)}
    ${renderRow(2)}
    ${renderRow(3)}
    ${renderRow(4)}
    ${renderRow(5)}
    ${renderRow(6)}
    ${renderRow(7)}
    ${renderRow(8)}
    `
}

function renderRow(rowNum) {
    
    return `
    <div id="row-${rowNum}" class="row">
        ${renderCell(rowNum, 1)}
        ${renderCell(rowNum, 2)}
        ${renderCell(rowNum, 3)}
        ${renderCell(rowNum, 4)}
        ${renderCell(rowNum, 5)}
        ${renderCell(rowNum, 6)}
        ${renderCell(rowNum, 7)}
        ${renderCell(rowNum, 8)}
        </div>`
}

function renderCell(rowNum, cellNum) {
    if (determineColor(rowNum, cellNum) === 'black') {
        //Black cell
        return `
        <div id="cell-${rowNum}-${cellNum}" class="cell black">
        ${renderChecker(rowNum)}
        </div> 
        `
    } else
        //White Cell
    return `<div id="cell-${rowNum}-${cellNum}" class="cell white">
    ${renderChecker(rowNum)}
    </div>`
}

function renderChecker(rowNum) {
    if (rowNum <=3) {
        return `<div class="checker white-checker"></div>`
        //console.log(`<div class="checker white-checker"></div>`)
    } else if (rowNum >=6) {
        return `<div class="checker black-checker"></div>`
        //console.log(`<div class="checker black-checker"></div>`)
    } else {
        return `<div class="checker black-checker" hidden="true"></div>`
        //console.log(`<div class="checker black-checker" hidden="true"></div>`)
    }
}

//Helper Methods
function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
    
}

function determineColor(rowNum, cellNum) {
    return parity(cellNum) == parity(rowNum) ? 'white' : 'black'
}

renderChecker();



