$(function() {
    // jQuery goes here...

    // Uncomment this line to fade out the red box on page load
    // $(".red-box").fadeOut(2000);
    // $(".green-box").fadeOut(2000);
    // $(".red-box").fadeIn(1000);
    // $(".green-box").fadeOut(1000);
    // $(".green-box").fadeTo(1000,0.5);
    // $(".red-box").fadeTo(1000, 0);
    // $(".green-box").fadeTo(1000, 0.5);
    // $(".blue-box").fadeTo(1000, 0.8);
    // $(".green-box").fadeToggle();
    // $(".green-box").fadeToggle();
    // $(".blue-box").hide(1000);
    // $(".blue-box").show(1000);
    // $(".blue-box").slideToggle(2000);
    // $('p').hide();
    // $('p').slideDown(1500);

    $('.blue-box').animate({
        "margin-left":"+=200px",
    }, 1000, "linear")
    $('.blue-box').animate({
        "margin-left":"-=200px",
    }, 1000, "linear")

});
