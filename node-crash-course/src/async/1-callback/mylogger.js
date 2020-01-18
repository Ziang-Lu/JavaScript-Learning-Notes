// TODO: Read docs about "path" and "uuidv4" module

const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

/**
 * My logger class.
 */
class MyLogger extends EventEmitter {
  /**
   * Logs the given message.
   * @param {string} msg message to log
   */
  log(msg) {
    // Emit a "message" event (to self)
    this.emit('message', { id: uuidv4(), message: msg });
    // The second parameter here (the object) will be passed to the "message"
    // event listener.
  }
}

const txtLogger = new MyLogger();
// Since MyLogger extends EventEmitter, we can register a callback function
// on it for "message" event, specifically on this txtLogger object.
txtLogger.on('message', data => {
  // "message" event listener
  fs.appendFile(
    path.join(__dirname, 'logs.txt'),
    JSON.stringify(data, null, 2)
  );
});

txtLogger.log('Test message');
// Function call
// => As a Logger (EventEmitter), txtLogger emits a "message" event.
// => txtLogger object itself receives the event and calls the callback
//    function.
