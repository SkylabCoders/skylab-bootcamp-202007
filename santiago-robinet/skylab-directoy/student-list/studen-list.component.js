function SkylaberListComponent() {
  const allSkylaber = skylaberList;
  const skylaberListContainer = document.querySelector(".list__container");

  this.onInit = function () {
    renderHeroList().forEach((element) => {
      if (skylaberListContainer) {
        skylaberListContainer.appendChild(element);
      }
    });
  };

  function renderHeroList() {
    return allSkylaber.map(mapRenderAnchor);
  }

  function mapRenderAnchor(skylaber) {
    const element = document.createElement("a");
    element.href = getSkylaberLink(skylaber.id);
    element.innerHTML = `<span>${skylaber.id}</span><span>${skylaber.name}</span><span>${skylaber.completedChallenges}</span><span>${skylaber.address.city}</span><span>${skylaber.address.city}</span>`;
    return element;
  }

  function getSkylaberLink(id) {
    return `../student-details/student-detail.component.html?skylaberId=${id}`;
  }
}

const skylaberListComponent = new SkylaberListComponent();

skylaberListComponent.onInit();
