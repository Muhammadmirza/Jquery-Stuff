// $(function () {
//     jQuery goes here...

//     Uncomment this line to fade out the red box on page load
//     $(".red-box").fadeOut(2000);
//     $(".green-box").fadeOut(2000);
//     $(".red-box").fadeIn(1000);
//     $(".green-box").fadeOut(1000);
//     $(".green-box").fadeTo(1000,0.5);
//     $(".red-box").fadeTo(1000, 0);
//     $(".green-box").fadeTo(1000, 0.5);
//     $(".blue-box").fadeTo(1000, 0.8);
//     $(".green-box").fadeToggle();
//     $(".green-box").fadeToggle();
//     $(".blue-box").hide(1000);
//     $(".blue-box").show(1000);
//     $(".blue-box").slideToggle(2000);
//     $('p').hide();
//     $('p').slideDown(1500);

//     $('.blue-box').animate({
//         "margin-left":"+=200px",
//     }, 1000, "linear")
//     $('.blue-box').animate({
//         "margin-left":"-=200px",
//     }, 1000, "linear")

// });

// $(function () {
//     $("#list").find("li").css("background-color", "rgba(180,180,180,0.4");

//     $("#list").children("li").css("background-color", "rgba(180,180,180,0.4");

//     $("#list").parents("body").css("background-color", "rgba(180,180,180,0.4");

//     $("#list").parent().css("background-color", "rgba(180,180,180,0.4");

     
//     $("#list").siblings("p").css("background-color", "rgba(180,180,180,0.8");
//     $("#list").siblings(":header").css("background-color", "rgba(180,180,180,0.8");

//     $("#list").prev().css("background-color", "rgba(180,180,180,0.8");
//     $("#list").next().css("background-color", "rgba(180,180,180,0.8");
//     $("#list").prev().next().css("background-color", "rgba(180,180,180,0.8");
//     $(':header').next().css("background-color", "purple");
//     $('input:password').css("background-color", "purple");
// })

// $(function () {
// //    $("li").filter(function(index){
// //        return index % 3===1;
// //    }).css("background-color", "rgba(180,180,180,0.8)"); 
// //    $('li').eq(3).css("background-color", 'rgba(180,180,180,0.8)');  
// //    $('li').eq(-2).css("background-color", 'rgba(180,180,180,0.8)');  
// //    $('li').first().css("background-color", 'rgba(180,180,180,0.8)');
// //    $('li').last().css("background-color", 'rgba(180,180,180,0.8)');
// //    $('li').not(":first").css("background-color", 'rgba(180,180,180,0.8)');
// //    $('li').not("#list ul li").css("background-color", 'rgba(180,180,180,0.8)');
// //     $('li').not(function(index){
// //         return index % 3 ===2;
// //     }).css("background-color", 'rgba(180,180,180,0.3)');

// })


$(function () {
    //  $("ul ul:first").append("<li> i'm going to be the last sub-item!");
    // $("<li> i'm going to be the last sub-item!</li>").appendTo("ul ul:first");

    // $("ul ul:first").prepend("<li> i'm going to be the first sub-item!</li>");
    // $("ul ul").prepend("<li> i'm going to be the first sub-item!</li>");
    // $("<li> i'm going to be the first sub-item!</li>").prependTo("ul ul:first");
    $("<h4> Muhammad Mirza </h4>").prependTo("#content");

   // $(".red-box").after("<div class='red-box'>After Red Box </div>");
   // $(".blue-box").before("<div class='blue-box'>Before blue Box </div>")
//    $(".blue-box").before(function() {
//        return "<div class='blue-box'>Blue 2</div>"
//    });
    // $(".blue-box").before($(".red-box"));
    // $("p :first").after($("#list"));

    $(function() {
        var el = $('h1').siblings('div');
        console.log(el);
        el.each(function (index) {
          if (index < 3) {
            $(this).after($(this).clone());
          }
        });
      });
    

});