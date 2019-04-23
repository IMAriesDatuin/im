/* -------------------------------------------------- */
/* LAZY LOAD / INTERSECTION OBSERVER
/* -------------------------------------------------- */

var lazyLoad = (function lazyLoad($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('lazyLoad', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.lazy',
			threshold: 0,
			//load_delay: 100,
			auto_unobserve: true,

			data_bg: 'bg',
			data_sizes: 'sizes',
			data_src: 'src',
			data_srcset: 'srcset',
			class_loading: 'is-loading',
			class_loaded: 'is-loaded',
			class_error: 'on-error',

			callback_enter: function(element) {

				//console.log('Entering viewport: ', element);
				$(element).addClass('in-view');

			},

			callback_exit: function(element) {

				//console.log('Exiting viewport: ', element);
				$(element).removeClass('in-view');

			},

			callback_reveal: function(element) {

				//console.log('Loading: ', element);
				$(element).addClass('is-loading').removeClass('is-loaded');
				$(element).closest('.lazy-container').addClass('is-loading').removeClass('is-loaded');

			},

			callback_loaded: function(element) {

				//console.log('Loaded: ', element);
				$(element).addClass('is-loaded').removeClass('is-loading');
				$(element).closest('.lazy-container').addClass('is-loaded').removeClass('is-loading');

			},

			callback_error: function(element) {

				console.log('Error loading : ', element);
				$(element).addClass('on-error is-loaded').removeClass('is-loading');
				$(element).closest('.lazy-container').addClass('on-error is-loaded').removeClass('is-loading');

			},

			callback_finish: function(element) {

				console.log('All elements loaded.');
				$(element).addClass('is-finished');
				$(element).closest('.lazy-container').addClass('is-finished');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//lazyLoad.update();
		//lazyLoad.load(element, force);
		//lazyLoad.loadAll();
		//lazyLoad.destroy();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
