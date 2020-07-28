const skylaberListComponent = new SkylaberListComponent();
skylaberListComponent.onInit(LIST_SKYLABERS);
//let div;
function SkylaberListComponent() {
  this.div;
  this.onInit = function (list) {
    for (let i = 0; i < list.length; i++) {
      create_div_container(i, list);
    }
  };

  this.search_skylabers = function () {
    const newSkylaberList = LIST_SKYLABERS.reduce(getByName, []);
    console.log("newList", newSkylaberList);
    if (newSkylaberList[0] !== undefined) {
      for (n in LIST_SKYLABERS) {
        document
          .getElementById("list")
          .removeChild(document.getElementById(`element_${n}`));
      }
      create_div_container(0, newSkylaberList);
    } else {
      if (!document.getElementById("element_4")) {
        document
          .getElementById("list")
          .removeChild(document.getElementById(`element_0`));
        skylaberListComponent.onInit(LIST_SKYLABERS);
      }
    }
  };
  function getByName(acumulator, skylaber) {
    if (skylaber.name === document.getElementById("input__value").value) {
      acumulator = [...acumulator, skylaber];
    }
    return acumulator;
  }
  function create_div_container(i, list) {
    this.div = document.createElement("div");
    this.div.id = `element_${i}`;
    this.div.className = "element";
    document.getElementById("list").appendChild(this.div);
    console.log("list name", list[i].name);
    create_div_name(list[i].id, list[i].name, i);
  }
  function create_div_name(id, name, i) {
    let div_name = document.createElement("a");
    div_name.innerHTML = name;
    div_name.className = "element__name";
    div_name.href = `../skylaber-detail/skylaber-detail.component.html?id=${id}`;

    if (document.getElementById(`element_${i}`))
      document.getElementById(`element_${i}`).appendChild(div_name);
    create_div_id(id, i);
  }
  function create_div_id(id, i) {
    let div_id = document.createElement("a");
    div_id.innerHTML = id;
    div_id.className = "element__id";
    if (document.getElementById(`element_${i}`))
      document.getElementById(`element_${i}`).appendChild(div_id);
  }
}
