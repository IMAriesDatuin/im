/* -------------------------------------------------- */
/* NAV CAROUSEL
/* -------------------------------------------------- */

var navCarousel = (function navCarousel($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('navCarousel', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	function init($element, $carousel) {

		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $($element),
			$carousel = $($carousel),
			$cell = '.carousel-cell';


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			cellSelector: $cell,
			initialIndex: 0,
			accessibility: false,
			setGallerySize: true,
			resize: true,

			cellAlign: 'center',
			contain: false,
			percentPosition: false,
			rightToLeft: false,

			draggable: '>1',
			freeScroll: false,
			wrapAround: false,
			groupCells: false,
			autoPlay: false,
			pauseAutoPlayOnHover: true,
			fullscreen: false,
			fade: false,
			adaptiveHeight: false,
			watchCSS: false,
			asNavFor: $($carousel)[0],
			hash: null,
			dragThreshold: 10,
			selectedAttraction: 0.05,
			friction: 0.5,
			freeScrollFriction: 0.025,

			prevNextButtons: true,
			pageDots: false,
			//arrowShape: null,

			imagesLoaded: true,
			lazyLoad: 1,
			bgLazyLoad: 1
		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$element.each(function() {

			var $self = $(this);

			// READY
			$self.on('ready.flickity', function() {

				console.log('Flickity nav is ready.');

			});

			$self.flickity(options);


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			$self.on('change.flickity', function() {

				// < less than / > greater than
				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				if ( flkty.selectedIndex === 0 ) { 

					console.log('First cell.');
					$self.find('.previous').addClass('is-disabled');

				}

				if ( flkty.selectedIndex > 0 ) { 

					console.log('Free');
					$self.find('.previous').removeClass('is-disabled');
					$self.find('.next').removeClass('is-disabled');

				}

				if ( flkty.selectedIndex === flkty.cells.length - 1 ) {

					console.log('Last cell.');
					$self.find('.next').addClass('is-disabled');

				}

			});

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
