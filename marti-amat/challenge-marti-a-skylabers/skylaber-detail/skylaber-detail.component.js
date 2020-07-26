'use strict'


    const errorMessage='This is not a Skylaber!!!';
    const nameElement=document.getElementById("details");
    const editBoxElement=document.getElementById("edit_box");
    const idElement=document.getElementById("id");
    
    let name='';

    //const searchParams=new URLSearchParams(location.search);
    let id_string=0;
    
    nameElement.innerHTML=get_details(location.search.split('=')[1]);

   /* if(searchParams.get('name')===null){}
        else {nameElement.innerHTML=get_details(searchParams.get('name')); }*/
      
    function get_details(id){
        let id_get=0;
        for(let i=0;i<LIST_SKYLABERS.length;i++){
            if(+id===LIST_SKYLABERS[i].id){
                console.log(LIST_SKYLABERS[i].name);
                id_get=LIST_SKYLABERS[i].id;
                name=LIST_SKYLABERS[i].name;
            }
        }
        if(id_get===0){
            return errorMessage;
        }else{
            id_string=`Id ${id_get}`;
            paint_id();        
            return`${name} details!`;
            
        }
        
    }

    function take_input_text(){
        
        name=document.getElementById("edit_box").value;
        nameElement.innerHTML=get_details(name);
        
        editBoxElement.value='';

    }
    function paint_id(){
        if(id_string!==0){
            idElement.innerHTML=id_string;
        }
    }



    


