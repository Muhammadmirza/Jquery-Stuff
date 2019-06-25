$(function () {
    // $.get(), $.post(), $.ajax(), $.getJSON()

    // $('#code').load("js/ajaxtest.js");

    // $("#code").load("js/ajaxtest.js", function (response, status) {
    //     if (status == "error") {
    //         alert("could not find file");
    //     }
    //     console.log(response);
    // });


    //JSON, $.getJSON()

    var flickrAPIUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

    //Json P vs Json request. ??meaning?

    $.getJSON(flickrAPIUrl, {
        //options..
        tags: "sun, beach",
        tagmode: "any",
        format: "json"
    }).done(function (data) {
        //Next steps after success
        console.log(data);
        $.each(data.items, function (index, item) {
            console.log(index + ": " + item.title + " | " + item.author);
            $("<img>").attr("src", item.media.m).appendTo("#flickr")
            if (index == 4) {
                return false;
            }
        });
    }).fail(function () {
        //Next steps after failure
        alert("Ajax call failed")
    })
});

//delegated event and images from flickr.

$(function () {
    var flickr = $("#flickr");
    flickr.find("img").css("width", "20%").css("opacity", "0.7")
    flickr.on("mouseenter", "img", function () {
        $(this).stop().fadeTo(400, 1);
    })
    flickr.on("mouseleave", "img", function () {
        $(this).stop().fadeTo(400, 0.7);
    })

    flickr.on("click", "img", function () {
        console.log("image clicked")
        var source = $(this).attr("src");
        var image = $("<img>").attr("src", source).css("width", "100%");
        $(".lightbox").empty().append(image).fadeIn(200);
    });
    $(".lightbox").click(function () {
        $(this).stop().fadeOut();
    })
});
