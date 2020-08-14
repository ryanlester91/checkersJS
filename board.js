$(document).ready(function () {
    console.log('document ready');
    $('.black.cellTemplate').click(toggle);
})

function toggle() {
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