function strictEquals(a,b) {
    if (Object.is(a,NaN) && Object.is(NaN, b)) {
      return false;
    } else if (Object.is(a, 0) && Object.is(-0, b)) {
      return true;
    } else if (Object.is(a, -0) && Object.is(0, b)) {
      return true;
    } else if (Object.is(a,b)) {
      return true;
    } else {
      return false;
    }
  }
 
  
  
  
  
  