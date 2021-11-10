$(function(){
    // toggle menu in media smaller than lg
    $(".icon-menu3").on("click",function(){
        if($(this).next().is("ul")){
            $(this).next().toggleClass("show-flex")
        }
    })
    // End

    // make height and width of slider to be suit of window
    var heighWin = $(window).height(),
    heightHead=$("header").outerHeight();
    $(".slider-inner").height(heighWin-heightHead);
    $(window).resize(function(){
        var heighWin = $(window).height(),
        heightHead=$("header").outerHeight();
        $(".slider-inner").height(heighWin-heightHead);
    })
    // End
    // active links transvers if has class active
    $("header ul li a").click(function(){
        if($(this).parent().hasClass("active-link")!=true){
            $(this).parent().addClass("active-link").siblings().removeClass("active-link");
        }
    })
    // slider show and hidden
    // TO Right
    $(".icon-arrow-right").click(function(){
        if($(".slider-inner .active-slider").is(":last-child")){
            $(".slider-inner .active-slider").removeClass("active-slider");
            $(".slider-inner img").first().addClass("active-slider");
        }
        else{
            $(".slider-inner .active-slider").removeClass("active-slider").next().addClass("active-slider")
        }
    })
    // TO Left
    $(".icon-arrow-left").click(function(){
        if($(".slider-inner .active-slider").is(":first-child")){
            $(".slider-inner .active-slider").removeClass("active-slider");
            $(".slider-inner img").last().addClass("active-slider");
        }
        else{
            $(".slider-inner .active-slider").removeClass("active-slider").prev().addClass("active-slider")
        }
    })

})