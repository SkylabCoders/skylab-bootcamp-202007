function SkylaberService() {

    this.getSkylaberList = function () {
        fetch("skylaber.json").then((response) => {
            console.log(response)
        });
    };
    this.getSkylaberById = function (id) {
        return skylaberList.find((skylaber) => skylaber.id === id);
    };
    this.getSkylaberByName = function (name) {
        return skylaberList.find((skylaber) => skylaber.name === name);
    };
}

const service = new SkylaberService();