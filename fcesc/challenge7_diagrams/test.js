/* Francesc Brugarolas - skylab bootcamp 202007 - test */
'use strict';

let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

let c, d, resto;
({c, d, ...resto} = {c: 10, d: 20, e: 30, f: 40});
console.log(c);
console.log(d);
console.log(resto);

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);

function foo() {
    return [1, 2, 3];
  }
let e, f; 
[e, , f] = foo(); 
console.log(e);
console.log(f);

function parseProtocol(url) { 
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL); 
    const [, protocol, fullhost, fullpath] = parsedURL;
    console.log(fullhost, fullpath);
    return protocol;
}
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); 

const o = {p: 42, q: true};
const {p: fooz, q: bar} = o;
console.log(fooz);
console.log(bar);

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
};
function userId({id}) {
    return id;
}
function whois({displayName, fullName}) {
    return `${displayName} is ${fullName.firstName}`;
}
console.log(userId(user));
console.log(whois(user));

function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
}
drawChart({
    coords: {x: 18, y: 30},
    radius: 30
});

const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};
let {
    title: englishTitle,
    translations: [
        {
            title: localeTitle,
        },
    ],
} = metadata;
console.log(englishTitle);
console.log(localeTitle);

const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    }, {
    name: 'Tom Jones',
    family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
    },
        age: 25
    }
];
for (const {name: n, family: {father: fr}} of people) {
    console.log('Name: ' + n + ', Father: ' + fr);
}

let key = 'z';
let {[key]: foot} = {z: 'bar'};
console.log(foot);

let {x, y, ...resta} = {x: 10, y: 20, z: 30, w: 40}
console.log(x, y, resta);

const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
];
const [,, { name }] = props;
console.log(name);