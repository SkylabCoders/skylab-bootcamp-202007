/*
function Details() {
	this.update = function () {
		let detailSkylabber = SkylabService.getSkylaberById(searchIdinURL());
		document.querySelector('.detail__name').innerHTML = detailSkylabber.name;
		document.querySelector('.detail__id').innerHTML = detailSkylabber.id;
		document.querySelector('.detail__name-control').value =
			detailSkylabber.name;
	};
	function searchIdinURL() {
		return +location.search.substr(4);
	}
}

const myDetails = new Details();
myDetails.update();
*/
///////////////////////////////////////////////////////////////////////
class Details {
	static onInit() {
		const id = Details.searchIdinURL();
		SkylabService.getSkylaberById(id)
			.then((skylabber) => this.update(skylabber))
			.catch((error) => this.promiseError(error));
	}
	static update(skylabber) {
		document.querySelector('.detail__name').innerHTML = skylabber.name;
		document.querySelector('.detail__id').innerHTML = skylabber.id;
		document.querySelector('.detail__name-control').value = skylabber.name;
	}
	static searchIdinURL() {
		return +location.search.substr(4);
	}
	static promiseError(error) {
		document.querySelector('.detail__container').style.display = 'none';
		document.querySelector('.error').innerHTML = error;
	}
}
Details.onInit();
