$(document).ready(function(){

  //// SLICK SLIDER
  $('.slider').slick();

  // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });



});

// Keep top nav on top when scrolling:

$(document).scroll(function() {
  $('div#nav-main').css("background-color", "white")
  $('div#nav-main').css("z-index", "1")
  $('div#nav-main').css("position", "relative;")
  $('div#nav-main').css("border-bottom", "1px solid #7a7a7a")
})

// Background image sizing:

$(window).load(function() {    

  var theWindow        = $(window),
      $bg              = $("#bg"),
      aspectRatio      = $bg.width() / $bg.height();
                    
  function resizeBg() {
    
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
        $bg
          .removeClass()
          .addClass('bgheight');
    } else {
        $bg
          .removeClass()
          .addClass('bgwidth');
    }
          
  }
                          
  theWindow.resize(resizeBg).trigger("resize");

});
