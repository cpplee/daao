// JavaScript Document
jQuery(document).ready(function($) {

    // Header Search form Button effects
    var $search_input = $(".header-search-form-input");
    var search_width = $search_input.width();
    var $search_button = $(".header-search-form-button");
    $(".header-search-form-button i").click(function() {

        var button_icon = $search_button.find("i").attr("class");
        if (button_icon === "icon-search") {
            $search_button.animate({"height": "82px"}, 300, function() {
                $search_button.find("i").removeClass("icon-search").addClass("icon-remove");
                $search_input.show().css({
                    width: 0
                }).animate({
                    width: search_width
                }, 300);
            });
        }
        else if (button_icon === "icon-remove") {
            $search_input.stop().animate({width: 0}, 100, function() {
                $search_input.hide();
                $search_button.animate({"height": "42px"}, 200, function() {
                    $search_button.find("i").removeClass("icon-remove").addClass("icon-search");
                });
            });
        }
    });
    $search_input.blur(function() { // Hide search form, when it loses the focus
        $search_input.stop().animate({width: 0}, 100, function() {
            $search_input.hide();
            $search_button.animate({"height": "42px"}, 200, function() {
                $search_button.find("i").removeClass("icon-remove").addClass("icon-search");
            });
        });
    });

    // Magnific Popup Initialization
    $('.bubble-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom'
    });

    // Calendar Grid Plugin init
    Grid.init();

    // jPages paginated blocks
    var $holder = $("body").find(".holder");
    if (!$holder.length) {
        $("body").append("<div class='holder'></div>");
    }
    $("div.holder").jPages({
        containerID: "recent-works",
        previous: ".block-recent-works a[data-role='prev']",
        next: ".block-recent-works a[data-role='next']",
        animation: "fadeInRight",
        perPage: 3
    });
    
    $("div.holder").jPages({
        containerID: "special-rooms",
        previous: ".block-special-rooms a[data-role='prev']",
        next: ".block-special-rooms a[data-role='next']",
        animation: "fadeInRight",
        perPage: 1
    });
    
    $("div.holder").jPages({
        containerID: "latest-posts",
        previous: ".block-latest-posts a[data-role='prev']",
        next: ".block-latest-posts a[data-role='next']",
        animation: "bounceInRight",
        perPage: 4
    });

    $("div.holder").jPages({
        containerID: "why-choose-us",
        previous: ".block-why-choose-us a[data-role='prev']",
        next: ".block-why-choose-us a[data-role='next']",
        animation: "flipInY",
        perPage: 4
    });

    $("div.holder").jPages({
        containerID: "what-clients-say",
        previous: ".wcs a[data-role='prev']",
        next: ".wcs a[data-role='next']",
        animation: "fadeInRight",
        perPage: 1
    });

    $("div.holder").jPages({
        containerID: "twitter-feed",
        previous: ".block-twitter-feed a[data-role='prev']",
        next: ".block-twitter-feed a[data-role='next']",
        animation: "fadeInRight",
        perPage: 1
    });
    $("div.holder").jPages({
        containerID: "event-schedule",
        previous: ".block-event-schedule a[data-role='prev']",
        next: ".block-event-schedule a[data-role='next']",
        animation: "fadeInUp",
        perPage: 4
    });


    // Toggle Box functions
    $(".toggle-box-header").click(function() {
        var $obj = $(this);
        if ($obj.hasClass("expanded")) {
            $obj.removeClass("expanded");
            $obj.next("div").slideUp();
        }
        else {
            $obj.addClass("expanded");
            $obj.next("div").slideDown("slow");
        }
    });
    $('#dp1').datepicker();
    $('#dp2').datepicker();
    $('#dp3').datepicker();
    $('#dp4').datepicker();
    $(".selectbox").styler();
    /** 
     * Testimonials arrow adjustment
     * 
     * First of all, we will move arrow to top when page is loaded, if the window width is smaller than 767px (tablets & mobiles)
     */
    var $testimonialsLeftSided = $(".text-testimonial-left");
    var $testimonialsRightSided = $(".text-testimonial-right");
    if ($(window).width() < 767) {
        $testimonialsLeftSided.removeClass("text-testimonial-left").addClass("text-testimonial-top");
        $testimonialsRightSided.removeClass("text-testimonial-right").addClass("text-testimonial-top");
    }
    /*
     * Secondly, we will do the same operation when window width becomes smaller than 767px,
     * and vice versa when window width becomes greater than 767px
     */
    $(window).resize(function() {
        if ($(window).width() < 767) {
            $testimonialsLeftSided.removeClass("text-testimonial-left").addClass("text-testimonial-top");
            $testimonialsRightSided.removeClass("text-testimonial-right").addClass("text-testimonial-top");
        }
        else {
            $testimonialsLeftSided.removeClass("text-testimonial-top").addClass("text-testimonial-left");
            $testimonialsRightSided.removeClass("text-testimonial-top").addClass("text-testimonial-right");
        }
    });
    $(".flexisel").flexisel({
        visibleItems: 5,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3
            }
        }
    });

    $(function() {
        var $pxs_container = $('#pxs_container');
        $pxs_container.parallaxSlider();
    });

    // Clone portfolio items to get a second collection for Quicksand plugin
    var $portfolioClone = $(".portfolio").clone();

    // Attempt to call Quicksand on every click event handler
    $(".filter a").click(function(e) {
        $(".filter li").removeClass("current");

        // Get the class attribute value of the clicked link
        var $filterClass = $(this).parent().attr("class");

        var $filteredPortfolio;

        if ($filterClass === "all") {
            $filteredPortfolio = $portfolioClone.find("li");
        } else {
            $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
        }

        // Call quicksand
        $(".portfolio").quicksand($filteredPortfolio, {
            duration: 400,
            easing: 'swing'
        }, function() {

            $('.bubble-popup').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom'
            });

        });


        $(this).parent().addClass("current");

        // Prevent the browser jump to the link anchor
        e.preventDefault();
    });

    $('.bxslider-office').bxSlider({pagerCustom: ".bxpager"});
    


});


