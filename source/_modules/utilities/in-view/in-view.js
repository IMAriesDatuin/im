/* -------------------------------------------------- */
/* IN VIEW
/* -------------------------------------------------- */

var inView = (function inView($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('inView', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.reveal-container > section',
			threshold: 0,
			//load_delay: 100,
			auto_unobserve: true,

			callback_enter: function(element) {

				//console.log('Entering viewport: ', element);
				$(element).addClass('in-view');
				$(element).find('.reveal').addClass('in-view');

			},

			callback_exit: function(element) {

				//console.log('Exiting viewport: ', element);
				$(element).removeClass('in-view');
				$(element).find('.reveal').removeClass('in-view');

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
