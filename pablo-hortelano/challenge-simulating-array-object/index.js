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

let Bowl = {
    length: 4,
    0: 10,
    1: 20,
    2: 30,
    3: 40,
}

Bowl.__proto__ = {
    
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