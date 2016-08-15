$(document).ready(function () {
    
        $('.toggleLink1 p').hide();

    $('.toggleLink1 a').click(function () {
        var toggleText = $('.toggleLink1 span');
        var text = toggleText.text();
        if (text == 'more') {
            toggleText.text('less');
            $('.toggleLink1 p').show();
        } else {
            toggleText.text('more');
            $('.toggleLink1 p').hide();
        }
        //$('.toggleLink1 p').slideToggle();
    });
    
            $('.toggleLink2 p').hide();

    $('.toggleLink2 a').click(function () {
        var toggleText = $('.toggleLink2 span');
        var text = toggleText.text();
        if (text == 'more') {
            toggleText.text('less');
            $('.toggleLink2 p').show();
        } else {
            toggleText.text('more');
            $('.toggleLink2 p').hide();
        }
        //$('.toggleLink2 p').slideToggle();
    });

});

