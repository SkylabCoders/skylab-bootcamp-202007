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
	static onInit() {
		const text = document.querySelector('.input').value;
		SkylabService.search(text).then((list) => {
			this.drawList(list);
		});
	}

	static drawList(list) {
		const mother = document.querySelector('.list');
		mother.innerHTML = null;
		if (Array.isArray(list)) {
			for (let i = 0; i < list.length; i++) {
				mother.appendChild(this.drawItem(list[i]));
			}
		} else {
			mother.appendChild(this.drawItem(list));
		}
	}

	static drawItem(index) {
		let item = document.createElement('div');
		item.className = 'list__item';
		let num = document.createTextNode(index.id + ' | ');
		item.appendChild(num);
		let name = document.createTextNode(index.name);
		item.appendChild(name);
		item.addEventListener('click', function () {
			SkylaberComponentList.updateURL(index);
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
SkylaberComponentList.onInit();
