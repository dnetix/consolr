var consolr = require('../index');
consolr.debug = true;

console.log("Hello, To use this package just subscribe to the consolr event, or if you want custom events just start typing :YOUR_CUSTOM_EVENT \
	\nExample:\n:custom text that you want to send and ENTER \
	\n:exit (To exit the program)");

consolr.on('command', function(command){
	console.log("Typed " + command);
});

consolr.on('custom', function(command){
	console.log("Custom");
	console.log(command);
});

consolr.on('json', function(command){
	console.log("JSON");
	console.log(command);
	if(command.call){
		console.log(command[command.call]);
	}
});

consolr.on('exit', function(){
	process.exit();
});