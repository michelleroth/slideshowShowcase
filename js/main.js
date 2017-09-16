
$(document).ready(function() {

    // determine the new width of each slide
    var viewportWidth = $(window).width();

    var visibleSlides;
    if (viewportWidth < 700) {
        visibleSlides = 1;
    } else {
        visibleSlides = 3;
    }
    // parseInt();
    var slideMargin = parseInt($(".slider ul li").css("margin-left")) * 2;
    console.log(slideMargin);
    var sliderWidth = $(".slider").width();
    //console.log(sliderWidth);
    // Order of operations: P E M D A S
    var slideWidth = (sliderWidth - (slideMargin * visibleSlides)) / visibleSlides;
    //console.log(slideWidth);
    $(".slider ul li").css({
        "width": slideWidth + "px"
    }); // css method end

    var currentCount = 0;
    checkArrowDisplay(currentCount);
    var totalSlides = $(".slider ul li").length;
    $(".slider ul").css({
        "width": ((slideWidth + slideMargin) * totalSlides) + "px"
    }); // css method end
    //console.log(totalSlides);

    function checkArrowDisplay(count) {
        if (count === 0) {
            $("#prevBtn").hide();
        } else if (count > 0 && count < totalSlides - 3) {
            $("#prevBtn").show();
            $("#nextBtn").show();
        } else {
            $("#nextBtn").hide();
        } // end if
    } // checkArrowDisplay function end

    $("#nextBtn").click(function(event) {
        //console.log(event);
        event.preventDefault();

        if (currentCount >= totalSlides - 3) {
            currentCount = totalSlides - 3;
        } else {
            currentCount++;
            $(".slider ul").animate({
                "margin-left": "-=" + (slideWidth + slideMargin) + "px"
            }); // animate method end
        } // end if
        checkArrowDisplay(currentCount);
        console.log(slideWidth);
    }); // click method end

    $("#prevBtn").click(function(event) {
        //console.log(event);
        event.preventDefault();
        if (currentCount <= 0) {
            currentCount = 0;
        } else {
            currentCount--;
            $(".slider ul").animate({
                "margin-left": "+=" + (slideWidth + slideMargin) + "px"
            }); // animate method end
        } // end if
        checkArrowDisplay(currentCount);
    }); // click method end

}); // ready method end