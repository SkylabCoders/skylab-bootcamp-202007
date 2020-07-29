function SkylaberDetailComponent() {
    let skylaber;
    const idElement = document.getElementById('skylaber-detail__id');
    const nameElement = document.getElementById('skylaber-detail__name');
    const nameControlElement = document.getElementById('skylaber-detail__name-control');
    this.onInit = function() {
        skylaber = getSkylaberFromUrl();
        updateId();
        updateName();
    };
    this.nameChange = function(newName) {
        skylaber.name = newName;
        updateName();
    };

    function updateId() {
        idElement.innerHTML = skylaber.id;
    }

    function updateName() {
        nameElement.innerHTML = skylaber.name;
        nameControlElement.value = skylaber.name;
    }

    function getSkylaberFromUrl() {
        return skylaberList.find(compareId);
    }

    function compareId(skylaber) {
        const params = new URLSearchParams(location.search);
        return skylaber.id === +params.get("skylaberId");
    }
}
const skylaberDetailComponent = new SkylaberDetailComponent();
skylaberDetailComponent.onInit();
console.log(skylaberDetailComponent);