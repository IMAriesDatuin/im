/* -------------------------------------------------- */
/* HERO
/* -------------------------------------------------- */

var hero = (function hero($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('hero', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.hero');


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		//Tween.set($element.children(), {autoAlpha: 0});


		if( $element.find('.tagline').length ) {

			var mySplitText = new SplitText($element.find('.tagline'), {type: 'words'}), 
				$mySplitText = mySplitText.words;


			var tl = new TimelineMax({paused: false});
				tl.fromTo($element.find('.title'), 5, {autoAlpha: 0},
													  {autoAlpha: 1, delay: 3, ease: Expo.easeOut})

					.staggerFromTo($mySplitText, 1, {autoAlpha: 0, y: 10},
													{autoAlpha: 1, y: 0, ease: Expo.easeInOut}, 0.05, '-=4')


					.fromTo($element.find('.scroll-to'), 1, {autoAlpha: 0},
													 		  {autoAlpha: 1, ease: Expo.easeOut}, '-=3.75');

		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
