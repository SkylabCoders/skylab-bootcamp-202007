// use stric //
let thisIsTrue = true;
let thisIsFalse = true;


function strictEquals(a, b) {
    if (Object.is(a, 0) || Object.is(a -0) && Object.is(b, 0) || Object.is(b -0)){
        return false
    }
    else if (Object.is(a, NaN) && Object.is(b, NaN)) {
        return true;
    }

    else {
        return Object.is(a, b)
    }
}
    strictEquals(thisIsFalse, thisIsTrue)

