function Details() {
	this.update = function () {
		let detailSkylabber = skylabService.getSkylaberById(searchIdinURL());
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
