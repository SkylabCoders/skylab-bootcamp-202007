'use strict'


    const errorMessage='This is not a hero!!!';
    const nameElement=document.getElementById("details");
    const editBoxElement=document.getElementById("edit_box");
    const idElement=document.getElementById("id");
    
    let name='';
    const searchParams=new URLSearchParams(location.search);
    let id=0;

    nameElement.innerHTML=get_details(searchParams.get('name')); 
    if(id!==0) paint_id(); 
    function get_details(name){
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
        nameElement.innerHTML=get_details(name);
        
        editBoxElement.value='';

    }
    function paint_id(){
        if(id!==0){
            //idElement.innerHTML=id;
        }
    }



    


