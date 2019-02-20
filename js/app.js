// refresh
$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

// scroll button
var amountScrolled = 300;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {

        $('a.back-to-top').fadeIn('slow');

    } else {
        $('a.back-to-top').fadeOut('slow');

    }
});

$('a.back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 700); // speed of transition //
    return false;
});

//scroll nav-bar
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav ul').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
var st = $(this).scrollTop();


    if(Math.abs(lastScrollTop - st) <= delta)
        return;


    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav ul').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
    if(st + $(window).height() < $(document).height()) {
            $('.nav ul').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
