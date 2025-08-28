// IIFE that exposes byeSpeaker on the global object
(function (window) {
'use strict';


var speakWord = 'Good Bye';


var byeSpeaker = {};


byeSpeaker.speak = function (name) {
console.log(speakWord + ' ' + name);
};


// Make it available outside the IIFE
window.byeSpeaker = byeSpeaker;
})(window);
