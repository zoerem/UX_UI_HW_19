$(document).ready(function(){


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// THINGS THAT DIDN'T WORK BUT MIGHT BE USEFUL

// $("#project-LF").css("transform", "translateX(700px)");


// $window.onscroll = function() {myFunction()};
// $(document).on('scroll', '#pC-1', myFunction());

// function myFunction(){
//     if(document.body.scrollTop<700 || document.documentElement.scrollTop <700){
//         $("#project-LF").css("transform", "translateX(900px)");
//     }

//     else(document.body.scrollTop > 900 || document.documentElement.scrollTop >900) {
//         document.getElementById("project-LF");
//     }
// };

// function myFunction(){
//     if(document.body.scrollTop<700 || document.documentElement.scrollTop <700){
//         $("#project-LF").css("transform", "translateX(900px)");
//     }

//     else(document.body.scrollTop > 900 || document.documentElement.scrollTop >900) {
//         $("#project-LF").css("animate", "slideLeft");
//     }
// };

// $("#project-LF").hide();
// $("#pC-1").on(".mouseenter"(){
//     $("#project-LF").css("transform", "translateX(-700px)");
// });

// $('.arrows-container').click(function(){
//     // $('#arrow-top').effect( "bounce" );
//     $('#arrow-top').css("animate", "bounceArrow");
// });

 





// below closing tag for document-ready function.
});