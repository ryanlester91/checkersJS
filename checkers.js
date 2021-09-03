var selectedChecker = undefined;

var checkers = [
    {row: 1, cell: 2, color: "white"},
    {row: 1, cell: 4, color: "white"},
    {row: 1, cell: 6, color: "white"},
    {row: 1, cell: 8, color: "white"},
    {row: 2, cell: 3, color: "white"},
    {row: 2, cell: 5, color: "white"},
    {row: 2, cell: 7, color: "white"},
    {row: 2, cell: 1, color: "white"},
    {row: 3, cell: 2, color: "white"},
    {row: 3, cell: 4, color: "white"},
    {row: 3, cell: 6, color: "white"},
    {row: 3, cell: 8, color: "white"},
    {row: 6, cell: 1, color: "black"},
    {row: 6, cell: 3, color: "black"},
    {row: 6, cell: 5, color: "black"},
    {row: 6, cell: 7, color: "black"},
    {row: 7, cell: 2, color: "black"},
    {row: 7, cell: 4, color: "black"},
    {row: 7, cell: 6, color: "black"},
    {row: 7, cell: 8, color: "black"},
    {row: 8, cell: 1, color: "black"},
    {row: 8, cell: 3, color: "black"},
    {row: 8, cell: 5, color: "black"},
    {row: 8, cell: 7, color: "black"}

]





function renderCheckers(){
    console.log("rendering checkers")
    for(let i=0; i<checkers.length; i++){
        let checker = checkers[i];
        console.log(checker)
        $(`#cell-${checker.row}-${checker.cell}`).html(renderChecker(i, checker.color));
    }
}

function renderChecker(i, color) {
    return `<div><div id="checker-${i}" class="checker ${color}-checker"></div></div>`
}



renderChecker();

function selectChecker(){
    $('.selected').removeClass('selected')
    let checker = $(this)
    let id = checker.attr('id')
    console.log('selecting checker', checker);
    console.log(`the id of checker is ${id} `)
    
    let stringParts = id.split('-')
    console.log('checker =', stringParts, id)

    let checkerIndex = stringParts[1]
    console.log(checkerIndex)

    selectedChecker = checker

    checker.parent().addClass('selected')

}


