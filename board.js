$(document).ready(function () {
    console.log('document ready');
    $('#board-container').html(renderBoard())
    $('.checker').click(selectChecker);
    console.log('click handler')
    renderCheckers();
    $('.black .cell').click(moveSelectedCheckerHere);
})

function toggle(){
    let checker = $(this).children().first();
    checker.toggle();
    if(!checker.is(":visible")){
        switchColor(checker);
    }
}

function switchColor(checker) {
    if (checker.hasClass('black-checker')) {
        checker.removeClass('black-checker')
        checker.addClass('white-checker')
    } else {
        checker.addClass('black-checker')
        checker.removeClass('white-checker')
    }
}

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
        
        </div> 
        `
    } else
        //White Cell
    return `<div id="cell-${rowNum}-${cellNum}" class="cell white">

    </div>`
}

//Helper Methods
function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
    
}

function determineColor(rowNum, cellNum) {
    return parity(cellNum) == parity(rowNum) ? 'white' : 'black'
}

function moveSelectedCheckerHere(){
  console.log('bacon');
}
