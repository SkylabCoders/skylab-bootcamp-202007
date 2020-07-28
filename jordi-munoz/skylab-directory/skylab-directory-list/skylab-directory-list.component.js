'use strict';
function StudentListComponent() {
    const inputFilter = document.querySelector('.inputFilter');
    let componentStudentList = skylaberList;


    this.createDomElements = function (filter = componentStudentList) {
        let container = document.querySelector('.container');
        container.innerHTML = '';
        for (let i = 0; i < filter.length; i++) {
            let generateDiv = document.createElement('div');
            generateDiv.classList.add(`student-${i}`);
            let generateA = document.createElement('a');
            generateA.href = `../skylab-directory-detail/skylab-directory-detail.component.html?studentId=${filter[i].id}`;
            generateA.classList.add('anchor');
            let generateP = document.createElement('p');
            generateP.classList.add('para');

            generateDiv.appendChild(generateA);
            generateDiv.appendChild(generateP);
            container.appendChild(generateDiv);

            printStudents(filter, i);
        }
    }

    const printStudents = function (filter, i) {
        let tempA = document.querySelector(`.student-${i} a`);
        let tempP = document.querySelector(`.student-${i} p`);
        tempA.innerHTML = filter[i].id;
        tempP.innerHTML = filter[i].name;
    }

    this.searchList = function () {
        let result = componentStudentList.reduce(callback, []);
        this.createDomElements(result);
    };
    function callback(acc, currentValue) {
        if (currentValue.name.toLowerCase() === inputFilter.value.toLowerCase()) {
            acc = [...acc, currentValue];
        }
        if (inputFilter.value === '') {
            acc = componentStudentList;
        }
        return acc;
    };

    

}
const studentList = new StudentListComponent();

studentList.createDomElements();
