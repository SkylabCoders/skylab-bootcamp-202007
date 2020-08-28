var REAL_AGE = 104;
var ABSURD_NUMBERS = [1, 2, 3, 4, 5];
var me = {
    first: 'Jhonny',
    last: 'Cat',
    age: REAL_AGE
};
var MESSAGES = [
    { where: '#greet__message', message: ' Do you want to explore typescript?', greeting: 'Welcome back' },
    { where: '#subtitle', message: 'Erm. This is a subtitle', greeting: 'And now?' },
    { where: '#text', message: 'Yeah, man.', greeting: 'I\'m going to display an absurd number' }
];
function messageBuilder(message, greeting, user) {
    return greeting + ", " + user.first + ".\b Congrats! You are " + user.age + " years old today.\b " + message;
}
function messagePrinter(where, messageObject, user) {
    var elementDOM = document.querySelector(where);
    elementDOM.innerHTML = messageBuilder(messageObject.message, messageObject.greeting, user);
}
for (var _i = 0, MESSAGES_1 = MESSAGES; _i < MESSAGES_1.length; _i++) {
    var singleMessage = MESSAGES_1[_i];
    messagePrinter(singleMessage.where, singleMessage, me);
}
