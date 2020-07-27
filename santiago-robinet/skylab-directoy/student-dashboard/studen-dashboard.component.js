function DashboardComponent() {
  const skylabersPromoted = skylaberList.slice(0, 4);
  const skylabersContainer = document.querySelector(".skylaber__dashboard");

  this.onInit = function () {
    renderStudentList().forEach((element) => {
      if (skylabersContainer) skylabersContainer.appendChild(element);
    });
  };

  function renderStudentList() {
    return skylabersPromoted.map(mapStudentToAnchor);
  }

  function mapStudentToAnchor(skylaber) {
    const element = document.createElement("a");
    element.href = getStudentLink(skylaber.id);
    element.innerText = skylaber.name;
    return element;
  }

  function getStudentLink(id) {
    return `./santiago-robinet\skylab-directoy\student-details\student-detail.component.html?skylabId=${id}`;
  }
}

const skylaberDashboardComponent = new DashboardComponent();
skylaberDashboardComponent.onInit();
