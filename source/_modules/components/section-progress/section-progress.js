/* -------------------------------------------------- */
/* SECTION PROGRESS
/* -------------------------------------------------- */

var sectionProgress = (function sectionProgress($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('sectionProgress', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.section-progress .section-progress-dot',
			threshold: 0,
			auto_unobserve: false,

			callback_enter: function(element) {

				//console.log('Entering viewport: ', element);
				$(element).parent().addClass('achievement-unlocked');
				//controller(element);

			},

			callback_exit: function(element) {

				//console.log('Exiting viewport: ', element);
				$(element).parent().removeClass('achievement-unlocked');
				//controller(element);

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
