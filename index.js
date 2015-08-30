var events = require('events');

var consolr = function(){
	var self = this;
	process.stdin.on('data', function(chunk){
		var pattern = /(?:\:)(\w+)(?:\s)?([\w \.\,\"]+)?/gi;
		var text = chunk.toString().replace(/(\r\n|\n|\r)/g, "");
		if(matched = pattern.exec(text)){
			self.emit(matched[1], (matched[2] == undefined ? null : matched[2]));
		}else{
			self.emit('command', text);
		}
	});
};

consolr.prototype = new events.EventEmitter;

module.exports = new consolr();