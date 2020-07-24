function StudentDetailComponent() {
	let student;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById('hero-detail__name-control');

	this.onInIt = function() {
		student = getStudentUrl();
		updateName();
		updateId();
	};

	this.nameChange = function(newName) {
		student.name = newName;
		updateName();
	};

	function updateId() {
		idElement.innerHTML = student.id;
	};

	function updateName() {
		nameElement.innerHTML = student.name;
		nameControlElement.value = student.name;
	};

	function getStudentUrl() {
		let info = window.location.search;
		let studentUrlId = +info.split('=')[1];
		return skylaberList.find(function(e) {
			return e.id === studentUrlId;
		});
	};

}

const studentDetailComponent = new StudentDetailComponent();
studentDetailComponent.onInIt();
