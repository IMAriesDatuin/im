/* -------------------------------------------------- */
/* MODULES
/* -------------------------------------------------- */

var modules = (function modules($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('modules', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* UTILITIES
		/* -------------------------------------------------- */

		dataAttr.color();
		dataAttr.image();
		dataAttr.page();
		headroom.init();
		inView.init();
		lazyLoad.init();
		//media.init();
		Tween.delayedCall(interval.delay, media.init);
		pageVisibility.init();
		print.init();
		sectionProgress.init();
		//stackOrder.init();
		//skewScroll.init();


		/* -------------------------------------------------- */
		/* COMPONENTS
		/* -------------------------------------------------- */

		component.init();
		parallax.init();
		Tween.delayedCall(interval.delay, imageParallax.init, ['the-incredible-team']);
		//imageParallax.init('the-incredible-team');
		//Tween.delayedCall(interval.delay, navCarousel.init, ['.parallax-carousel', '.nav-carousel']);

		commonCarousel.init('.carousel');

		parallaxCarousel.init('.parallax-carousel');
		navCarousel.init('.parallax-nav-carousel', '.parallax-carousel');
		tickerCarousel.init('.ticker-carousel', '.parallax-carousel');

		fadeCarousel.init('.fade-carousel');
		navCarousel.init('.fade-nav-carousel', '.fade-carousel');

		timelineCarousel.init('.timeline-carousel');

		hero.init();
		icon.init();
		legal.legalLink();


		/* -------------------------------------------------- */
		/* misc
		/* -------------------------------------------------- */

		if(!isTouch) {
			Tween.delayedCall(interval.delay, cursor.init);
			magneticInteraction.init();
			//tilt.init();
		}


		if(isTouch) {
			touchFeedback.init();
			waves.init();
		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
