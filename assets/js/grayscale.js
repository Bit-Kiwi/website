(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    const { host, pathname, hash } = new URL(this.getAttribute('href'), document.baseURI)
    if (location.pathname.replace(/^\//, '') == pathname.replace(/^\//, '') && location.hostname == host) {
      var target = $(hash);
      target = target.length ? target : $('[name=' + hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
