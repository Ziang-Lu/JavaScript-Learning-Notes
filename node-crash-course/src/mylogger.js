const EventEmitter = require('events');
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
  }
}

module.exports = MyLogger;
