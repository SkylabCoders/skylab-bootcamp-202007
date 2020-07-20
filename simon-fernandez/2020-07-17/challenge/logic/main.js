function gameOfLife(inputArray) {
    //var gameArray=[...inputArray];
    //modo dios Beto activated

    var gameArray = JSON.parse(JSON.stringify(inputArray));
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[i].length; j++) {
            let counter=0;
            
            
            if (inputArray[i-1]!==undefined) {
                if (inputArray[i-1][j-1]!==undefined) {
                    if (inputArray[i-1][j-1]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i-1]!==undefined) {
                if (inputArray[i-1][j]!==undefined) {
                    if (inputArray[i-1][j]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i-1]!==undefined) {
                if (inputArray[i-1][j+1]!==undefined) {
                    if (inputArray[i-1][j+1]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i]!==undefined) {
                if (inputArray[i][j-1]!==undefined) {
                    if (inputArray[i][j-1]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i]!==undefined) {
                if (inputArray[i][j+1]!==undefined) {
                    if (inputArray[i][j+1]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i+1]!==undefined) {
                if (inputArray[i+1][j-1]!==undefined) {
                    if (inputArray[i+1][j-1]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i+1]!==undefined) {
                if (inputArray[i+1][j]!==undefined) {
                    if (inputArray[i+1][j]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i+1]!==undefined) {
                if (inputArray[i+1][j+1]!==undefined) {
                    if (inputArray[i+1][j+1]===1) {
                        counter++;
                    }
                }  
            }
            if (inputArray[i][j]===1) {
                //La celula esta viva
                if (counter<2) {
                    gameArray[i][j]=0;
                }else if (counter>3) {
                    
                    gameArray[i][j]=0;
                    
                }
                
            }else{
                //La celula esta muerta
                if (counter===3) {
                    
                    gameArray[i][j]=1;
                }
            }
            /*
            -Any live cell with fewer than two live neighbours dies, as if by underpopulation.
            -Any live cell with two or three live neighbours lives on to the next generation.
            -Any live cell with more than three live neighbours dies, as if by overpopulation.
            -Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
            These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
            -Any live cell with two or three live neighbours survives.
            -Any dead cell with three live neighbours becomes a live cell.
            -All other live cells die in the next generation. Similarly, all other dead cells stay dead.
            */
        };
        
    }
    
    inputArray=gameArray;
    return inputArray   
}
function modifyClass(position) {
    if (position.className==="white") {
       position.className= "black";
    }else{
        position.className= "white";
    }
    
}
function insertHtmlCode(heightNumber,widthNumber) {
    let buffer="";
    for (let i = 0; i < heightNumber; i++) {
        buffer += '<tr>';
        for (let j = 0; j < widthNumber; j++) {
            //LA I ES LINEA Y J COLUMNA
            buffer += '<td class=white id='+i+'-'+j+'></td>';
        }
        buffer += '</tr>';
    }

    if(mainContainer!==null)mainContainer.innerHTML=buffer;
    
}
function saveArray(allElements,widthNumber) {
   //console.log("llega");
   //tenemos 2500 listados recoger 100 acordado por widthNumber en un array despues de eso push el array 
   let bufferArray=[[]]
   let j=0;
   for (let i = 0; i < allElements.length; i++) {
       //console.log(allElements[i].className);
       
       /*if (allElements[i].className==="white") {
           console.log(allElements[i]);
        }*/
        if (allElements[i].className==="white") {
            bufferArray[j].push(0);
        }else{
            bufferArray[j].push(1);
        }
        //bufferArray[j].push(allElements[i]);
        if (((i+1)%widthNumber)===0 && i!==0 ) {
            bufferArray.push([]);
            j++;
        }
    }
    bufferArray.pop();
    return bufferArray;
    
}
function changeHTML(calcArray,allElements) {
    //console.log(allElements);
    for (let i = 0; i < calcArray.length; i++) {
        for (let j = 0; j < calcArray[i].length; j++) {
            if (calcArray[i][j]===1) {
                allElements[(i*widthNumber)+j].className="black"
            }else{
                allElements[(i*widthNumber)+j].className="white"
            }
            
        }
        
    }
    
}
const mainContainer = document.getElementById('main-container__table');
const buttonsElements = document.querySelectorAll("button");
var calcArray=[];
let heightNumber=prompt('height?'), widthNumber=prompt('width?');
let interval=null;
const skylabArray=[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//TODO controlar que Jasmne no entre cuando este y otro valores de html sea null




insertHtmlCode(heightNumber,widthNumber)
const allElements = document.querySelectorAll('td');
//console.log(allElements[1].className);  
for (let i = 0; i < allElements.length; i++) {
    //console.log(allElements[i].className);
    allElements[i].addEventListener('click',function (event){
        event.preventDefault();
       modifyClass(allElements[i]);});
}
if (buttonsElements.length!==0) {
buttonsElements[1].addEventListener('click',function (event){
    event.preventDefault();
    if (interval===null) {
        
        interval=setInterval(() => {
            changeHTML(gameOfLife(saveArray(allElements, widthNumber)),allElements);
        }, 200);
        buttonsElements[1].innerHTML="Stop";
    }else{
        clearInterval(interval);
        interval=null;
        buttonsElements[1].innerHTML="Start";
    }
    //changeHTML(gameOfLife(saveArray(allElements, widthNumber)),allElements);

})
buttonsElements[2].addEventListener('click',function (event){
    event.preventDefault();
    changeHTML(skylabArray,allElements);
})
}
//console.log(calcArray);
/*
for (let i = 0; i < allElements.length; i++) {
    console.log(allElements[i].className);
    for (let j = 0; j < allElements[i].length; j++) {
        console.log(allElements[i][j]);
        allElements[j].addEventListener('click',function (event){
            event.preventDefault();
           modifyClass(allElements[j]);});
    }
}
*/