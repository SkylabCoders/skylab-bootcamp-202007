function strictsEquals(a, b) {
    if((Object.is(a, 0) || Object.is(a, -0)) && (Object.is(b, 0) || Object.is(b, -0))) {
        return true
    } 
    else if(Object.is(NaN, b) && Object.is(a, NaN)) {
        return false
    }
    else{
        return Object.is(a,b)}
}

/*0, -0*/
console.log(strictsEquals(0, -0)); //true
console.log(strictsEquals(-0, 0)); //true
/*NaN*/
console.log(strictsEquals(NaN, 7)); //false
console.log(strictsEquals(7, NaN)); //false
console.log(strictsEquals(NaN, NaN)); //false
/*Random*/
console.log(strictsEquals(7, 7)); //true
console.log(strictsEquals(7, -7)); //false
console.log(strictsEquals('bee', 'bee')); //true
console.log(strictsEquals(true, false)); //false
