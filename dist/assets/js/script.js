$(document).ready(function(){
	/*----------------------------------------------
	  MOBILE NAVIGATION
	----------------------------------------------*/
	if($(window).width() < 601) {
		// HIDE MENU
		$('.menu-list').css({"display":"none"});
		$('#menu').click(function(){
			$('.menu-list').toggle();
		});
		$('#about-link').click(function() {
			$('.menu-list').hide();
		});
		$('#download-link').click(function() {
			$('.menu-list').hide();
		});
		$('#contact-link').click(function() {
			$('.menu-list').hide();
		});

		$(window).scroll(function() {
			$('.scroll').css("opacity", 1 -
				$(window).scrollTop()/100);
		});
	}
	/*----------------------------------------------
	  NAVIGATION -- SCROLL TO ELEMENT ON CLICK
	----------------------------------------------*/
	// SCROLL TO TOP
	$('nav').on('click','.home-logo', function() {
		$('html, body').animate({
			scrollTop: $('#home').offset().top
		}, 500);
	});
	// SCROLL TO ABOUT SECTION
	$('nav').on('click','#about-link', function() {
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 500);
	});
	// SCROLL TO DEMO SECTION
	$('nav').on('click','#download-link', function() {
		$('html, body').animate({
			scrollTop: $('#download').offset().top
		}, 500);
	});
	// SCROLL TO CONTACT SECTION
	$('nav').on('click','#contact-link', function() {
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 500);
	});
	/*----------------------------------------------
	  NAVIGATION -- CHANGE NAVIGATION BAR COLOR
	----------------------------------------------*/
	// CHANGE NAV BACKGROUND ON SCROLL FOR MOBILE
	$(window).scroll(function() {
		if($(window).scrollTop() >= 251) {
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR TABLET
	$(window).scroll(function() {
		if($(window).scrollTop() >= 548) {
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1024px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 720) {
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1280px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 890) {
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1440px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1000) {
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1920px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1334) {
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		}
	});
	/*----------------------------------------------
	  SCROLL ANIMATION - FADE IN FROM BOTTOM
	----------------------------------------------*/
	var $animation_elements = $('.bounce-up');
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
	    }
	    // else {
	    //   $element.removeClass('in-view');
	    // }
	  });
	}

	if($(window).width() >= 1200) {

		$('nav').on('click','#about-link', function(){
			$('.bounce-up').addClass('nobounce');
			$('.container').addClass('containerbounce');
		});

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
	}
});