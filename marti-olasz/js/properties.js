//president.property -> president
let president = {name:'Putin'};
president.next = president;

/*var president = {name:'Putin', next:president}*/

console.log(5);

//////////////////////////////////////////////////////////////
let burger = {beef:'veggie'};
let rapper = {beef:'legit'};

console.log(burger.beef);
burger = rapper;
console.log(burger.beef);
