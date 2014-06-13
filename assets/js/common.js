(function($) {
	'use strict';

	var body = $('html, body');

	/**
	 * Hide the browser's scrollbar
	 */
	body.addClass('hide-scrollbar');

	/**
	 * Animate the body's background color
	 */
	var change = function(color) {
		body.animate({
			backgroundColor: color
		}, 500);
	}

	/**
	 * Move window to given element
	 */ 
	var move = function(elm) {
		body.animate({
			scrollTop: elm + 'px'
		}, 700);
	}

	var even = $('.connections li:nth-child(2n)');
	var odd = $('.connections li:nth-child(2n + 1)');

	/**
	 * Change background of background when a
	 * media icon is hovered
	 */
	even.hover(function(e) {
		change('rgba(240, 61, 104, 1)');
	});
	odd.hover(function(e) {
		change('rgb(49, 159, 221)');
	});

	/**
	 * Button event listener move to given id
	 */
	var btn = $('a.btn');
	btn.on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var location = $(href);

		move( location.offset().top );
	});

	/**
	 * Arrow event listener, move to given id
	 */
	var arrow = $('.up-caret-circle');
	arrow.on('click', function(e) {
		e.preventDefault();
		var id = '#' + $(this).data('move-to-id');
		var location = $( id );

		move( location.offset().top );
	});

})(window.jQuery);