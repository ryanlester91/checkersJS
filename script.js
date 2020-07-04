function myFunction() {
    var images = ['blksq.png', 'rdsq.png']
    //for(var i = 0; i < 4; i++) {
        var checker = $("<div>");
        checker.attr({
        "class": 'checker'
        })
        checker.css({
            "margin": "10px",
            "border-radius": "50%",
            "height": "40px",
            "width": "40px",
            "background-color": "cyan"
        })
        $('.checker').append(images);
        $(images).append(checker);
        $(checker).append(".cell white");
        //}
    }
    myFunction();