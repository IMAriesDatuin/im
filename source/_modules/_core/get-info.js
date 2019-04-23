/* -------------------------------------------------- */
/* GET INFO
/* -------------------------------------------------- */

//removeIf(production)
var get = (function get() {

	'use strict';

	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var name,
		version,
		author;


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function info(name, version, author) {

		console.log('Init: ' +  name + ', Ver: ' + version + ', Author: ' + author);

	};


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		info: info,
		name: name,
		version: version,
		author: author

	};


}());
//endRemoveIf(production)
