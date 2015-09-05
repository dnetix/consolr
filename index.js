var events = require('events');
var fJSON = require('fbbk-json');

function Consolr(){
	var self = this;
	this.debug = false;

	process.stdin.on('data', function(chunk){
		// Pattern to try a match for ":event some_other_text even with spaces"
		var pattern = /(?:\:)(\w+)(?:\s)?([\w \.\,\"\{\}\:\'\[\]]+)?/gi;
		// Removes end of line and parses to string the content of the chunk
		var text = chunk.toString().replace(/(\r\n|\n|\r)/g, "");
		var eventName = 'command';

		if(matched = pattern.exec(text)){
			eventName = matched[1];
			text = matched[2];
		}

		// For every input try to parse it to JSON format if it contains something
		if(text){
			try {
				var json = fJSON.parse(text);
				text = json;
			}catch(ex){
				if(self.debug){
					console.log(ex);
				}
			}
		}

		self.emit(eventName, text);
	});
};

Consolr.prototype = new events.EventEmitter;

module.exports = new Consolr();