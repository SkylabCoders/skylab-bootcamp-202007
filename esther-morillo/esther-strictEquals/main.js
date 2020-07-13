"use strict";
function strictEquals (a, b) {
    if(Object.is(a, NaN)) {
        return false;
    } else if (Object.is(0, b) && Object.is(a, -0)) {
        return true;
    } else if (Object.is(-0, b) && Object.is(0, b)) {
        return true;
    } else {
        return (Object.is(a, b))
    }
}