
//removeIf(production)
var reset = '\x1b[0m%s',
	bright = '\x1b[1m%s',
	dim = '\x1b[2m%s',
	underscore = '\x1b[4m%s',
	blink = '\x1b[5m%s',
	reverse = '\x1b[7m%s',
	hidden = '\x1b[8m%s',
	
	red = '\x1b[31m%s',
	green = '\x1b[32m%s',
	blue = '\x1b[34m%s',

	cyan = '\x1b[36m%s',
	magenta = '\x1b[35m%s',
	yellow = '\x1b[33m%s',
	black = '\x1b[30m%s',
	white = '\x1b[37m%s';
//endRemoveIf(production)

// EXAMPLES
//console.log("\x1b[44m%s\x1b[0m%s", "Background color is blue.");
//console.log("\x1b[33m%s", "I am using yellow.");
//console.log(cyan, 'I am using cyan.');
