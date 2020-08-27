function HeroDashboardComponent() {
  const heroes = heroList.slice(0, 4);
  this.onInIt = function displaydashboard() {
    let containerList = document.querySelector(".containerList");
    containerList.innerHTML = renderHeroList(heroes);
  };
  function renderHeroList(heroes) {
    let elements = heroes.map(function (e) {
      return `<a href='../?heroId=${e.id}' >${e.name}</a>`;
    });
    return elements.join("");
  }
}

let dashboardComponent = new HeroDashboardComponent();
dashboardComponent.onInIt();
