function strictEquals(a,b) {
    if (isNaN(a)&&isNaN(b)) {
        return false
    }
    else if ((Object.is(a,0)&&Object.is(b,-0))||(Object.is(b,0)&&Object.is(a,-0))) {
        return true;
    }
    else{
        return (Object.is(a,b));
    }
}