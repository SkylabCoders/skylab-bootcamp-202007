'use strict';
function HeroDashboardComponent() {
    const heroListDashboard = heroList.slice(0, 4);
    const listElement = document.getElementsByClassName('dashboard__list');
    const listItemClass = 'list__item';
    const listItemElement = document.getElementsByClassName(listItemClass);

    this.onInit = function () {
        createDashboardList();
        updateDashboard();
    }

    function createDashboardList() {
        let mylist = ''
        for (let i in heroListDashboard) {
            const urlLocation = '?heroId=' + heroListDashboard[i].id
            const newElement = '<li><a href="../hero-detail/hero-detail.component.html' + urlLocation + '" class="list__item"></a></li>'
            mylist += newElement;
        }
        if (listElement[0])
            listElement[0].innerHTML = mylist;
    }

    function updateDashboard() {
        for (let i in heroListDashboard) {
            const actualHero = heroListDashboard[i];
            if (listItemElement[i])
                listItemElement[i].innerHTML = actualHero.name;
        }
    }

}


const heroDashboardomponent = new HeroDashboardComponent();
heroDashboardomponent.onInit();