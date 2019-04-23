/* -------------------------------------------------- */
/* SCROLL PROGRESS
/* -------------------------------------------------- */

var scrollProgress = (function scrollProgress($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('scrollProgress', '1.0', 'Aries Datuin');
		//endRemoveIf(production)
	

		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.scroll-progress');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var currentScrollY = 0,
			documentHeight = 0,
			windowHeight = 0,
			total = 0,
			ticking = false;


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function animate() {

			//console.log(total);
			Tween.to($element, 0.5, {scaleX: total, ease: Linear.easeNone});
			//item[0].style.width = currentScrollY + 100 + 'px';
			ticking = false;

		}


		function update() {

			currentScrollY = window.scrollY; // No IE8.
			documentHeight = $doc.height();
			windowHeight = $win.height();
			total = currentScrollY / (documentHeight - windowHeight) * 1;
			request();

		}


		function request() {

			if(!ticking) {

				raf(animate);

			}

			ticking = true;

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('scroll', _.throttle(update, interval.update, { leading: interval.leading, trailing: interval.trailing } ));

		/*
		win.on('scrollstop', { latency: $interval.update }, function() { 

			Tween.delayedCall($interval.delay, function() {

				console.log('Stopping scrollProgress animation.');

				cancelRaf(request);

			});

		});
		*/

		update();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
