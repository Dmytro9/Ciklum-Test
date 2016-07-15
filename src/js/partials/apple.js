// Footer Nav-menu Apple.com
$('.nav-wrapper h3').click(function() {
    if ($(window).width() <= 768) {
        $(this).toggleClass('js-apple-down').next('ul').slideToggle();
    }
});

$('.nav-wrapper a').click(function(e) {
    e.preventDefault();
});

$(window).resize(function() {
    if ($(window).width() >= 768) {
        $('.nav-wrapper ul').css('display', 'block');
        $('.nav-wrapper h3').removeClass('js-apple-down');
    }
    if ($(window).width() <= 768) {
        $('.nav-wrapper ul').css('display', 'none');
    }
});


