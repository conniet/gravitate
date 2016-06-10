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
			// $('nav').css("background-color", "rgba(246,248,240,.9)");
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			// $('nav').css("background-color", "rgba(246,248,240,.6)");
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR TABLET
	$(window).scroll(function() {
		if($(window).scrollTop() >= 548) {
			// $('nav').css("background-color", "rgba(246,248,240,.9)");
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			// $('nav').css("background-color", "rgba(246,248,240,.6)");
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1024px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 720) {
			// $('nav').css("background-color", "rgba(246,248,240,.9)");
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			// $('nav').css("background-color", "rgba(246,248,240,.6)");
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1280px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 890) {
			// $('nav').css("background-color", "rgba(246,248,240,.9)");
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			// $('nav').css("background-color", "rgba(246,248,240,.6)");
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1440px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1000) {
			// $('nav').css("background-color", "rgba(246,248,240,.9)");
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			// $('nav').css("background-color", "rgba(246,248,240,.6)");
			$('nav').css("background-color", "rgba(16,26,30,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1920px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1334) {
			// $('nav').css("background-color", "rgba(246,248,240,.9)");
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		} else {
			// $('nav').css("background-color", "rgba(246,248,240,.6)");
			$('nav').css("background-color", "rgba(16,26,30,.9)");
		}
	});
});