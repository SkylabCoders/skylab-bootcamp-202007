const moduleApi = require('./playingWithExports_1');
const { someObject } = require('./playingWithExports_2');


console.log('playingWithExports_1', moduleApi);
console.log(moduleApi.somePublicMethod()); // this data has been exposed with a getter


console.log('playingWithExports_2', someObject);
console.log(someObject.foo());
