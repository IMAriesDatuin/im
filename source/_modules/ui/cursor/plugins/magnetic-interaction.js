/* -------------------------------------------------- */
/* MAGNETIC INTERACTION
/* -------------------------------------------------- */

var magneticInteraction = (function magneticInteraction($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('magneticInteraction', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.magnetic-container');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var pos = { x: 0, y: 0 },
			ratio = 0.25,
			strength = 25,
			active = false;


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$element.on('mouseenter', function(e) {

			var $self = $(this);

			//Tween.to(this, 0.25, {scale: 0.9, ease: Expo.easeInOut});
			Tween.to($self.find('.magnetic'), 0.25, {scale: 1.05, ease: Back.easeOut});
			//active = true;

		}).on('mouseleave', function(e) {

			var $self = $(this);

			//Tween.to(this, 0.25, {scale: 1, ease: Expo.easeInOut});
			Tween.to($self.find('.magnetic'), 1, {scale: 1, x: 0, y: 0, ease: Expo.easeOut});
			//active = false;

		}).on('mousemove', function(e) {

			parallaxCursor(e, this, 3);
			parallaxInit(e, this);

		});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function parallaxInit(e, parent) {

			parallaxCalc(e, parent, parent.querySelector('.magnetic'), strength);

		}


		function parallaxCalc(e, parent, target, movement) {

			var boundingRect = parent.getBoundingClientRect();
			var relX = e.clientX - boundingRect.left;
			var relY = e.clientY - boundingRect.top;

			Tween.to(target, 0.5, {x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
								 y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
								 ease: Power2.easeOut});

		}


		function parallaxCursor(e, parent, movement) {

			var rect = parent.getBoundingClientRect();
			var relX = e.clientX - rect.left;
			var relY = e.clientY - rect.top;

			pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
			pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;

		}

	}

	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
