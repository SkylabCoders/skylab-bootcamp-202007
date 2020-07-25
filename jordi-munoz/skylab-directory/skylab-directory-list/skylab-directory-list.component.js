'use strict';
function StudentListComponent() {
    const inputFilter = document.querySelector('.inputFilter');
    let componentStudentList = skylaberList;
 

    this.createDomElements = function (acc = componentStudentList) {
        console.log(acc);
        let container = document.querySelector('.container');
        container.innerHTML = '';
        for (let i = 0; i < acc.length; i++) {
            let generateDiv = document.createElement('div');
            generateDiv.classList.add(`student-${i}`);
            let generateA = document.createElement('a');
            generateA.href = `../skylab-directory-detail/skylab-directory-detail.component.html?studentId=${acc[i].id}`;
            generateA.classList.add('anchor');
            let generateP = document.createElement('p');
            generateP.classList.add('para');

            generateDiv.appendChild(generateA);
            generateDiv.appendChild(generateP);
            container.appendChild(generateDiv);

            printStudents(acc, i);
        }
    }

    const printStudents = function (acc, i) {
        let tempA = document.querySelector(`.student-${i} a`);
        let tempP = document.querySelector(`.student-${i} p`);
        tempA.innerHTML = acc[i].id;
        tempP.innerHTML = acc[i].name;
    }

    this.searchList = function() {
        let result = componentStudentList.reduce(callback, []);
        this.createDomElements(result);
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
