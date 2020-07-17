//let cell11 = `<div id="cell-1-1" class="cell white"></div>`

function cell(rowNum, cellNum) {
   console.log(cellNum % 2)
    console.log(`writing cell ${rowNum, cellNum}`)
    return `<div id="cell-1-1" class="cell white"></div>`
}

let rowTemplate = `
    ${cell(1,1)}
    <div id="cell-1-2" class="cell black">
        <div class="checker white-checker"></div>
    </div>
    ${cell(1,3)}
    <div id="cell-1-4" class="cell black">
        <div class="checker white-checker"></div>
    </div>
    ${cell(1,5)}
    <div id="cell-1-6" class="cell black">
        <div class="checker white-checker"></div>
    </div>
    ${cell(1,7)}
    <div id="cell-1-8" class="cell black">
        <div class="checker white-checker"></div>
    </div>
`
