function Hero() {


  const id = 0;
  let name = 'Hyperion';
  let hero = {
    id,
    name
  }

  const setId = function () {
    console.log(id);
    return id;
  }

  const getName = function () {
    return name;
  };

  const setName = function (newName) {
    name = newName;
  };

  const getId = function () {
    return id;
  };

  return {
    setId,
    getId,
    setName,
    getName
  };
}


/* let detail = document.getElementById("hero__name").innerHTML;
console.log(detail); */

let suprunaman = new Hero();
suprunaman.setName('Suprunaman');
suprunaman.setId(1);

let heroName = document.querySelector(".input");

console.log(heroName);

console.log(suprunaman.getId());


let header = document.querySelector(".hero__name");
let id = document.querySelector(".hero__id");

heroName.addEventListener('input', function () {
  console.log(input.value);

  if (heroName.value === suprunaman.getName()) {
    header.innerHTML = suprunaman.getName() + ' menja prunes confitades!';
    id.innerHTML = suprunaman.getId();
    /*         document.querySelector(".hero__name").innerHTML = suprunaman.getName() + ' details!'; */
  } else {
    document.querySelector(".hero__name").innerHTML = input.value + ' ';
  }
});
