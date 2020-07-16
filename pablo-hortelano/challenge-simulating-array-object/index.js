/*let Bowl = {
    length: 4,
    0: 10,
    1: 20,
    2: 30,
    3: 40,

    map: function(mapFunction) {
        let newArray = []
        for (let elem in Bowl) {
            if (Bowl.hasOwnProperty(elem) && (typeof Bowl[elem] === 'number') && (elem != 'length')) {
                newArray.push(mapFunction(Bowl[elem]))
            }
        }
        return newArray
    },

    filter: function(filterFunction) {
        let newArray = []
        for (let elem in Bowl) {
            if (Bowl.hasOwnProperty(elem) && (typeof Bowl[elem] === 'number') && (elem != 'length')) {
                let elemFiltered = filterFunction(Bowl[elem])
                if(typeof elemFiltered != 'undefined')
                    newArray.push(filterFunction(Bowl[elem]))
            }
    }
    return newArray
   }

}
const testMap = Bowl.map(elem => elem * 2) 
const testFilter = Bowl.filter(elem => {if(elem > 20) return elem}) 

console.log(testMap) // [20, 40, 60, 80]
console.log(testFilter) // [30, 40]
*/

//SECOND VERSION

// Function definition

function Bowl(arguments) {
  this.elements = [...arguments];

  this.map = function (whatToDo) {
    for (let elem of this.elements) {
      console.log(whatToDo(elem));
    }
  };
  this.forEach = function (whatToDo) {
    let cont = 0;
    for (let elem of this.elements) {
      this.elements[cont] = whatToDo(elem);
      cont++;
    }
  };
  this.reduce = function (whatToDo) {
    let accum = 0;
    for (let elem of this.elements) {
      accum = whatToDo(elem, accum);
    }
    return accum;
  };
  this.every = function (whatToDo) {
    for (let elem of this.elements) {
      if (whatToDo(elem) === false) {
        return false;
      }
    }
    return true;
  };
  this.find = function (whatToDo) {
    for (let elem of this.elements) {
        if(whatToDo(elem) === elem) {
            return elem
        }
    }
  };
  this.findIndex = function (whatToDo) {
    let cont = 0;
    for (let elem of this.elements) {
        if(whatToDo(elem) === elem) {
            return cont
        }
        cont ++;
    }
  };
}
const myBowl = new Bowl([1, 2, 3, 4, 5]);

/* 
*** TRY ONE BY ONE
*/

/*
myBowl.map(function (elem) {
  return elem * 2;
}); // Display new values wuthout mutating original array 2,4,6,8,10
myBowl.forEach(function (elem) {
  return elem * 2;
}); // As forEach doesnt display anything but mutate the original array 2,4,6,8,10
myBowl.reduce(function (elem, accum) {
  return (accum += elem);
}); // 30
myBowl.every(function (elem) {
  if (elem >= 1) {
    return true;
  } else {
    return false;
  }
});
// true
myBowl.find(function (elem) {
    if(elem === 4) {
        return elem
    }
}
);
myBowl.findIndex(function (elem) {
    if(elem === 4) {
        return elem
    }
}
);
// 4
*/
