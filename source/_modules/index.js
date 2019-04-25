/* -------------------------------------------------- */
/* PAGE MANAGER
/* -------------------------------------------------- */

var pageManager = (function pageManager($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('pageManager', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $pageTransition = $('.page-transition');


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var state = 'is-loading',
		rootLink = '/im/build/';


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	var tlPageTransitionText = new Timeline({paused: false, repeat: -1});
		tlPageTransitionText.set($pageTransition.find('.page-transition-text').children(), {autoAlpha: 0, x: -25})
							.staggerTo($pageTransition.find('.page-transition-text').children(), 0.5, {autoAlpha: 1, x: 0, ease: Expo.easeInOut}, 0.05)
							.staggerTo($pageTransition.find('.page-transition-text').children(), 0.5, {autoAlpha: 0, x: 25, ease: Expo.easeInOut}, 0.05, '-=0.25');


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function linkCheck() {

		/*
		console.log(url.href);		// https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
		console.log(url.protocol);	// https:
		console.log(url.host);		// developer.mozilla.org:8080
		console.log(url.hostname);	// developer.mozilla.org
		console.log(url.port);		// 8080
		console.log(url.pathname);	// /en-US/search
		console.log(url.search);	// ?q=URL
		console.log(url.hash);		// #search-results-close-container
		console.log(url.origin);	// https://developer.mozilla.org:8080
		*/

		var currentOrigin = location.origin,
			//currentPath = location.pathname,
			currentPath = location.pathname.split('/').pop(),
			currentFullPath = location.href;


		console.log('Currently viewing: ' + currentPath);


		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').removeClass('is-active');
		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').parent().removeClass('is-active');


		if(location.pathname === '' + rootLink + '') { // Check if url is at root location.

			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		} else {

			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		}

	}


	function isLoading() {

		console.log('Content is loading...');
		$pageTransition.removeClass('is-loaded');
		scroll.lock();
		
		if( $('.nav-panel').hasClass('is-open') ) {

			navPanel.controller();

		}

		tlPageTransitionText.resume();

	}


	function isLoaded() {

		console.log('Content is loaded successfully.');
		$pageTransition.addClass('is-loaded');
		scroll.unlock();
		linkCheck();

		tlPageTransitionText.pause();

	}


	function firstPageLoad() {

		var tl = new Timeline({paused: false});
			tl.addCallback( function() { $html.addClass('visible'); } )
			  .to($pageTransition, 0.75, {scaleX: 0, delay: 2, ease: Expo.easeInOut })
			  .to($pageTransition.find('.page-transition-text'), 0.75, {autoAlpha: 0, ease: Expo.easeInOut}, '-=0.75')
			  .addCallback(isLoaded);

	}


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var pageManagerOptions = {
		LINK_SELECTOR: 'a[href^="' + window.location.origin + '"]:not(.button):not([data-no-swup]), a[href^="/"]:not(.button):not([data-no-swup]), a[href^="#"]:not(.button):not([data-no-swup])',
		FORM_SELECTOR: 'form[data-swup-form]',
		elements: ['.swup'],
		animationSelector: '[class*="page-transition-"]',
		pageClassPrefix: '',
		cache: false,
		preload: false,
		scroll: true,
		doScrollingRightAway: false,
		animateScroll: true,
		scrollFriction: 0.3,
		scrollAcceleration: 0.04,
		support: true,
		debugMode: false,
		plugins: [],

		skipPopStateHandling: function(event){

			if (event.state && event.state.source === 'swup') {

				return false;

			}

			return true;

		},

		animateHistoryBrowsing: true,

		animations: {

			'*': {

				in: function(next) {

					// TRANSITION OUT
					var tl = new Timeline({paused: false});
						tl.to($pageTransition, 1, {scaleX: 0, transformOrigin: 'right center', delay: 2, ease: Expo.easeInOut})
						  .to($pageTransition.find('.page-transition-text'), 0.5, {autoAlpha: 0, ease: Expo.easeInOut}, '-=1')
						  .from($('main'), 0.75, {autoAlpha: 0, ease: Expo.easeInOut}, '-=0.75')
						  .to($('footer'), 0.75, {autoAlpha: 1, ease: Expo.easeInOut}, '-=0.5')
						  .addCallback( function() { next(); isLoaded(); } );

				},

				out: function(next) {

					// TRANSITION IN
					var tl = new Timeline({paused: false});
						tl.addCallback( function() { isLoading(); } )
						  .to($pageTransition, 1, {scaleX: 1, transformOrigin: 'left center', ease: Expo.easeInOut})
						  .to($pageTransition.find('.page-transition-text'), 0.5, {autoAlpha: 1, ease: Expo.easeInOut}, '-=0.5')
						  .to($('main'), 0.75, {autoAlpha: 0, ease: Expo.easeInOut}, '-=1')
						  .to($('footer'), 0.75, {autoAlpha: 0, ease: Expo.easeInOut}, '-=1')
						  .addCallback( function() { next(); } );

				}

			}

		}

	};


	/* -------------------------------------------------- */
	/* API
	/* -------------------------------------------------- */

		/* -------------------------------------------------- */
		/* REQUESTS / PAGE LOAD
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:pagePreloaded', function() {

			console.log('Page is preloading...');

		}).on('swup:pageLoaded', function() {

			console.log('Page successfully loaded.');

		}).on('swup:pageView', function() {

			console.log('Page ready and successfully loaded.');

		});
		*/


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:animationOutStart', function() {

			console.log('Adding is-animating class to HTML.');

		}).on('swup:animationInStart', function() {

			console.log('Removing is-animating class from HTML.');

		}).on('swup:animationOutDone', function() {

			console.log('Animation is done. Content is being replaced...');

		}).on('swup:animationInDone', function() {

			console.log('Animation is done. Content successfully replaced.');

		});
		*/


		/* -------------------------------------------------- */
		/* RENDERING
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:willReplaceContent', function() {

			console.log('Content is being replaced...');

		}).on('swup:contentReplaced', function() {

			console.log('Content successfully replaced.');

		});
		*/


		/* -------------------------------------------------- */
		/* MOUSE EVENTS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:hoverLink', function() {

			console.log('Hovering over link.');

		}).on('swup:clickLink', function() {

			console.log('Link clicked.');

		}).on('swup:submitForm', function() {

			console.log('Submit button clicked.');

		});
		*/


		/* -------------------------------------------------- */
		/* SCROLL EVENTS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:scrollStart', function() {

			console.log('Scrolling to anchor.');

		}).on('swup:scrollDone', function() {

			console.log('Scroll completed. Arrived at anchor.');

		}).on('swup:samePage', function() {

			console.log('Currently viewing the same page.');

		});
		*/


		/* -------------------------------------------------- */
		/* HISTORY
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:popState', function() {

			console.log('History state changed.');

		}).on('swup:animationSkipped', function() {

			console.log('Skipping animation.');

		});
		*/


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:openPageInNewTab', function() {

			console.log('Page opened in new tab.');

		}).on('swup:pageRetrievedFromCache', function() {

			console.log('Page retrieved from cache.');

		}).on('swup:samePage', function() {

			console.log('Currently viewing the same page.');

		}).on('swup:samePageWithHash', function() {

			console.log('Currently viewing the same page.');

		}).on('swup:enabled', function() {

			console.log('Swup enabled.');

		}).on('swup:disabled', function() {

			console.log('Swup destroyed.');

		});
		*/


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	docReady(function() {

		console.log('Swup initialized.');


		// FIRST RUN
		console.log('Framework initialized.');
		$doc.foundation();
		detectTouch();
		detectBrowser();
		detectDevice();
		detectScreen();
		scroll.lock();

		//headroom.init();
		//navPanel();
		footer.init();
		//legal.init();
		//legal.privacyPolicyLink();
		scrollProgress.init();
		firstPageLoad();


		// APP / MODULES
		modules.init();


		// SPECIAL CASE
		if(!isTouch) {
			konamiCode.init();
		}

	});


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	var swup = new Swupjs(pageManagerOptions);
	//swup.usePlugin(pluginName, {option: 'value of option'});


	/* -------------------------------------------------- */
	/* EVENTS
	/* -------------------------------------------------- */

	swup.on('pageView', function () {

		modules.init();

		/*
		dataLayer.push({

			'event': 'VirtualPageview',
			'virtualPageURL': window.location.pathname,
			'virtualPageTitle' : document.title

		});
		*/

	});


	/* -------------------------------------------------- */
	/* LINK MANAGER
	/* -------------------------------------------------- */

	/*
	var link = $('a[href^="/"]');

	link.on('touchstart click', function (e) {

		e.preventDefault();

		var href = $(this).attr('href');
		console.log('Link clicked: ' + href);

		//Tween.to($('.page-transition'), 0.75, {scaleX: 1, transformOrigin: 'left center', delay: 0, ease: Expo.easeInOut, onStart: null, onComplete: function(){ window.location.href = href } })
		//pageTransition.controller();

	});
	*/


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		state: state,
		$pageTransition: $pageTransition

	};


}(jQuery, window, document));
