'use strict';
function StudentListComponent() {
    const inputFilter = document.querySelector('.inputFilter');
    let componentStudentList = skylaberList;
    
    this.createDomElements = function () {
        let container = document.querySelector('.container');
        for (let i = 0; i < componentStudentList.length; i++) {
            let generateDiv = document.createElement('div');
            generateDiv.classList.add(`student-${i}`);
            let generateA = document.createElement('a');
            generateA.href = `../skylab-directory-detail/skylab-directory-detail.component.html?studentId=${componentStudentList[i].id}`;
            generateA.classList.add('anchor');
            let generateP = document.createElement('p');
            generateP.classList.add('para');

            generateDiv.appendChild(generateA);
            generateDiv.appendChild(generateP);
            container.appendChild(generateDiv);

            printStudents(i);
        }
    }

    const printStudents = function (i) {
        let tempA = document.querySelector(`.student-${i} a`);
        let tempP = document.querySelector(`.student-${i} p`);
        tempA.innerHTML = componentStudentList[i].id;
        tempP.innerHTML = componentStudentList[i].name;
    }

    this.searchList = function() {
        debugger;
        componentStudentList.reduce(callback, []);
        componentStudentList = acc;
        createDomElements();
    };
    function callback(acc, currentValue) {
        if (currentValue.name === inputFilter.value) {
            acc = [...acc, currentValue];
        }
        return acc; 
    };

}
const studentList = new StudentListComponent();

studentList.createDomElements();
