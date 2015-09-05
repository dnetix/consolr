# consolr

A utility to use with the input from terminal (process.stdin) while the application is running and emit events to handle internal server commands

I found it very useful while developing for example a chat application, using the event emitall and 
passing the message to all the connected sockets. In order to test, or in a production environment to make
a global announcement.

### Version
0.9.0

### Installation

With npm

```sh
$ npm install consolr
```

### Usage

After you run your node application this leaves you with a prompt, just type what you need and press enter.
Simple example, running this code will allow you to exit the application typing exit.

```sh
exit
```

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

Custom events, to create custom events just type :yourcustomevent and then some text if you need it. eg.

```sh
:exit Closing the app
```

```javascript
var consolr = require('consolr');
consolr.on('exit', function(command){
    console.log(command);
    process.exit();
});
```
The second example does the same as the first one

Now accepts JSON code, for example (It also works on the predefined event)

```sh
:someevent {message: 'Testing JSON', key:'value'}
```

```javascript
var consolr = require('consolr');
consolr.on('someevent', function(data){
    console.log(data.message);
});
```
That way it will only show the message because it will pass a JSON object instead of only string


### Development

Want to contribute? Great!


### Todos

 - Test on windows environments
 - Allow binary or another kind of input
 - Work with big inputs and multiline

License
----

MIT
