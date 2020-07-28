/*
function SkylaberComponentList() {
	const mother = document.querySelector('.list');
	this.drawList = function () {
		let list = updateList();
		mother.innerHTML = null;
		for (let i = 0; i < list.length; i++) {
			mother.appendChild(drawItem(list[i]));
		}
	};
	function updateList() {
		let inputText = document.querySelector('.input').value;
		return kylabService.search(inputText);
	}
	function drawItem(index) {
		let item = document.createElement('div');
		item.className = 'list__item';
		let num = document.createTextNode(index.id + ' | ');
		item.appendChild(num);
		let name = document.createTextNode(index.name);
		item.appendChild(name);
		item.addEventListener('click', function () {
			updateURL(index);
		});
		return item;
	}
	function updateURL(skylaber) {
		document.querySelector('.details').style.display = 'block';
		document.querySelector('.details__info').innerHTML = skylaber.name + ' !';
		document.querySelector(
			'.button__link'
		).href = `../skylab-details/details.html?id=${skylaber.id}`;
	}
}

const skylaberComponentList = new SkylaberComponentList();
skylaberComponentList.drawList();
*/
////////////////////////////////////////////////////////////////////////////////////////////
class SkylaberComponentList {
	static drawList() {
		const mother = document.querySelector('.list');
		let list = this.updateList();
		mother.innerHTML = null;
		for (let i = 0; i < list.length; i++) {
			mother.appendChild(this.drawItem(list[i]));
		}
	}
	static updateList() {
		let inputText = document.querySelector('.input').value;
		return SkylabService.search(inputText);
	}
	static drawItem(index) {
		let item = document.createElement('div');
		item.className = 'list__item';
		let num = document.createTextNode(index.id + ' | ');
		item.appendChild(num);
		let name = document.createTextNode(index.name);
		item.appendChild(name);
		item.addEventListener('click', function () {
			updateURL(index);
		});
		return item;
	}
	static updateURL(skylaber) {
		document.querySelector('.details').style.display = 'block';
		document.querySelector('.details__info').innerHTML = skylaber.name + ' !';
		document.querySelector(
			'.button__link'
		).href = `../skylab-details/details.html?id=${skylaber.id}`;
	}
}
SkylaberComponentList.drawList();
