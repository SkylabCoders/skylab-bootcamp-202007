function SkylaberListComponent() {
    const allSkylabers = skylaberList;
    const skylaberListContainer = document.getElementById('container');
    this.onInit = function() {
        renderSkylaberList().forEach((element) => {
            if (skylaberListContainer) {
                skylaberListContainer.appendChild(element);
            }
        })
    }

    function renderSkylaberList() {
        return allSkylaber.map(mapRenderAnchor);
    }

    function mapRenderAnchor(skylaber) {
        const element = document.createElement('a');
        element.href = getSkylaberLink(skylaber.id);
        element.innerHTML = `<span>${skylaber.id}</span><span>${skylaber.name}</span>`;
        return element;
    }

    function getSkylaberLink(id) {
        return `../skylaber-detail/skylaber-detail.component.html?skylaberId=${id}`;
    }
}
const mySkylaberListComponent = new SkylaberListComponent();
mySkylaberListComponent.onInit();


