/* -------------------------------------------------- */
/* FOOTER
/* -------------------------------------------------- */

var footer = (function footer() {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('footer', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $(".footer");


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: ".footer",
			threshold: 0,
			auto_unobserve: false,

			callback_enter: function(element) {

				//console.log("Entering viewport: ", element);
				$(element).addClass("in-view");

			},

			callback_exit: function(element) {

				//console.log("Exiting viewport: ", element);
				$(element).removeClass("in-view");

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);

	}


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	return {
		init: init

	};


}());
