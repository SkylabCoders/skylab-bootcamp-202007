function StudentDashboardComponent() {
    let student = skylaberList;
    let studentFilter;

    this.onInIt = function displayDashBoard() {
        const containerList = document.querySelector('.containerList');
        checkChallenges();
        let fourStudents = studentFilter.slice(0, 4);
        containerList.innerHTML = renderStudentList(fourStudents);
    }
    function renderStudentList(student) {
        const detailsLink = '../skylab-directory-detail/skylab-directory-detail.component.html';
        let elements = student.map(function (e) {
            return `<a href='${detailsLink}?studentId=${e.id}' >${e.name}</a>`;
        });
        return elements.join('');
    }
    function checkChallenges() {
        studentFilter = student.filter(e => e.completedChallenges > 4);
    }
}

let dashboardComponent = new StudentDashboardComponent();
dashboardComponent.onInIt();


