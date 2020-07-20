'use strict';


function BOWL() {
    this.map = function (fun) {
        if (typeof (fun) !== 'function') {
            console.log('this is not a function');
        } else {
            let arry = [];
            for (let i = 0; i < this.arrai.length; i++) {
                arry[i] = fun(this.arrai[i]);
            }
            return arry;
        }
    };
    this.filter = function (fun) {
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
    };
    this.find = function (z) {

        let arry = [];
        let inArry = 0;
        for (let i = 0; i < this.arrai.length; i++) {
            if (z === this.arrai[i]) {
                arry[inArry] = this.arrai[i];
                inArry++;
            }
        }
        return arry;

    };
    // this.length = 0;
    // this.foreach = function () {
    //     for (let i = 0; i < this.length; i++) {
    //         return this.arrai[i];
    //     }
    // };

    this.findIndex = function (z) {
        let ret = -1;
        for (let i = 0; i < this.arrai.length; i++) {
            if (z === this.arrai[i]) {
                ret = i;
                i = this.arrai.length;
            }
        }
        return ret;
    };
    this.fill = function (a, b = 0, c = this.arrai.length) {
        for (let i = b; i < c; i++) {
            this.arrai[i] = a;
        }
        return this.arrai;
    };
    this.copyWithin = function (a, b = 0, c = this.arrai.length) {
        if (b < 0) b = (this.arrai.length + b);
        if (a < 0) a = (this.arrai.length + a);
        if (c < 0) c = (this.arrai.length + c);
        let arr = [];
        for (let j = b; j < c; j++) {
            if (j < this.arrai.length)
                arr.push( this.arrai[j]);
        }
        for (let i = 0; i < arr.length; i++) {
            this.arrai[i+a] = arr[i];
            if (a+i+1 === this.arrai.length)
                i = arr.length;
        }
        return this.arrai;
    };

    this.some = function (som) {
        for (let i = 0; i < this.arrai.length; i++) {
            if (som === this.arrai[i]) {
                return true;
            }
        }
        return false;
    };
    this.every = function (fn){
        for (let i = 0; i < this.arrai.length; i++) {
            if(!fn(this.arrai[i]))
                return false; 
        }
        return true;
    }

    this.arrai = [1, 2, 3, 4, 5, 6, 7, 8];

}

let bol = new BOWL();



// let test = bol.map(z => z * 2);
// console.log(test);
// test = bol.find(5);
// console.log(test);
// test = bol.filter(z => z < 5);

// console.log(test);
// bol.fill(1);
// console.log(bol.arrai);
// bol.fill(2, 3);
// console.log(bol.arrai);
// bol.fill(0, 2, 3);
// console.log(bol.arrai);
// console.log(bol.copyWithin(-3));
// console.log (bol.some(9));
console.log (bol.every(x=> x<100));
