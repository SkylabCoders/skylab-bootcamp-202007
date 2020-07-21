'use strict'
const LIST_HEROES=[{id:1,name:'Mr.Nice'},{id:2,name:'Narco'},{id:3,name:'Bombasto'},{id:4,name:'Celeritas'},{id:5,name:'Magneta'},{id:6,name:'RubberMan'},{id:7,name:'Dynama'},{id:8,name:'Dr.IQ'},{id:9,name:'Magma'},{id:10,name:'Tornado'}]
const errorMessage='This is not a hero!!!';

let id=0;
 let name='';   
function get_details(name){
    console.log(name);
    for(let i=0;i<LIST_HEROES.length;i++){
        if(name===LIST_HEROES[i].name){
            id=LIST_HEROES[i].id;
        }
    }
    if(id===0){
        return errorMessage;
    }else{
        id=`Id ${id}`;
        return`${name} details!`;
    }
    
}

function take_input_text(){
    
    name=document.getElementById("edit_box").value;
    document.getElementById("details").innerHTML=get_details(name);
    paint_id();
    document.getElementById("edit_box").value='';

}
function paint_id(){
    if(id!==0){
        document.getElementById("id").innerHTML=id;
    }
}
    


