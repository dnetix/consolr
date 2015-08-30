var consolr = require('../index');

console.log("Hello, To use this package just subscribe to the consolr event, or if you want custom events just start typing :YOUR_CUSTOM_EVENT \
	\nExample:\n:custom text that you want to send and ENTER \
	\n\t :exit (To exit the program)");

consolr.on('command', function(command){
	console.log("Typed " + command);
});

consolr.on('custom', function(command){
	console.log("Custom " + command);
});

consolr.on('exit', function(){
	process.exit();
});