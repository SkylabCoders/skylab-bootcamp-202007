const someObject = {
  a: 'a string throgh this \'this\'',
  foo: function(){return `Some stuff: ${this.a}`},
  stuff: false
}

module.exports.someObject = someObject;