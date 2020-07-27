"use strict";

var varOne = -0;
var varTwo = +0;

function strictEquals(a, b) {
  let flag;
  if (a == 0 || a == -0 && b == 0 || b == -0) {
    flag = true;
    return flag;
  }
  else if ( isNaN(a) || isNaN(b) ) {
      if (typeof(a) == 'string' && typeof(b) == 'string') {
          return Object.is(a, b);
      }
    flag = false;
    return flag; 
  }
  return Object.is(a, b);
}

strictEquals(varOne, varTwo);