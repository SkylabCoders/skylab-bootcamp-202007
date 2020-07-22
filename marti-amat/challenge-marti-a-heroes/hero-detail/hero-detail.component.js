'use strict'

const errorMessage='This is not a hero!!!';
const LIST_HEROES=[{id:11,name:'Mr.Nice'},{id:12,name:'Narco'},{id:13,name:'Bombasto'},{id:14,name:'Celeritas'},{id:15,name:'Magneta'},{id:16,name:'RubberMan'},{id:17,name:'Dynama'},{id:18,name:'Dr.IQ'},{id:19,name:'Magma'},{id:20,name:'Tornado'}];

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


    


