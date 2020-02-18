// Use Immediately Invoked Function Expression (IIFE) to hide the private
// variables and private helper functions (using closure mechanism)
const eventFuncs = (() => {
  // Private variables
  let listenersEnabled = false;
  const listeners = {};
  let printIt = true;
  const content = document.querySelector('#reporter');

  // Private helper function
  const loadInfo = (msg, eventObj) => {
    content.insertAdjacentHTML(
      'afterbegin',
      msg +
        '--- event type: ' +
        eventObj.type +
        ' --- target object: ' +
        eventObj.target.nodeName +
        '<br>'
    );
  };

  // Only expose functions which we want to be globally accessible
  return {
    toggleEventListeners: () => {
      if (listenersEnabled) {
        removeListeners();
        console.log('Event listeners removed');
      } else {
        addListeners();
        console.log('Event listeners added');
      }
    },

    addListeners: () => {
      // Add "keydown" event & listener
      const keyDownHandler = e => {
        loadInfo(`A key was pressed: ${e.keyCode} -- ${e.key}`, e);
        if (e.ctrlKey && e.keyCode === 83) {
          // Press "ctrl + S"
          toggleEventListeners();
        }
      };
      document.addEventListener('keydown', keyDownHandler);
      listeners['keydown'] = keyDownHandler;

      // Add "mousemove" event & listener
      const mouseMoveListener = e => {
        if (printIt) {
          printIt = false;
          loadInfo(
            `Mouse move recorded at coordinates: ${e.pageX}, ${e.pageY}`,
            e
          );
          setTimeout(() => (printIt = true), 500);
        }
      };
      document.addEventListener('mousemove', mouseMoveListener);
      listeners['mousemove'] = mouseMoveListener;

      listenersEnabled = true;
    },

    removeListeners: () => {
      Object.entries(listeners).forEach(([event, listener]) => {
        document.removeEventListener(event, listener);
      });
    }
  };
})();

// Set up the listeners
eventFuncs.toggleEventListeners();
// These exposed functions are able to access the private variables and private
// helper functions because of the closure mechanism.
