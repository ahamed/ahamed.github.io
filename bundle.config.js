module.exports = {
	bundle: {
		bundle: {
			scripts: [
				'./assets/js/jquery.appear.min.js',
				'./assets/js/jquery.counterup.min.js',
				'./assets/js/jquery.easing.min.js',
				'./assets/js/jquery.magnific-popup.min.js',
				'./assets/js/parallax.min.js',
				'./assets/js/popper.min.js',
				'./assets/js/scrolling-nav.js',
				'./assets/js/slick.js',
				'./assets/js/waypoints.min.js',
				'./assets/js/main.js',
			],
			styles: [
				'./assets/css/bootstrap.css',
				'./assets/css/default.css',
				'./assets/css/LineIcons.css',
				'./assets/css/magnific-popup.css',
				'./assets/css/slick.css',
				'./assets/css/style.css',
			],
			options: {
				rev: false,
			},
		},
		vendor: {
			scripts: [
				'./assets/js/vendor/modernizr-3.6.0.min.js',
				'./assets/js/vendor/jquery-1.12.4.min.js',
				'./assets/js/vendor/bootstrap.min.js',
			],
			options: {
				rev: false,
			},
		},
	},
};
