function Details() {
	this.update = function () {
		document.querySelector('.detail__name').innerHTML = detailSkylabber.name;
		document.querySelector('.detail__id').innerHTML = detailSkylabber.id;
		document.querySelector('.detail__name-control').value =
			detailSkylabber.name;
	};
}

const link = location.search;
const linkId = +link.substr(4);
const detailSkylabber = skylaberList[linkId];
const myDetails = new Details();
myDetails.update();
