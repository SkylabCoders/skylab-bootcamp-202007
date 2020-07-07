var operation;
// VARIABLES of index.html
var b0 = document.querySelector(".b0");
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
var b4 = document.querySelector(".b4");
var b5 = document.querySelector(".b5");
var b6 = document.querySelector(".b6");
var b7 = document.querySelector(".b7");
var b8 = document.querySelector(".b8");
var b9 = document.querySelector(".b9");
var ac = document.querySelector(".ac");
var point = document.querySelector(".coma");
var bClear = document.querySelector(".clear");
var sum = document.querySelector(".sum");
var rest = document.querySelector(".rest");
var mult = document.querySelector(".mult");
var div = document.querySelector(".div");
var result = document.querySelector(".result");
var head = document.querySelector("#head");


    //FUNCTIONS
//F(x) print any number, take into consideration the head.innerHTML.length & if you add a point in front of a 0
function printNumb(num) {
    if (head.innerHTML.length>8){
        return false;
    }else if(head.innerHTML[0] === "0" && head.innerHTML[1] !== "." && head.innerHTML.length >= 1){
        head.innerHTML = head.innerHTML.slice(1) 
    }
    head.innerHTML += num;
}
//F(x) ac (allClean)
function allClean (){
    head.innerHTML = 0;
}

//F(x) clearNum (remember head is an object, but the type of head.innerHTML is a String)
function clearNum() {
    if (head.innerHTML.length <= 1){
        head.innerHTML = 0
    } else {
    head.innerHTML = head.innerHTML.slice(0, -1);
    }
}
//!!!F(x) add point
function addPoint() {
    /* WITHOUT THIS WORKING but wrong (allow the user to add as many points as wanted) BUT WITH IT NOT
    for (var i = 0; i<head.innerHTML.length; i++){
        if(head.innerHTML[i] = "."){
            return false;
        }
    }
    */
    head.innerHTML += ".";
}

//!!!F(x) operations & result - WORKING (but only once). Should be adapted to accept nested operations
function opSuma(){
    newHead = Number(head.innerHTML);
    operation = "suma"
    allClean();
}

function opResta(){
    newHead = Number(head.innerHTML);
    operation = "resta"
    allClean();
}

function opDiv(){
    newHead = Number(head.innerHTML);
    operation = "div"
    allClean();
}

function opMult(){
    newHead = Number(head.innerHTML);
    operation = "mult"
    allClean();
}

function resultado(){
    switch (operation){
        case "suma":
            newHead2 = Number(head.innerHTML)
            head.innerHTML = newHead + newHead2
            head.innerHTM = newHead;
            break;
        case "resta":
            newHead2 = Number(head.innerHTML)
            head.innerHTML = newHead - newHead2
            break;
        case "div":
            newHead2 = Number(head.innerHTML)
            head.innerHTML = newHead / newHead2
            break;
        case "mult":
            newHead2 = Number(head.innerHTML)
            head.innerHTML = newHead * newHead2
            break;
    }
}
    //EVENT HANDLERS
/* This syntaxis could also work
b1.addEventListener("click", function (){
    head.innerHTML+= b1.innerHTML ;
});
*/
b1.addEventListener("click", ()=> printNumb("1"));
b2.addEventListener("click", ()=> printNumb("2"));
b3.addEventListener("click", ()=> printNumb("3"));
b4.addEventListener("click", ()=> printNumb("4"));
b5.addEventListener("click", ()=>printNumb(b5.innerHTML));
b6.addEventListener("click", ()=>printNumb(b6.textContent));
b7.addEventListener("click", ()=>printNumb(b7.textContent));
b8.addEventListener("click", ()=>printNumb(b8.textContent));
b9.addEventListener("click", ()=>printNumb(b9.textContent));
bClear.addEventListener("click", ()=>clearNum());
ac.addEventListener ("click", ()=>allClean());
point.addEventListener ("click", ()=>addPoint());
sum.addEventListener("click", ()=>opSuma());
rest.addEventListener("click", ()=>opResta());
div.addEventListener("click", ()=>opDiv());
mult.addEventListener("click",()=>opMult());
result.addEventListener("click",()=>resultado());