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
		return fetch('../skylab.json').then((response) => response.json());

		/*
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				skylaberList ? resolve(skylaberList) : reject('No list found');
			}, 1000);
		});
		*/
	}
	static getSkylaberById(id) {
		return this.getList()
			.then((response) => {
				return response.find((index) => index.id === id);
			})
			.catch((error) => console.log(error));
		/*
		const skylabber = skylaberList.find((index) => index.id === id);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				skylabber ? resolve(skylabber) : reject('No skylabber found by ID');
			}, 1000);
		});
		*/
	}
	static getSkylaberByName(name) {
		return this.getList()
			.then((response) => {
				return response.filter((index) => {
					return (
						index.name.slice(0, name.length).toLowerCase() ===
						name.toLowerCase()
					);
				});
			})
			.catch((error) => console.log(error));
		/*
		const skylabberList = skylaberList.filter((index) => {
			return (
				index.name.slice(0, name.length).toLowerCase() === name.toLowerCase()
			);
		});
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				skylabberList
					? resolve(skylabberList)
					: reject('No skylabber found by name');
			}, 1000);
		});
		*/
	}
	static search(text) {
		if (text !== '') {
			if (isNaN(+text)) {
				return this.getSkylaberByName(text);
			} else {
				return this.getSkylaberById(+text);
			}
		} else {
			return new Promise((resolve) => resolve([...skylaberList]));
		}
	}
}
