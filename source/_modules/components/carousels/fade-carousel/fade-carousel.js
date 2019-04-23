/* -------------------------------------------------- */
/* FADE CAROUSEL
/* -------------------------------------------------- */

var fadeCarousel = (function fadeCarousel($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('fadeCarousel', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		// MAIN	
		var $element,
			$carousel = $($element),
			$cell = '.carousel-cell';
			//$cellIsSelected = '.carousel-cell.is-selected';


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
			contain: true,
			percentPosition: false,
			rightToLeft: false,

			draggable: '>1',
			freeScroll: false,
			wrapAround: true,
			groupCells: false,
			autoPlay: false,
			//timer: 10,
			pauseAutoPlayOnHover: true,
			fullscreen: false,
			fade: true,
			adaptiveHeight: true,
			watchCSS: false,
			//asNavFor: null,
			hash: null,
			dragThreshold: 10,
			selectedAttraction: 0.05,
			friction: 0.75,
			freeScrollFriction: 0.025,

			prevNextButtons: false,
			pageDots: false,
			//arrowShape: null,

			imagesLoaded: true,
			lazyLoad: 1,
			bgLazyLoad: 1
		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$carousel.each(function() {

			var $self = $(this);

			// READY
			$self.on('ready.flickity', function() {

				console.log('Flickity is ready.');

			});

			$self.flickity(options);


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			$self.on('settle.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				if ( flkty.selectedIndex === 0 ) {

					//console.log('First cell.');

				} else if ( flkty.selectedIndex === flkty.cells.length - 1 ) {

					//console.log('Last cell.');

				}

			}).on('change.flickity', function(event, cellIndex) {

				//console.log( 'Sliding to cell ' + (cellIndex + 1) + '.' );
				media.pauseAll();

			}).on('select.flickity', function(event, cellIndex) {

				//console.log( 'Cell ' + (cellIndex + 1)  + ' clicked.' );

			}).on('staticClick.flickity', function(event, pointer, cellElement, cellIndex) {

				if (!cellElement) {

					return;

				}

				// Change cell background with .is-clicked.
				//$carousel.find('.is-clicked').removeClass('is-clicked');
				//$(cellElement).addClass('is-clicked');
				console.log( 'Cell ' + (cellIndex + 1)  + ' clicked.' );

			});


			/* -------------------------------------------------- */
			/* LAZY LOAD
			/* -------------------------------------------------- */

			$self.on('lazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			});


			/* -------------------------------------------------- */
			/* STATUS
			/* -------------------------------------------------- */

			function updateStatus() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement,
					cellNumber = flkty.selectedIndex + 1;

				//console.log( cellNumber + ' of ' + flkty.slides.length);
				//$carousel.find('.status').html( '<span class='current'>' + cellNumber + '</span>' + '/' + '<span class='total'>' + $element.data('flickity').slides.length + '</span>' );

			}

			updateStatus();
			$self.on('select.flickity', updateStatus);


			/* -------------------------------------------------- */
			/* NAV
			/* -------------------------------------------------- */

			/*
			$self.find('.fade-nav-carousel').on('mouseover', 'li', function() {

				var $self = $(this);

				$self.find('a').addClass('is-active');

				$carousel.flickity('select', $self.index(), true, false);

			}).on('mouseout mouseleave', 'li', function() {

				var $self = $(this);

				$self.find('a').removeClass('is-active');

			});
			*/

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
