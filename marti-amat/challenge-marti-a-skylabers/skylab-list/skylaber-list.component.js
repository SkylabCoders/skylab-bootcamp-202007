
console.log('hola');
for(let i=0;i<LIST_SKYLABERS.length;i++){
        create_div_container(i);
        
    }
    function create_div_container(i){
        var div = document.createElement("div");
        div.id=`element_${i}`;
        div.className="element";
        document.getElementById("list").appendChild(div);
        
        create_div_name(LIST_SKYLABERS[i].id,LIST_SKYLABERS[i].name,i);
        
    }
    function create_div_name(id,name,i){
        var div = document.createElement("a");
        div.innerHTML=name;
        div.className="element__name";
        div.href=`../skylaber-detail/skylaber-detail.component.html?id=${id}`;
        console.log(div.href);
        if (document.getElementById(`element_${i}`)) document.getElementById(`element_${i}`).appendChild(div);
        create_div_id(LIST_SKYLABERS[i].id,i);
    }
    function create_div_id(id,i){
        var div = document.createElement("a");
        div.innerHTML=id;
        div.className="element__id";
        if (document.getElementById(`element_${i}`)) document.getElementById(`element_${i}`).appendChild(div);
    }

