// Initate AOS
AOS.init();

// Navigation scroll shadow
$(window).scroll(function() {

    var scrolling = $(window).scrollTop();

    if(scrolling > 50) {
        $("header").addClass("shadow");
    } else {
        $("header").removeClass("shadow");
    }
});


$(".nav_container").click(function(){
    alert("in nav");
    $(".navigation").toggleClass("resp");
});


