//ddsmooth | Main menu
ddsmoothmenu.init({
    mainmenuid: "menu", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    method: 'toggle',
    closeonnonmenuclick: true, //when should all "toggle" menus close? 
    closeonmouseout: false,
    contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});
// Homepage Main Sliders
jQuery(document).ready(function () {
    if (jQuery('#slides_full ul li').length < 2) {
        jQuery('#slides_full').superslides({
            play: 0
        });
    } else {
        jQuery('#slides_full').superslides({
            animation: 'fade',
            slide_easing: 'easeInOutCubic',
            slide_speed: 800,
            pagination: true,
            hashchange: true,
            scrollable: true,
            play: jQuery("#txt_slidespeed").val()
        });
    }
});
//Homepage Blogs
jQuery(window).load(function () {
    if (jQuery(window).width() < 641) {
        jQuery('div.home_blog_content').masonry().masonry('destroy');
    } else {
        jQuery('div.home_blog_content').masonry({
        });
    }
});
// Homepage Blogs while resizing
jQuery(window).resize(function () {
    if (jQuery(window).width() < 641) {
        jQuery('div.home_blog_content').masonry().masonry('destroy');
    } else {
        jQuery('div.home_blog_content').masonry({
        });
    }
});
// Gallery shortcode
jQuery(window).load(function () {
    if (jQuery(window).width() < 992) {
        jQuery('div.gallery').masonry({
            "itemSelector": ".gall-img-section",
            "columnWidth": ".grid-sizer-gal",
        });
    }
});
jQuery(window).resize(function () {
    if (jQuery(window).width() < 992) {
        jQuery('div.gallery').masonry({
            "itemSelector": ".gall-img-section",
            "columnWidth": ".grid-sizer-gal",
        });
    }
});
// Destroy effect of masonry in large screen
jQuery(window).resize(function () {
    if (jQuery(window).width() > 992) {
        jQuery('div.gallery').masonry().masonry('destroy');
    }
});
//Gallery
jQuery(document).ready(function () {
    jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'normal', theme: 'facebook', slideshow: 3000, autoplay_slideshow: false, social_tools: false});
});
//Gallery
jQuery(document).ready(function () {
    jQuery(".gallery_blog:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'normal', theme: 'facebook', slideshow: 3000, autoplay_slideshow: false, social_tools: false});
});
//bx-slider | Testimonial section
jQuery(document).ready(function () {
    jQuery('.bxslider').bxSlider({
        mode: 'fade',
        slideMargin: 5,
        auto: true,
        autoControls: true
    });
});
//Flexslider | Happy Customer Section
//<![CDATA[
jQuery.noConflict();
jQuery(document).ready(function () {

    var owl = jQuery("#owl-client");

    owl.owlCarousel({
        rtl:false,
        loop: true,
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        slideSpeed: 300,
        //Autoplay
        autoPlay: true,
        stopOnHover: true,
    });

    // Custom Navigation Events
    jQuery(".next").click(function () {
        owl.trigger('owl.next');
    })
    jQuery(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    jQuery(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    jQuery(".stop").click(function () {
        owl.trigger('owl.stop');
    })

});
// SinglePageNav 
// Prevent console.log from generating errors in IE for the purposes of the demo
if (!window.console)
    console = {log: function () {
        }};
//Home page Animation
jQuery(document).ready(function (jQuery) {
    var animated_element = jQuery('.animated');
    function image_animation() {
        animated_element.each(function () {
            var get_offset = jQuery(this).offset();
            if (jQuery(window).scrollTop() + jQuery(window).height() > get_offset.top + jQuery(this).height() / 2) {
                jQuery(this).addClass('animation_started');
                // var el = $(this).find('.animated');
                setTimeout(function () {
                    jQuery(this).removeClass('animated').removeAttr('style');
                }, 300);
            }
        });

    }
    jQuery(window).scroll(function () {
        image_animation();
    });
    jQuery(window).load(function () {
        setInterval(image_animation, 300);
    });

});
jQuery(document).ready(function () {
    /* bx slider */
    /* bx slider ends */
    // Cache the Window object
    $window = jQuery(window);
    jQuery('section[data-type="background"]').each(function () {
        var $bgobj = jQuery(this); // assigning the object                    
        jQuery(window).scroll(function () {
            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!								
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% ' + yPos + 'px';
            // Move the background
            $bgobj.css({backgroundPosition: coords});
        }); // window scroll Ends
    });
});
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");

/* catch ie10 */
if (/*@cc_on!@*/false) {
    document.documentElement.className += ' ie10';
}
jQuery(document).ready(function () {
    jQuery(".left_panal").css("height", jQuery(window).height());
    jQuery(".left_panal1").css("height", jQuery(window).height());
    jQuery('.woocommerce .page-content ul.products li').addClass('col-md-4 col-sm-4 col-xs-12');
});
jQuery(window).resize(function () {
    jQuery(".left_panal").css("height", jQuery(window).height());
    jQuery(".sidebar_container_small1").css("height", jQuery(window).height());
});
jQuery("document").ready(function () {
    jQuery('.flexslider_crousel').flexslider({
        animation: "slide",
        slideshow: true,
        animationLoop: true,
        slideshowSpeed: 3000,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 5,
        move: 2,
        controlNav: false,
        pausePlay: true,
    });
});
// The actual plugin
(function (jQuery) {
    jQuery(window).ready(function () {
        /* Page Scroll to id fn call */
        jQuery(".left_panal a").mPageScroll2id({
            highlightSelector: ".left_panal a"
        });
        /* demo functions */
        jQuery("a[rel='next']").click(function (e) {
            e.preventDefault();
            var to = jQuery(this).parent().parent(".section").next().attr("id");
            jQuery.mPageScroll2id("scrollTo", to);
        });
//        Disabling prevent default on next post link
        jQuery("span.nav-next a[rel='next']").unbind('click');
    });
})(jQuery);
jQuery(document).ready(function () {
    jQuery('.menu-link').bigSlide({
        'state': menu_obj['status'],
        'side': menu_obj['position']
    });
});
jQuery(window).load(function () {
    if (jQuery(window).width() < 991) {
        if (jQuery("#wpadminbar").length && jQuery('#wpadminbar').outerHeight() == 32) {
            jQuery('.menu-link').css({'top': 36});
        } else if (jQuery("#wpadminbar").length && jQuery('#wpadminbar').outerHeight() == 46) {
            jQuery('.menu-link').css({'top': 50});
        }
    }
});
jQuery(window).resize(function () {
    if (jQuery(window).width() < 991) {
        if (jQuery("#wpadminbar").length && jQuery('#wpadminbar').outerHeight() == 32) {
            jQuery('.menu-link').css({'top': 36});
        } else if (jQuery("#wpadminbar").length && jQuery('#wpadminbar').outerHeight() == 46) {
            jQuery('.menu-link').css({'top': 50});
        }

    }
});
jQuery(document).ready(function () {
    if (menu_obj['position'] == 'left') {
        jQuery('.menu-link').click(function () {
            if (jQuery(window).width() > 991) {
                if (jQuery('.menu-link').hasClass('active')) {
                    jQuery('.container').css({'margin-left': '59px'});
                    jQuery('.client_wrapper .customNavigation').css({'left': '40%'});
                } else {
                    jQuery('.container').css({'margin-left': 'auto'});
                    jQuery('.client_wrapper .customNavigation').css({'left': '50%'});
                }
            }
        });
    } else {
        jQuery('.menu-link').click(function () {
            if (jQuery(window).width() > 991) {
                if (jQuery('.menu-link').hasClass('active')) {
                    jQuery('.container').css({'margin-right': '59px'});
                    jQuery('.client_wrapper .customNavigation').css({'right': '40%'});
                } else {
                    jQuery('.container').css({'margin-right': 'auto'});
                    jQuery('.client_wrapper .customNavigation').css({'right': '50%'});
                }
            }
        });
    }
});
jQuery(window).resize(function () {
    if (menu_obj['position'] == 'left') {
        jQuery('.menu-link').click(function () {
            if (jQuery(window).width() > 991) {
                if (jQuery('.menu-link').hasClass('active')) {
                    jQuery('.container').css({'margin-left': '59px'});
                    jQuery('.client_wrapper .customNavigation').css({'left': '40%'});
                } else {
                    jQuery('.container').css({'margin-left': 'auto'});
                    jQuery('.client_wrapper .customNavigation').css({'left': '50%'});
                }
            }
        });
    } else {
        jQuery('.menu-link').click(function () {
            if (jQuery(window).width() > 991) {
                if (jQuery('.menu-link').hasClass('active')) {
                    jQuery('.container').css({'margin-right': '59px'});
                    jQuery('.client_wrapper .customNavigation').css({'right': '40%'});
                } else {
                    jQuery('.container').css({'margin-right': 'auto'});
                    jQuery('.client_wrapper .customNavigation').css({'right': '50%'});
                }
            }
        });
    }
});
//Disable map scroll on mobile devices
//Homepage Blogs
jQuery(window).load(function () {
    if (jQuery(window).width() < 769) {
        jQuery('div.contact-map iframe').css({'pointer-events': 'none'});
    } else {
        jQuery('div.contact-map iframe').css({'pointer-events': 'all'});
    }
});
// Homepage Blogs while resizing
jQuery(window).resize(function () {
    if (jQuery(window).width() < 769) {
        jQuery('div.contact-map iframe').css({'pointer-events': 'none'});
    } else {
        jQuery('div.contact-map iframe').css({'pointer-events': 'all'});
    }
});
