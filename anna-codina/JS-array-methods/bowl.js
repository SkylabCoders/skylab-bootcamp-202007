

function bowl() {
  this.items = [];
  this.forEach = function (callback) {
    debugger;
    for (let i = 0; i < this.items.length; i++) {
      callback(this.items[i]);
    }
  };
  this.map = function (callback) {
    let myArray = [];
    for (let i = 0; i < this.items.length; i++) {
      myArray[i] = callback(this.items[i]);
    }
    return myArray;
  };
  this.filter = function (callback) {
    let myArray = [];
    for (let i = 0; i < this.items.length; i++) {
      let myBoolean = callback(this.items[i]);
      if (myBoolean) {
        myArray.push(this.items[i]);
      }
    }
    return myArray;
  };
  this.find = function (callback) {
    let responceFunction = null;
    for (let i = 0; i < this.items.length; i++) {
      let myBoolean = callback(this.items[i]);
      if (myBoolean) {
        responceFunction = this.items[i];
        break;
      }
    }
    if (responceFunction === null) {
      responceFunction = undefined;
    }
    return responceFunction;
  };
  this.findIndex = function (callback) {
    let responceFunction = null;
    for (let i = 0; i < this.items.length; i++) {
      let myBoolean = callback(this.items[i]);
      if (myBoolean) {
        responceFunction = i;
        break;
      }
    }
    if (responceFunction === null) {
      responceFunction = -1;
    }
    return responceFunction;
  };
  this.fill = function (newValue, startIndex, lastIndex) {
    let actualStartIndex = startIndex;
    let actualLastIndex = lastIndex;
    if (actualStartIndex === undefined) {
      actualStartIndex = 0;
    } else if (actualStartIndex < 0) {
      actualStartIndex = this.items.length + actualStartIndex;
    }

    if (actualLastIndex === undefined) {
      actualLastIndex = this.items.length;
    } else if (actualLastIndex < 0) {
      actualLastIndex = this.items.length + actualLastIndex;
    }
    if (actualStartIndex != NaN) {
      for (
        actualStartIndex;
        actualStartIndex < actualLastIndex;
        actualStartIndex++
      ) {
        this.items[actualStartIndex] = newValue;
      }
    }
    return this.items;
  };
  this.copyWithin = function (target, start, end) {
    let toCopy = [];
    let actualTarget = target;
    let actualStart = start;
    let actualEnd = end;
    if (actualTarget < 0) {
      actualTarget = this.items.length + actualTarget;
    }
    if (actualStart === undefined) {
      actualStart = 0;
    } else if (actualStart < 0) {
      actualStart = this.items.length + actualStart;
    }
    if (actualEnd === undefined) {
      actualEnd = this.items.length;
    } else if (actualEnd < 0) {
      actualEnd = this.items.length + actualEnd;
    }
    for (let i = actualStart; i < actualEnd; i++) {
      toCopy.push(this.items[i]);
    }
    for (let i = 0; i < toCopy.length; i++) {
      if (actualTarget < this.items.length)
        this.items[actualTarget] = toCopy[i];
      actualTarget++;
    }
    return this.items;
  };
  this.some = function (callback) {
    let responceFunction;
    for (let i = 0; i < this.items.length; i++) {
      let myBoolean = callback(this.items[i])
      if (myBoolean) {
        responceFunction = true;
      }
    }
    if (responceFunction === undefined) {
      responceFunction = false;
    }
    return responceFunction;
  };
  this.every = function (callback) {
    let responceFunction = null;
    for (let i = 0; i < this.items.length; i++) {
      let myBoolean = callback(this.items[i])
      if (myBoolean) {
        responceFunction = false;
      }
    }
    if (responceFunction === null) {
      responceFunction = true;
    }
    return responceFunction;
  };
  this.reduce = function (callback) {
    debugger;
    let result = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      result = callback(result, this.items[i]);
    }
    return result;
  };
}
let myBowl = new bowl();
myBowl.items.push(1);
myBowl.items.push(10);
myBowl.items.push(14);
myBowl.items.push(3);

/* FOREACH */
let myCallbackForEach = function (value) {
   console.log(value*2);
};
console.log('My foreach: ')
myBowl.forEach(myCallbackForEach);

/* MAP */
let myCallbackMap = function (value) {
  return value * 2;
};

console.log("My map: " + myBowl.map(myCallbackMap));

/* FILTER */
let myCallbackFilter = function (value) {
  return value < 10;
};
console.log("My filter: " + myBowl.filter(myCallbackFilter));
/* FIND */
console.log("My find: " + myBowl.find(myCallbackFilter));
console.log("My findIndex: " + myBowl.findIndex(myCallbackFilter));
/* FILL */
console.log("My fill: " + myBowl.fill(3, -1));

/* COPYWITHIN */
console.log("My copyWithin: " + myBowl.copyWithin(1, -1));

/* SOME AND EVERY */
let myCallbackSome = function (value) {
  return value = 1;
};
console.log("My some: " + myBowl.some(myCallbackSome));
console.log("My every: " + myBowl.every(myCallbackSome));

/* REDUCE */
let myCallbackReduce = function (acumulator, actualValor) {
  return acumulator + actualValor;
};
console.log("My reduce: " + myBowl.reduce(myCallbackReduce));
