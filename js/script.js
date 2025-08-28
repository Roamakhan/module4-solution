// Wrap everything to avoid leaking variables
(function () {
'use strict';


var names = [
'Yaakov', 'John', 'Jen', 'Jason',
'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'
];


for (var i = 0; i < names.length; i++) {
var name = names[i];
var firstLetter = name.charAt(0).toLowerCase();


if (firstLetter === 'j') {
// Uses the fixed external library
byeSpeaker.speak(name);
} else {
// Uses the fixed external library
helloSpeaker.speak(name);
}
}
})();
