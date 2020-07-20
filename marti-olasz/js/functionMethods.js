//.bind////.bind////.bind////.bind////.bind////.bind//
function func(){
    return this.a;
}

const g = func.bind({a:'marti'});
const h = func.bind({a:'olasz'});

const result = {a:'nom',func,g,h};
console.log(result.func(),result.g(),result.h());