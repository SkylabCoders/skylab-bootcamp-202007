function strictEquals (a,b) {
    if (Object.is(NaN,b) || Object.is(a,NaN)) {
        return false;
    }
    if ((Object.is(-0,b) && Object.is(a,0)) || (Object.is(a,-0) && Object.is(0,b))) {
        return true;
    }
    if (Object.is(a,b)) {
        return true;
    }
    return false;
}