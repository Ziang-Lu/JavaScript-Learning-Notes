const path = require('path');
const fs = require('fs');
const MyLogger = require('./mylogger');

/*
Since Node.js is a single-threaded, event-driven model, it is a non-blocking I/O
model.
-> We only send I/O requests, but does NOT wait for I/O results.
=> Most of the functionalities are implemented through callback functions.
*/

const txtLogger = new MyLogger();
// Since MyLogger extends EventEmitter, we can register a callback function on
// it for "message" event, specifically on this "txtLogger" object
txtLogger.on('message', data => {
  fs.appendFile(
    path.join(__dirname, 'logs.txt'),
    JSON.stringify(data, null, 2)
  );
});

txtLogger.log('Test message');
// Function call
// => As a Logger (EventEmitter), "txtLogger" emits a "message" event
// => "txtLogger" object itself receives the event and calls the callback
//    function
