/* -------------------------------------------------- */
/* CURSOR
/* -------------------------------------------------- */

var cursor = (function cursor($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('cursor', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $cursor = $('.cursor'),
			$cursorCore = $('.cursor-core'),
			$cursorTrail = $('.cursor-trail'),

			$cursorPrevious = $('.previous'),
			$cursorNext = $('.next'),
			$cursorPlayPause = $('.cursor-play-pause-content'),
			$cursorDraggable = $('.cursor-draggable-content'),
			$cursorElements = $('a, button, .button, .cursor-hover, .dot');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var active = false;


		/* -------------------------------------------------- */
		/* LOGIC
		/* -------------------------------------------------- */

		if (isEdge || isExplorer) {

			$cursor.addClass('is-ie');

		}


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		/*
		function trail(e) {

			Tween.to($cursorTrail, 0.08, { css: {top: e.clientY, left: e.clientX} });
			
		};
		*/


		$cursorElements.each(function() {

			var $self = $(this);

			$cursorElements.not($cursorPrevious).not($cursorNext).not($cursorDraggable).not($cursorPlayPause).on('mouseover', function() {

				$cursor.addClass('is-hovering');

			}).on('mousedown', function() {
				
				$cursor.addClass('is-down');

			}).on('mouseout mouseup', function() {

				$cursor.removeClass('is-hovering');

			}).on('mouseleave', function() {

				$cursor.removeClass('is-down');

			});

		});


		$cursorPrevious.each(function() {

			var $self = $(this);

			$self.on('mouseover', function() {

				$cursor.addClass('previous');

			}).on('mouseout', function() {

				$cursor.removeClass('previous');

			});

		});


		$cursorNext.each(function() {

			var $self = $(this);

			$self.on('mouseover', function() {

				$cursor.addClass('next');

			}).on('mouseout', function() {

				$cursor.removeClass('next');

			});

		});


		$cursorDraggable.each(function() {

			var $self = $(this);

			$self.on('mouseover', function() {

				$cursor.addClass('drag');

			}).on('mouseout', function() {

				$cursor.removeClass('drag');

			});

		});


		$cursorPlayPause.each(function() {

			var $self = $(this);

			$self.on('mouseover', function() {

				$cursor.addClass('play');

			}).on('mouseout', function() {

				$cursor.removeClass('play');

			});

		});


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('mousemove', _.throttle( function(e) { 

			var mouseX = e.clientX,
				mouseY = e.clientY;

			function mousemove() {

				if (!active) {

					//cursor.style.opacity = 1;
					Tween.set(cursor, {autoAlpha: 1});
					active = true;

				}

				//cursor.css({top: mouseY, left: mouseX});
				Tween.to($cursor, 0.08, { css: {top: mouseY, left: mouseX} });
				Tween.to($cursorTrail, 0.08, { css: {top: e.clientY, left: e.clientX} });
				//trail(e);

			}

			raf(mousemove);

		}, 0, { leading: interval.leading, trailing: interval.trailing } ));


		$win.on('mouseover', function(e) {

			//Tween.to($cursor, 0.5, {opacity: 0, ease: Expo.easeInOut});
			active = false;

		});


		$win.on('mouseenter', function(e) {

			Tween.to($cursor, 0.5, {autoAlpha: 1, ease: Expo.easeInOut});

		});


		$win.on('mouseleave', function(e) {

			$cursor.removeClass('is-active previous next is-dragging');
			Tween.to($cursor, 0.5, {autoAlpha: 0, ease: Expo.easeInOut});

		});


		return {
			$cursor: $cursor,
			$cursorCore: $cursorCore,
			$cursorTrail: $cursorTrail
		};

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init,
		$cursor: init.$cursor,

	};


}(jQuery, window, document));
