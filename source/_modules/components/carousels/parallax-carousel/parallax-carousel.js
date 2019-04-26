/* -------------------------------------------------- */
/* PARALLAX CAROUSEL
/* -------------------------------------------------- */

var parallaxCarousel = (function parallaxCarousel($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('parallaxCarousel', '1.0', 'Aries Datuin');
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
			contain: true,
			percentPosition: false,
			rightToLeft: false,

			draggable: false,
			freeScroll: false,
			wrapAround: false,
			groupCells: false,
			autoPlay: false,
			//timer: 10,
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
			/* TRANSITIONS
			/* -------------------------------------------------- */

			var docStyle = document.documentElement.style,
				transformProp = typeof docStyle.transform === 'string' ? 'transform' : 'WebkitTransform';
			
			$self.on('scroll.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;
					flkty.slides.forEach(function(slide, i) {

				var image = $self.find($cell).find('.carousel-container')[i],
					x = (slide.target + flkty.x) * - 1 / 2;
					image.style[transformProp] = 'translateX(' + x + 'px)';
				});

			});


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			$self.on('settle.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				//media.pauseAll();

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
				//console.log(event.originalEvent.type, img.src);

				//$(this).find('source[src=null]').parent().parent().addClass('hide');
				//$(this).find('img[src=null]').parent().addClass('hide');

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				//console.log(event.originalEvent.type, img.src);

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

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
