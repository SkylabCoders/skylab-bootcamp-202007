/*
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

const skylabService = new SkylabService();*/
////////////////////////////////////////////////////////////////////////////
class SkylabService {
	static getList() {
		return skylaberList;
	}
	static getSkylaberById(id) {
		return skylaberList.find((index) => index.id === id);
	}
	static getSkylaberByName(name) {
		return skylaberList.filter((index) => {
			return (
				index.name.slice(0, name.length).toLowerCase() === name.toLowerCase()
			);
		});
	}
	static search(text) {
		let sortedList = [];
		if (text !== '') {
			if (isNaN(+text)) {
				sortedList.push(...this.getSkylaberByName(text));
			} else {
				sortedList.push(this.getSkylaberById(+text));
			}
		} else {
			sortedList = [...skylaberList];
		}
		return sortedList;
	}
}
