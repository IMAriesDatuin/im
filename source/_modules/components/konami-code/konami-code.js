/* -------------------------------------------------- */
/* KONAMI CODE
/* -------------------------------------------------- */

var konamiCode = (function konamiCode($, window, document, undefined) {

	//'use strict';

	function init() {

		//removeIf(production)
		get.info('konamiCode', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('#konami-code');


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			walkSpeed: 0.5,
			scale: 1,

			fps: 4,
			frameWidth: 200,
			frameHeight: 300,
			spriteWidth: 800,
			spriteHeight: 1200,

			walkCycle: 0,
			jumpCycle: 300,
			climbCycle: 600

		};


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function move() {

			Tween.to($element.find('#contra'), 10, {x: $win.width(), ease: Linear.easeNone, onComplete: gameOver});

		}

		function gameOver() {

			Tween.set($element.find('#contra'), {autoAlpha: 0});
			tl.kill();

		}


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		//var imgWidth = $element.find('#contra').find('img').innerWidth();

		Tween.set($element.find('#contra'), { display: 'block', x: - $element.find('#contra').width(), scale: options.scale, transformOrigin: 'top left' });
		Tween.set($element.find('#contra').find('img'), { y: - options.walkCycle, transformOrigin: 'top left' }); 

		//Tween.set($element.find('#contra').find('img'), { y: - options.jumpCycle}); 


		var tl = new Timeline({paused: true, onStart: move});
			tl.to($element.find('#contra').find('img'), options.walkSpeed, { x: - (options.spriteWidth - options.frameWidth), ease: SteppedEase.config( options.fps - 1 ) });
			  //.to($element.find('#contra').find('img'), options.walkSpeed, { x: - (options.spriteWidth - options.frameWidth), delay: 2, y: options.jumpCycle, ease: SteppedEase.config( options.fps - 1 ) })
			  //.to($element.find('#contra').find('img'), options.walkSpeed, { x: - (options.spriteWidth - options.frameWidth), delay: 5, ease: SteppedEase.config( options.fps - 1 ) });


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		var keys = [], konami = '38,38,40,40,37,39,37,39,66,65,66,65'; // UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A

		$doc.keydown(function(e) {

			keys.push(e.keyCode);

			if(keys.toString().indexOf(konami) >= 0) {

			$doc.unbind('keydown', arguments.callee);

				console.log('Konami Code entered!');
				//body.addClass('konami');
				tl.repeat(-1).play();

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
