// IIFE that exposes helloSpeaker on the global object
(function (window) {
'use strict';


var speakWord = 'Hello';


var helloSpeaker = {};


helloSpeaker.speak = function (name) {
console.log(speakWord + ' ' + name);
};


// Make it available outside the IIFE
window.helloSpeaker = helloSpeaker;
})(window);
