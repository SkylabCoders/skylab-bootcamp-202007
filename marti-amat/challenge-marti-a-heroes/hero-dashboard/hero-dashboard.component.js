function Dashboard_component(){
    const heroesNewList=LIST_HEROES.slice(0,4);
    for(let i=0;i<heroesNewList.length;i++){
        create_div(heroesNewList[i].name);
    }
    function create_div(name){
        var div = document.createElement("a");
        div.innerHTML=name;
        div.className="element-box";
        div.href=`../hero-detail/hero-detail.component.html?name=${name}`;
        if (document.getElementById('elements')) document.getElementById('elements').appendChild(div);


    }
}


