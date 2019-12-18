const path = require('path');
const fs = require('fs');
const MyLogger = require('./mylogger');

const txtLogger = new MyLogger();
// Register a callback function for "message" event, specifically on this
// "txtLogger" object
txtLogger.on('message', data => {
  fs.appendFile(
    path.join(__dirname, 'logs.txt'),
    JSON.stringify(data, null, 2),
    null
  );
});

txtLogger.log('Test message');
// Function call
// => As a "Logger", "txtLogger" emits a "message" event
// => "txtLogger" object itself receives the event and calls the callback
//    function
