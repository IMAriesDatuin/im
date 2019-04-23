/* -------------------------------------------------- */
/* DATA HELPERS
/* -------------------------------------------------- */

var dataAttr = (function dataAttr($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('dataAttr', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var options = {
		colorDataAttrName: 'color',
		imageDataAttrName: 'image',
		pageDataAttrName: 'page'

	};


	/* -------------------------------------------------- */
	/* COLOR
	/* -------------------------------------------------- */

	function color() {

		var $element = document.querySelectorAll('[data-' + options.colorDataAttrName + ']');

		for (var i = 0; i < $element.length; i++) {
			 var attribute = $element[i].getAttribute('data-color');
			 $element[i].style.backgroundColor = attribute;
		}
		console.log(attribute);

	}


	/* -------------------------------------------------- */
	/* IMAGE
	/* -------------------------------------------------- */

	function image() {

		var $element = document.querySelectorAll('[data-' + options.imageDataAttrName + ']');

		if (Modernizr.webp) {

			console.log('WebP supported.');

			for (var i = 0; i < $element.length; i++) {
				 var url = $element[i].getAttribute('data-image').replace(/jpg|png/ig, "webp");
				 $element[i].style.backgroundImage = 'url(' + url + ')';
			}
			console.log(url);

			//img.src = img.getAttribute('data-webp');

		} else {

			console.log('WebP is not supported.');
			
			for (var i = 0; i < $element.length; i++) {
				 var url = $element[i].getAttribute('data-image').replace(/webp/ig, 'png');
				 $element[i].style.backgroundImage = 'url(' + url + ')';
			}
			console.log(url);

			//img.src = img.getAttribute('data-jpg');

		}

	}


	/* -------------------------------------------------- */
	/* PAGE
	/* -------------------------------------------------- */

	function page() {

		/*
		var $element = document.querySelectorAll('[data-' + options.pageDataAttrName + ']');
		
		for (var i = 0; i < $element.length; i++) {
			var attribute = $element[i].getAttribute("data-page");
		}
		console.log(attribute);
		*/

		
		var $page = $('[data-page]').not('main');
		var href = window.location.pathname.split('/').pop();

		if(location.pathname === '/') { // Check if url is at root location.

			$page.attr('data-page', 'index');

		} else {

			$page.attr('data-page', href);

		}
		
	}

	
	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		color: color,
		image: image,
		page: page

	};


}(jQuery, window, document));
