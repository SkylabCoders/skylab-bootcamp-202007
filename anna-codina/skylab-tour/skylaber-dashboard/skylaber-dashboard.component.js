'use strict';
function SkylaberDashboardComponent() {
    const skylaberListDashboard = [...skylaberList];
    const listElement = document.getElementsByClassName('dashboard__list');
    const listItemClass = 'list__item';
    const listItemElement = document.getElementsByClassName(listItemClass);

    this.onInit = function () {
        const skylaberListFilter = filterArrayGenerator();
        const topFour = skylaberListFilter.slice(0, 4)
        createDashboardList(topFour);
        updateDashboard(topFour);
    }

    function createDashboardList(list) {
        let mylist = '';
        for (let i in list) {
            const urlLocation = '?skylaberId=' + list[i].id;
            const newElement = '<li><a href="../skylaber-detail/skylaber-detail.component.html' + urlLocation + '" class="list__item"></a></li>'
            mylist += newElement;
        }
        if (listElement[0])
            listElement[0].innerHTML = mylist;
    }

    function updateDashboard(list) {
        for (let i in list) {
            const actualskylaber = list[i];
            if (listItemElement[i])
                listItemElement[i].innerHTML = actualskylaber.name;
        }
    }
    function filterArrayGenerator() {
        const myFilter = [];
        for (let i in skylaberListDashboard) {
            if (skylaberListDashboard[i].completedChallenges >= 4) {
                myFilter.push(skylaberListDashboard[i]);
            }
        }
        return myFilter;
    }
}


const skylaberDashboardomponent = new SkylaberDashboardComponent();
skylaberDashboardomponent.onInit();