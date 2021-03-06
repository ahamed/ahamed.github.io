(function ($) {
	'use strict';

	//===== Prealoder

	$(window).on('load', function (event) {
		$('.preloader').fadeOut(50);
	});

	//===== Mobile Menu

	$('.navbar-toggler').on('click', function () {
		$(this).toggleClass('active');
	});

	$('.navbar-nav a').on('click', function () {
		$('.navbar-toggler').removeClass('active');
	});

	//===== close navbar-collapse when a  clicked

	$('.navbar-nav a').on('click', function () {
		$('.navbar-collapse').removeClass('show');
	});

	//===== Sticky

	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
			$('.navigation').removeClass('sticky');
		} else {
			$('.navigation').addClass('sticky');
		}
	});

	//===== Section Menu Active

	var scrollLink = $('.page-scroll');
	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 73;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});

	// Parallaxmouse js

	function parallaxMouse() {
		if ($('#parallax').length) {
			var scene = document.getElementById('parallax');
			var parallax = new Parallax(scene);
		}
	}
	parallaxMouse();

	//===== Progress Bar

	if ($('.progress-line').length) {
		$('.progress-line').appear(
			function () {
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width', percent + '%');
			},
			{ accY: 0 }
		);
	}

	//===== Counter Up

	$('.counter').counterUp({
		delay: 10,
		time: 1600,
	});

	//===== Magnific Popup

	$('.image-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});

	//===== Back to top

	// Show or hide the sticky footer button
	$(window).on('scroll', function (event) {
		if ($(this).scrollTop() > 600) {
			$('.back-to-top').fadeIn(200);
		} else {
			$('.back-to-top').fadeOut(200);
		}
	});

	//Animate the scroll to yop
	$('.back-to-top').on('click', function (event) {
		event.preventDefault();

		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1500
		);
	});

	//=====

	// Open mail box
	$('#contact-form').on('submit', function (e) {
		e.preventDefault();
		const data = $(this).serializeArray();

		const name = data.find(function (item) {
			return item.name === 'name';
		});
		const email = data.find(function (item) {
			return item.name === 'email';
		});
		const message = data.find(function (item) {
			return item.name === 'message';
		});

		if (!name || !email || !message) return;

		const receiver = 'sajeeb07ahamed@gmail.com';
		const subject =
			'A message from "' + name.value + ':' + email.value + '"';

		window.open(
			'mailto:' +
				receiver +
				'?subject=' +
				subject +
				'&body=' +
				message.value
		);
	});
})(jQuery);
