"use strict";
function HeroListComponent() {
  let elementToDelete;
  let componentHeroList = heroList;
  this.createDomElements = function () {
    let container = document.querySelector(".container");
    for (let i = 0; i < componentHeroList.length; i++) {
      let generateDiv = document.createElement("div");
      let button = document.createElement("button");
      let button2 = document.createElement("button");
      button.innerHTML = "X";
      button2.innerHTML = "update";
      generateDiv.classList.add(`hero-${i}`);
      let generateA = document.createElement("a");
      generateA.href = `../?heroId=${componentHeroList[i].id}`;
      generateA.classList.add("anchor");
      let generateP = document.createElement("p");
      generateP.classList.add(`para-${componentHeroList[i].id}`);

      button.addEventListener("click", () => deleteHero(`hero-${i}`));
      button2.addEventListener("click", () =>
        updateName(`para-${componentHeroList[i].id}`)
      );
      generateDiv.appendChild(generateA);
      generateDiv.appendChild(generateP);
      generateDiv.appendChild(button);
      generateDiv.appendChild(button2);
      container.appendChild(generateDiv);

      const deleteHero = function (heroContainerId) {
        const container = document.querySelector(`.${heroContainerId}`);
        container.style.display = "none";
      };
      const updateName = function (heroID) {
        let newName = prompt(
          "Que basura de nombre quieres para tu heroe de mierda"
        );
        const name = document.querySelector(`.${heroID}`);
        name.innerHTML = newName;
      };

      printHeroes(i);
    }
  };

  const printHeroes = function (i) {
    let tempA = document.querySelector(`.hero-${i} a`);
    let tempP = document.querySelector(`.hero-${i} p`);
    tempA.innerHTML = componentHeroList[i].id;
    tempP.innerHTML = componentHeroList[i].name;
  };

  this.linkHeroes = function () {};
}
const myHeroList = new HeroListComponent();

myHeroList.createDomElements();

const eachHero = document.querySelectorAll(
  ".hero-0, .hero-1, .hero-2, .hero-3, .hero-4, .hero-5, .hero-6, .hero-7, .hero-8, .hero-9"
);
/* for (let click of eachHero) {
  click.onclick = function () {
    myHeroList.linkHeroes();
  };
}
 */
