$(document).ready(function () {
    
    $('#expanded1').hide();
    $('#expanded2').hide();
    $('#expanded3').hide();

    $('#toggleLink1 a').click(function () {
        var toggleText = $('#toggleLink1 span');
        var text = toggleText.text();
        if (text == 'more') {
            toggleText.text('less');
        } else {
            toggleText.text('more');
        }
        $('#expanded1').slideToggle();
    });

    $('#toggleLink2 a').click(function () {
        var toggleText2 = $('#toggleLink2 span');
        var text2 = toggleText2.text();
        if (text2 == 'more') {
            toggleText2.text('less');
        } else {
            toggleText2.text('more');
        }
        $('#expanded2').slideToggle();
    });
    
    $('#toggleLink3 a').click(function () {
        var toggleText3 = $('#toggleLink3 span');
        var text3 = toggleText3.text();
        if (text3 == 'more') {
            toggleText3.text('less');
        } else {
            toggleText3.text('more');
        }
        $('#expanded3').slideToggle();
    });
    
});


