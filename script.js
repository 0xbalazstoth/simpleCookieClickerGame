$(document).ready(function(){
    var counter = 0;
    $('img').fadeIn(2000);
    $('img').attr('draggable', false);
    $(".cookieClick").click(function(){
        counter++;

        $(".cookieCounterText").text(counter);
    });
});