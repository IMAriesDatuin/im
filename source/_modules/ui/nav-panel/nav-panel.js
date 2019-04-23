/* -------------------------------------------------- */
/* NAV PANEL
/* -------------------------------------------------- */

var navPanel = (function navPanel($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('navPanel', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $navbar = $('.menubar-logo, .menubar-toggle'),
		$menuToggle = $('.menu-toggle'),
		$navPanel = $('#nav-panel');


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var state = 'is-closed';


	/* -------------------------------------------------- */
	/* ANIMATIONS
	/* -------------------------------------------------- */

	// SET
	Tween.set($navPanel.find('nav'), {autoAlpha: 0,});
	Tween.set($navPanel.find('nav').find('ul').children(), {autoAlpha: 0, y: 25});
	Tween.set($navPanel.find('.company-info'), {scaleY: 0, transformOrigin: 'bottom center'});
	Tween.set($navPanel.find('.company-info').find('ul').children(), {autoAlpha: 0, x: -25});
	Tween.set($navPanel.find('.background'), {autoAlpha: 0, scale: 0.1, transformOrigin: 'center center'});
	Tween.set($navPanel.find('.logo-background'), {autoAlpha: 0, transformOrigin: 'bottom center'});


	// TIMELINE
	var tl = new Timeline({paused: true, onStart: isOpening, onReverseComplete: isClosed});
		tl.to($navPanel.find('.background'), 1.25, {autoAlpha: 1, ease: Expo.easeOut})
				  .to($navPanel.find('.background'), 1.75, {scale: $win.innerWidth() * 0.05, ease: Expo.easeInOut}, '-=1.25')
				  .to($navPanel.find('nav'), 0.5, {autoAlpha: 1, ease: Expo.easeOut}, '-=0.75')
				  .staggerTo($navPanel.find('nav').find('ul').children(), 1, {autoAlpha: 1, y: 0, ease: Expo.easeOut}, 0.1, '-=0.75', isOpen)
				  .to($navPanel.find('.company-info'), 0.5, {scaleY: 1, ease: Expo.easeInOut}, '-=1')
				  .staggerTo($navPanel.find('.company-info').find('ul').children(), 0.5, {autoAlpha: 1, x: 0, ease: Expo.easeInOut}, 0.05, '-=0.75')
				  .to($navPanel.find('.logo-background'), 1, {autoAlpha: 0.5, ease: Expo.easeInOut});


	/* -------------------------------------------------- */
	/* LISTENERS
	/* -------------------------------------------------- */

	// TOGGLE
	$menuToggle.on('click', function(e) {

		e.preventDefault();
		controller();

	});


	// LINKS
	if (!isTouch) {

		$navPanel.find('nav ul li').not('.is-inactive').each(function(i, e) {

			var $self = $(this),
				mySplitText = new SplitText($self.find('a'), {type: 'words, lines, chars'}), 
				$mySplitText = mySplitText.chars;


			var tl = new TimelineMax({paused: true, onComplete: function() { /*tl.pause(0);*/ } });
				tl.staggerTo($mySplitText, 0.25, {autoAlpha: 0, y: -50, ease: Back.easeIn}, -0.02)
				  .set($mySplitText, {y: 25, onStart: function() { $self.addClass('on-hover'); }, onReverseComplete: function() { $self.removeClass('on-hover'); } })
				  .staggerTo($mySplitText, 0.25, {autoAlpha: 1, y: 0, ease: Back.easeOut}, 0.02)
				  .fromTo($self.find('.inner'), 1, {scaleX: 0},
												   {scaleX: 1, className: '+=background-accent', ease: Expo.easeInOut}, '-=0.75');

			e.hover = tl;


			$self.hover(function() {

				Tween.set($self.find('.inner'), {transformOrigin: 'left center'});
				//Tween.to($self, 0.5, {x: - 10, ease: Back.easeOut});
				//Tween.to($navPanel.find('nav ul li').not($self).children(), 0.5, {y: 10, ease: Expo.easeOut});
				tl.play();

			}, function() {

				Tween.set($self.find('.inner'), {transformOrigin: 'right center'});
				//Tween.to($self, 0.5, {x: 0, ease: Expo.easeOut});
				//Tween.to($navPanel.find('nav ul li').not($self).children(), 0.5, {y: 0, ease: Expo.easeOut});
				tl.reverse();

			});

		});

	} else {

		$navPanel.find('nav ul li a').find('.inner').addClass('hide');

	}


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	// CONTROLLER
	function controller() {

		if ( state === 'is-opening' || state === 'is-open' ) {

			tl.reverse().timeScale(1.75);

		} else if ( state === 'is-closing' || state === 'is-closed' ) {

			tl.play().timeScale(1.25);

		}

		if ( tl.reversed() ) {

			isClosing();

		}

	}


	// EVENTS
	function isOpening() {

		$navbar.addClass('is-open');
		$navPanel.addClass('display-block no-pointer').removeClass('hide');
		$main.addClass('no-pointer');
		$navPanel.scrollTop(0);
		//$html.addClass('is-locking');
		scroll.lock();

		state = 'is-opening';
		console.log('Nav Panel ' + state);

	}


	function isOpen() {

		Tween.set($navPanel.find('.background').children(), {transformOrigin: 'bottom center'});
		$navPanel.addClass('is-open overflow-auto').removeClass('no-pointer');
		$$('.is-animating').find('*').addClass('animate-pause');

		state = 'is-open';
		console.log('Nav Panel ' + state);

	}


	function isClosing() {

		$navPanel.addClass('no-pointer').removeClass('is-open overflow-auto');
		$main.removeClass('no-pointer');
		$$('.is-animating').find('*').removeClass('animate-pause');
		//$html.removeClass('is-locking');

		state = 'is-closing';
		console.log('Nav Panel ' + state);
		
	}


	function isClosed() {

		Tween.set($navPanel.find('.background').children(), {transformOrigin: 'top center'});
		$navbar.removeClass('is-open');
		$navPanel.addClass('hide');
		scroll.unlock();

		state = 'is-closed';
		console.log('Nav Panel ' + state);

	}
	

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	return {
		//init: init,
		state: state,
		controller: controller,
		$navPanel: $navPanel

	};


}(jQuery, window, document));
