$("#a1").click(
    function () {
        $('#angel1').css('display', 'block');
        $('#angel2').css('display', 'block');
        $('#angel1').css('animation', 'fallen 100s linear');
        $('#angel2').css('animation', 'rise 100s linear');
        $("h1").text("God Bless U");
        $('h1').css("color", "yellow");
        document.getElementById('autoplay').play();
        $(this).css("display", "none");
        $('#a2').css("display", "block");

    }
);
$("#a2").click(
    function () {
        $('#angel1').css('animation', 'fallen-rev 2s linear');
        $('#angel2').css('animation', 'rise-rev 2s linear');
        $("h1").text("I'm Minh");
        $('h1').css("color", "white");
        $(this).css("display", "none");
        $('#a1').css("display", "block");
    }
);