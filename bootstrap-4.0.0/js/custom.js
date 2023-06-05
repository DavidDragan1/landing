//owl carousel //
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center:false,
        loop:false,
        nav:false,
        dots:true,
        autoWidth: false,
        margin:0,
        items:1,
        autoplay:false,
        autoplayTimeout:4000,
        responsive: {
            0: {
                items: 1
            },
            814: {
                items: 1
            },
            1024: {
                items: 2
            },
            1920:{
                items: 3
            }
        }
    })


    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }

});

// Get to top//
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Go to top Ended//


//Header Fixed Ended//
$(function() {
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 50) {
                    $(".header").addClass("active-header");
                } else {
                    //remove the background property so it comes transparent again (defined in your css)
                    $(".header").removeClass("active-header");
                }
            });
        });
// Header Fixed Ended//

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });