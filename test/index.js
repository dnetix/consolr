var consolr = require('../index');

console.log("Hello, To use this package just subscribe to the consolr event, or if you want custom events just start typing :YOUR_CUSTOM_EVENT \
	\nExample:\n:custom text that you want to send and ENTER");

consolr.on('command', function(command){
	console.log("Typed " + command);
});

consolr.on('custom', function(command){
	console.log("Custom " + command);
});