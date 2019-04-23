/* -------------------------------------------------- */
/* TICKER CAROUSEL
/* -------------------------------------------------- */

var tickerCarousel = (function tickerCarousel($, window, document, undefined) {

	'use strict';

	function init($element, $carousel) {

		//removeIf(production)
		get.info('tickerCarousel', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element,
			$carousel = $($carousel),
			$cell = '.carousel-cell';


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$carousel.each(function() {

			var $self = $(this);

			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			$self.on('change.flickity', function(event, cellIndex) {

				Tween.to($self.find($cell).find($element), 0.25, {autoAlpha: 0, x: -50, ease: Expo.easeInOut, onComplete: controller});

			});


			/* -------------------------------------------------- */
			/* FUNCTIONS
			/* -------------------------------------------------- */

			function controller() {

				var tl = new Timeline({paused: true});
					tl.set($self.find('.is-selected').find($element), {autoAlpha: 0, x: -50, scaleY: 0})
					  .to($self.find('.is-selected').find($element), 1, {autoAlpha: 1, x: 0, scaleY: 1, ease: Expo.easeInOut})
					  .from($self.find('.is-selected').find($element).find('p'), 1.5, {autoAlpha: 0, x: -30, ease: Expo.easeOut}, '-=0.25')
					  .from($self.find('.is-selected').find($element).find('cite'), 0.5, {autoAlpha: 0, ease: Expo.easeOut}, '-=1.25')
					  .staggerFrom($self.find('.is-selected').find($element).find('cite').children(), 0.75, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, 0.2, '-=1.5');

					tl.delay(1).play();

			}

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
