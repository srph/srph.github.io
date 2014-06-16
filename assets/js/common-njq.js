(function() {
	'use strict';

	// Untested
	// I don't code
	// in effin' vanilla js
	// wowowowowow much noob

	var change = function(color) {
		// body.animate({
		// 	backgroundColor: color
		// }, 500);
		// animate
	}

	var icon = document.getElementsByTagName('.connections li');
	var body = document.getElementsByTagName('html, body');

	var even = document.getElementsByTagName('.connections li:nth-child(2n) a');
	var odd = document.getElementsByTagName('.connections li:nth-child(2n + 1) a');

	/**
	 * Change background of background when a
	 * media icon is hovered
	 */
	even.addEventListener('hover', (function(e) {
		change('rgba(240, 61, 104, 1)');
	});
	odd.addEventListener('hover', (function(e) {
		change('rgb(49, 159, 221)');
	});

})();