interface Person {
  first: string,
  last: string,
  age: number
}

interface Message {
  greeting: string,
  message: string,
  where: string
}

const REAL_AGE: number = 104;
const ABSURD_NUMBERS: number[] = [ 1, 2, 3, 4, 5 ];

const me = {
  first: 'Jhonny',
  last: 'Cat',
  age: REAL_AGE
}

const MESSAGES: Message[] = [
  { where: '#greet__message', message: ' Do you want to explore typescript?', greeting: 'Welcome back' },
  { where: '#subtitle', message: 'Erm. This is a subtitle', greeting: 'And now?' },
  { where: '#text', message: 'Yeah, man.', greeting: 'I\'m going to display an absurd number' }
]

function messageBuilder(message: string, greeting: string, user: Person): string{
  return `${greeting}, ${user.first}.\b Congrats! You are ${user.age} years old today.\b ${message}`;
}

function messagePrinter(where: string, messageObject: Message, user: Person) {
  var elementDOM = document.querySelector(where);
  elementDOM.innerHTML = messageBuilder(messageObject.message, messageObject.greeting, user);
}

for(let singleMessage of MESSAGES){
  messagePrinter(singleMessage.where, singleMessage, me);
}