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


// $(function () {
//     $("ul ul:first").append("<li> i'm going to be the last sub-item!");
//     $("<li> i'm going to be the last sub-item!</li>").appendTo("ul ul:first");

//     $("ul ul:first").prepend("<li> i'm going to be the first sub-item!</li>");
//     $("ul ul").prepend("<li> i'm going to be the first sub-item!</li>");
//     $("<li> i'm going to be the first sub-item!</li>").prependTo("ul ul:first");
//     $("<h4> Muhammad Mirza </h4>").prependTo("#content");

//    $(".red-box").after("<div class='red-box'>After Red Box </div>");
//    $(".blue-box").before("<div class='blue-box'>Before blue Box </div>")
//    $(".blue-box").before(function() {
//        return "<div class='blue-box'>Blue 2</div>"
//    });
//     $(".blue-box").before($(".red-box"));
//     $("p :first").after($("#list"));

//     $(function() {
//         var el = $('h1').siblings('div');
//         console.log(el);
//         el.each(function (index) {
//           if (index < 3) {
//             $(this).after($(this).clone());
//           }
//         });
//       });


// });


$(function () {
    // $("li :last").replaceWith("<li>Replaced.</li>")

    // $("li :first").replaceWith(function(){
    //     return "<li>replaced with function</li>";

    // })
    // var firstListItem = $("ul :first")
    // $("p").replaceWith(firstListItem);

    // var greenbox = $(".green-box");

    // var el = $('h1').siblings('div');
    // console.log(el);
    // el.each(function (index) {
    //     if (index < 3) {
    //         $(this).replaceWith(greenbox.clone());
    //     }
    // });

    // $("<div class = 'green-box'>More Green!</div>").replaceAll(".red-box,.blue-box")


});


$(function () {
    // $("li").remove();
    // $('form').children().not("input:text,textarea,br").remove();


    // var detachedListItem = $("li").detach();

    // $("#content").append(detachedListItem);

    //$("p:first").empty();


    // $(".red-box, .green-box, .blue-box").empty();

    //asdsadsadsad

    //attr(), prop(), val()

    // var specialLink = $("#special-link");
    // console.log(specialLink.attr("href"));
    // console.log(specialLink.attr("title"));

    // specialLink.attr("href","http://www.google.com");
    // var checkbox = $("input:checkbox");
    // console.log(checkbox.prop("checked"));

    // var textinput = $('input:text');
    // textinput.val("Muhammad Mirza")
    // console.log(textinput.val());

    // var rangeInput = $("input[type='range']");
    // rangeInput.val("1")
    // console.log(rangeInput.val());

    // var imgSrc = $("img");
    // imgSrc.attr("src", "C:/JQuery/Tuts/images/pic.png")
    // console.log(imgSrc.attr("src"))
    // var galleryimage = $(".gallery").find("img").first();
    // var images = ["images/laptop-mobile_small.jpg", "images/pic.png","images/laptop-on-table_small.jpg","images/people-office-group-team_small.jpg"];
    // console.log(galleryimage.attr("src"))

    // var i=0;
    // setInterval(function() {
    //     i= (i+1)% images.length; // 0,1,2,0,1,2
    //     galleryimage.fadeOut(function(){
    //         $(this).attr("src", images[i]);
    //         console.log($(this).attr("src"))
    //         $(this).fadeIn();
    //     });
        
    // },2000);




});


$(function(){
    // $(".gallery").css("display","none");

    // var redBox = $('.red-box');
    // console.log(redBox.css("width"));
    // console.log(redBox.width());

    // redBox.css("background-color", "#AA7700");
    // $('p').css("font-size","18px");
    // redBox.css("width", "+=20px");
    // redBox.css("user-select","none");
    // var properties = $("p").css(['font-size', "line-height","color"])
    // console.log(properties);

    

    // $('a').addClass("fancy-link");
    // $('p:first').addClass("large emphasize");

    // $('li li').addClass(function(index){
    //     $(this).addClass("item-"+index);
    //     console.log("item-"+ index);
    // });

    // $('div').addClass(function(index, currentClass){
    //     if (currentClass=== "dummy") {
    //         return "red-box";
    //     }
    // });

    // $('.red-box').removeClass("red-box").addClass("green-box");

    // $(".dummy").removeClass("dummy").addClass("green-box");


    var gallery = $(".gallery")
    var images = [
        "images/laptop-mobile_small.jpg", 
        "images/pic.png","images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg",
    ];

    gallery.data("availableImages", images);
    console.log(gallery.data("availableImages"));
    gallery.data("name", "My Gallery!");
    console.log(gallery.data());
    gallery.removeData("name");
    console.log(gallery.data("name"));

    var i=0;
    gallery.find("img").on("click", function(){
        i = (i+1)%images.length;
        console.log("gallery was clicked");
        console.log(images[i]);
        $(this).fadeOut(function(){
            $(this).attr("src",images[i]).fadeIn();
        })
    })
});



$(function() {
    //text(), html()

    var firstPar = $("p:first");
    console.log(firstPar.text())
    console.log(firstPar.html());
    console.log($("p").html());

    // firstPar.text("<strong>Hello</strong> World!");
    // firstPar.html("<strong>Hello</strong> World!"); 

    var text = firstPar.html();
    firstPar.html(text + ". This text is appended.");


})


$(function() { 
    $("#btn-click").click(function(event){
        console.log(event);
        alert("button was clicked");
    });



    $(".red-box").click(function(event){
        console.log(event);
        $(this).fadeTo(1000, 0.5);
    });

    $("#btn-hover").hover(function(){
        console.log("Button was hovered.")

    });

    $(".green-box").hover(function() {
        $(this).text(("green button was hovered!"));
    })

    var blueBox = $(".blue-box");

    // blueBox.mouseenter(function(){
    //     $(this).stop().fadeTo(500,0.7);
    // });

    // blueBox.mouseleave(function(){
    //     $(this).stop().fadeTo(500,1);
    // })

    //hover(handlerIn, handlerOut)

    blueBox.hover(function(){
        $(this).stop().fadeTo(500,0.7);
    },function(){
        $(this).stop().fadeTo(500,1);
    })

    // .on("click", function(){...})

    // $("html").on("click keydown", function() {
    //     console.log("mouse was clicked or key was pressed.")
    // })

    


})