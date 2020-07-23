function StudentDetailComponent() {
	let student;
	const idElement = document.getElementById('hero-detail__id');
	const nameElement = document.getElementById('hero-detail__name');
	const nameControlElement = document.getElementById('hero-detail__name-control');

	this.onInIt = function() {
		student = getStudentFromUrl();
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

	function getStudentFromUrl() {
		const params = new URLSearchParams(location.search);
		return skylaberList.find(function(e) {
			return e.id === +params.get('studentId');
		});
	}
}

const studentDetailComponent = new StudentDetailComponent();
studentDetailComponent.onInIt();
