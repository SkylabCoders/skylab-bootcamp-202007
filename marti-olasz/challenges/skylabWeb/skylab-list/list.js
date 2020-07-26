function SkylabList() {
	const mother = document.querySelector('.list');
	this.drawList = function () {
		for (let i = 0; i < skylaberList.length; i++) {
			mother.appendChild(drawItem(i));
		}
	};
	function drawItem(i) {
		let item = document.createElement('div');
		item.className = 'list__item';
		let num = document.createTextNode(skylaberList[i].id + ' | ');
		item.appendChild(num);
		let name = document.createTextNode(skylaberList[i].name);
		item.appendChild(name);
		item.addEventListener('click', function () {
			mySkylaber(skylaberList[i]);
		});
		return item;
	}
	function mySkylaber(skylaber) {
		document.querySelector('.details').style.display = 'block';
		document.querySelector('.details__info').innerHTML = skylaber.name + ' !';
		document.querySelector(
			'.button__link'
		).href = `../skylab-details/details.html?id=${skylaber.id}`;
	}
}

const mother = document.querySelector('.list');
const mySkylaber = new SkylabList();
mySkylaber.drawList();
