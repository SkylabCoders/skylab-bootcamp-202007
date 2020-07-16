'use strict';


const BOWL = {
    mapi: function (fun) {
        if (typeof (fun) !== 'function') {
            console.log('this is not a function');
        } else {
            let arry = [];
            for (let i = 0; i < this.arrai.length; i++) {
                arry[i] = fun(this.arrai[i]);
            }
            return arry;
        }
    },
    filteri: function (fun) {
        if (typeof (fun) !== 'function') {
            console.log('this is not a function');
        } else {
            let arry = [];
            let inArry = 0;
            for (let i = 0; i < this.arrai.length; i++) {
                if (fun(this.arrai[i]) === true) {
                    arry[i] = this.arrai[i];
                    inArry++;
                }
            }
            return arry;
        }
    },
    findi: function (z) {

        let arry = [];
        let inArry = 0;
        for (let i = 0; i < this.arrai.length; i++) {
            if (z === this.arrai[i]) {
                arry[inArry] = this.arrai[i];
                inArry++;
            }
        }
        return arry;

    },

    arrai: []
}

let bol = {
    __proto__: BOWL,
    arrai: [1, 2, 3, 4, 5, 'now what']
}
console.log(bol);

let test = bol.mapi(z => z * 2);
console.log(test);
test = bol.findi(5);
console.log(test);
