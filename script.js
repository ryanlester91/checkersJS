function myFunction() {
    var images = ['rdsq.png', 'blksq.png'];
    for(var i = 0; i < 4; i++) {
        var tile = $("<div>");
        tile.attr({
        "class": 'tile'
        })
        tile.css({
        "background-image": "url('" + (images[i]) + " ')",
        "background-repeat": "repeat-x",
        "background-size": "cover"
        });
        $('.tiles').append(tile);
        }
    }
    myFunction();