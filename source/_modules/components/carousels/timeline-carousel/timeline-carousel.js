/* -------------------------------------------------- */
/* TIMELINE CAROUSEL
/* -------------------------------------------------- */

var timelineCarousel = (function timelineCarousel($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('timelineCarousel', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		// MAIN	
		var $element,
			$carousel = $($element),
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
			percentPosition: true,
			rightToLeft: false,

			draggable: '>1',
			freeScroll: false,
			wrapAround: false,
			groupCells: false,
			autoPlay: false,
			timer: 10,
			pauseAutoPlayOnHover: true,
			fullscreen: false,
			fade: false,
			adaptiveHeight: false,
			watchCSS: false,
			//asNavFor: $carousel,
			hash: null,
			dragThreshold: 10,
			selectedAttraction: 0.05,
			friction: 0.75,
			freeScrollFriction: 0.025,

			prevNextButtons: true,
			pageDots: true,
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
			Tween.delayedCall( 1, function() { $self.flickity('resize'); } );


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			$self.on('settle.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;


				//$self.find('.is-selected').addClass('is-active');


				if ( flkty.selectedIndex === 0 ) {

					//console.log('First cell.');

				} else if ( flkty.selectedIndex === flkty.cells.length - 1 ) {

					//console.log('Last cell.');

				}

			}).on('change.flickity', function(event, cellIndex) {

				//console.log( 'Sliding to cell ' + (cellIndex + 1) + '.' );
				//$self.find($cell).removeClass('is-active');

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

			}).on('lazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			});


			/* -------------------------------------------------- */
			/* LAZY LOAD
			/* -------------------------------------------------- */

			$self.on('lazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				//console.log(event.originalEvent.type, img.src);

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				//console.log(event.originalEvent.type, img.src);

			});


			/* -------------------------------------------------- */
			/* STATUS
			/* -------------------------------------------------- */

			var updateStatus = function updateStatus() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement,
					cellNumber = flkty.selectedIndex + 1;

				console.log( cellNumber + ' of ' + flkty.slides.length);

				//$carousel.find('.status').html( '<span class='current'>' + cellNumber + '</span>' + '/' + '<span class='total'>' + $element.data('flickity').slides.length + '</span>' );

			};

			updateStatus();
			$self.on('select.flickity', updateStatus);


			/* -------------------------------------------------- */
			/* OBSERVER
			/* -------------------------------------------------- */

			var lazyLoad = new LazyLoad({
				container: document,
				elements_selector: $element,
				threshold: 0,
				auto_unobserve: false,

				callback_enter: function(element) {

					//console.log('ENTERING');
					$(element).addClass('in-view');

					if ( $(element).find($cell).find('img').hasClass('is-loaded') ) {

						//$carousel.controller();

					}

				},

				callback_exit: function(element) {

					//console.log('EXITING');
					$(element).removeClass('in-view');
					//$carousel.controller();

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
