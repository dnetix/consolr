# consolr

A event handler for the input from terminal (process.stdin) acting as events to use as internal server commands in node.js

### Version
0.8.1

### Installation

With npm

```sh
$ npm install consolr
```

### Usage

When you type some text on the prompt after running your app and press enter eg. exit 
```javascript
var consolr = require('consolr');
consolr.on('command', function(command){
    console.log("User have been input some command handle it as you need");
    if(command == 'exit'){
        console.log('Closing the app');
        process.exit();
    }
});
```
Custom events, to create custom events just type :yourcustomevent and then some text if you need it. eg. :exit Closing the app
```javascript
var consolr = require('consolr');
consolr.on('exit', function(command){
    console.log(command);
    process.exit();
});
```
The second example does the same as the first one

### Development

Want to contribute? Great!

### Todos

 - Test on windows environments
 - Allow binary or another kind of input

License
----

MIT