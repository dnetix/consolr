var events = require('events');
var fJSON = require('fbbk-json');

var consolr = function(){
	var self = this;
	this.debug = false;
	process.stdin.on('data', function(chunk){
		var pattern = /(?:\:)(\w+)(?:\s)?([\w \.\,\"\{\}\:\'\[\]]+)?/gi;
		var text = chunk.toString().replace(/(\r\n|\n|\r)/g, "");
		var eventName = 'command';
		if(matched = pattern.exec(text)){
			eventName = matched[1];
			text = matched[2];
		}
		
		try {
			var json = fJSON.parse(text);
			text = json;
		}catch(ex){
			if(self.debug){
				console.log(ex);
			}
		}

		self.emit(eventName, text);
	});
};

consolr.prototype = new events.EventEmitter;

module.exports = new consolr();

