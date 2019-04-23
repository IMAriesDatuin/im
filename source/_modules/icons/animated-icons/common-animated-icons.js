/* -------------------------------------------------- */
/* animatedIcon
/* -------------------------------------------------- */

var icon = (function icon($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('animatedIcon', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $iconsContainer = $('.icons-container'),
			$icon = $('.animated-icon'),
			$content = $('.icon-content'),
			$seoMarketing = $('.icon-seo-marketing'),
			$socialMedia = $('.icon-social-media'),
			$websites = $('.icon-websites');


		/* -------------------------------------------------- */
		/* ANIMATIONS: CORE
		/* -------------------------------------------------- */

		Tween.set($icon.children().children(), {transformOrigin: 'center center'});


		var content = new Timeline({paused: true});
			content.staggerFrom($content.children().children(), 0.5, {autoAlpha: 0, y: - 25, scale: 0, ease: Back.easeInOut}, -0.02);


		var seoMarketing = new Timeline({paused: true});
			seoMarketing.staggerFrom($seoMarketing.children().children(), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: 'bottom center', ease: Expo.easeInOut}, 0.02);
			

		var socialMedia = new Timeline({paused: true});
			socialMedia.staggerFrom($socialMedia.children().children(), 0.5, {autoAlpha: 0, scale: 0, ease: Back.easeInOut}, 0.02);


		var websites = new Timeline({paused: true});
			websites.staggerFrom($websites.children().children(), 0.5, {autoAlpha: 0, y: - 25, scale: 0, ease: Back.easeInOut}, -0.02);


		/* -------------------------------------------------- */
		/* ANIMATIONS: AMBIENT
		/* -------------------------------------------------- */

		var gears = new Timeline({paused: true, repeat: -1, yoyo: true});
			gears.to($icon.find('.gear').children(), 8, {rotation: 360, ease: Back.easeInOut, transformOrigin:'center center'});


		var trinketsCircle = new Timeline({paused: true, repeat: -1, yoyo: true});
			trinketsCircle.to($icon.find('.trinkets-circle').children(), 5, {rotation: -360, ease: Back.easeInOut, transformOrigin:'center center'});


		var trinketsPlus = new Timeline({paused: true, repeat: -1, yoyo: true});
			trinketsPlus.staggerTo($icon.find('.trinkets-plus').children().children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.02);


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function controller() {

			/*
			if( $content.hasClass('in-view') ) {

				content.play(0);

			}

			if( $seoMarketing.hasClass('in-view') ) {

				seoMarketing.play(0);

			}

			if( $socialMedia.hasClass('in-view') ) {

				socialMedia.play(0);

			}

			if( $websites.hasClass('in-view') ) {

				websites.play(0);

			}

			gears.play(0);
			trinketsCircle.play(0);
			trinketsPlus.play(0);
			*/


			if( $iconsContainer.hasClass('in-view') ) {

				content.play();
				seoMarketing.play();
				socialMedia.play();
				websites.play();

				gears.play(0);
				trinketsCircle.play(0);
				trinketsPlus.play(0);

			}

		}


		function pauseAll() {

			content.pause(0);
			seoMarketing.pause(0);
			socialMedia.pause(0);
			websites.pause(0);

			gears.pause(0);
			trinketsCircle.pause(0);
			trinketsPlus.pause(0);

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$content.on('click', function() { content.play(0); } );
		$seoMarketing.on('click', function() { seoMarketing.play(0); } );
		$socialMedia.on('click', function() { socialMedia.play(0); } );
		$websites.on('click', function() { websites.play(0); } );


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.icons-container',
			threshold: 0,
			//load_delay: 100,
			auto_unobserve: false,

			callback_enter: function(element) {

				//console.log('Entering viewport: ', element);
				$(element).addClass('in-view');
				controller();

			},

			callback_exit: function(element) {

				//console.log('Exiting viewport: ', element);
				$(element).removeClass('in-view');
				pauseAll();

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* EXPORTS
		/* -------------------------------------------------- */
		
		return {
			content: content,
			seoMarketing: seoMarketing,
			socialMedia: socialMedia,
			websites: websites

		};

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init
		//init.content: content,
		//init.websites: websites

	};


}(jQuery, window, document));
