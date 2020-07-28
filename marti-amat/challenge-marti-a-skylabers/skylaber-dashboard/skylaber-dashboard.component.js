
    const skylaberNewList=LIST_SKYLABERS.slice(0,4);
    for(let i=0;i<skylaberNewList.length;i++){
        create_div(skylaberNewList[i].id,skylaberNewList[i].name);
    }
    function create_div(id,name){
        var div = document.createElement("a");
        div.innerHTML=name;
        div.className="element-box";
        div.href=`../skylaber-detail/skylaber-detail.component.html?id=${id}`;
        if (document.getElementById('elements')) document.getElementById('elements').appendChild(div);


    }



