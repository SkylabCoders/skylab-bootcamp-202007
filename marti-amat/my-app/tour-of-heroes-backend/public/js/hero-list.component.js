function List_component() {

    for (let i = 0; i < LIST_HEROES.length; i++) {
        create_div_container(i);

    }
    function create_div_container(i) {
        var div = document.createElement("div");
        div.id = `element_${i}`;
        div.className = "element";
        document.getElementById("list").appendChild(div);
        create_div_id(LIST_HEROES[i].id, i);
        create_div_name(LIST_HEROES[i].name, i);

    }
    function create_div_name(name, i) {
        var div = document.createElement("a");
        div.innerHTML = name;
        div.className = "element__name";
        div.href = `./detailItems.ejs?name=${name}`
        if (document.getElementById(`element_${i}`)) document.getElementById(`element_${i}`).appendChild(div);
    }
    function create_div_id(id, i) {
        var div = document.createElement("a");
        div.innerHTML = id;
        div.className = "element__id";
        if (document.getElementById(`element_${i}`)) document.getElementById(`element_${i}`).appendChild(div);
    }
}
