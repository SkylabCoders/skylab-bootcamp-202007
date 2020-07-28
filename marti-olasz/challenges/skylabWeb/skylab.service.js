function SkylabService() {
	const list = skylaberList;
	this.getList = function () {
		return list;
	};
	this.getSkylaberById = function (id) {
		return skylaberList.find((index) => index.id === id);
	};
	this.getSkylaberByName = function (name) {
		return (result = skylaberList.filter((index) => {
			return (
				index.name.slice(0, name.length).toLowerCase() === name.toLowerCase()
			);
		}));
	};
	this.search = function (text) {
		let sortedList = [];
		if (text !== '') {
			if (isNaN(+text)) {
				sortedList.push(...skylabService.getSkylaberByName(text));
			} else {
				sortedList.push(skylabService.getSkylaberById(+text));
			}
		} else {
			sortedList = [...skylaberList];
		}
		return sortedList;
	};
}

const skylabService = new SkylabService();
