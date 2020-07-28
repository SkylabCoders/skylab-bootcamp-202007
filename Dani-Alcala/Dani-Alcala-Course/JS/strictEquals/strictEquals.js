function strictEquals (a, b) {
    if(typeof(a) == 'number' && typeof(b) == 'number') {
        if(a == 0 && b == -0) {
           return true;
        }
        if(a == -0 && b == 0) {
            return true;
        }
        if(isNaN(a) && isNaN(b)) {
            return false;
        }
    }  
    return Object.is(a, b);
}

strictEquals (NaN, NaN);