'use strict';
function HeroDashboardComponent() {
    const heroListDashboard = [...heroList];
    const listElement = document.getElementsByClassName('dashboard__list');
    const listItemClass = 'list__item';
    const listItemElement = document.getElementsByClassName(listItemClass);

    this.onInit = function () {
        const topFour = heroListDashboard.slice(0, 4);
        createDashboardList(topFour);
        updateDashboard(topFour);
    }
    function createDashboardList(list) {
        let mylist = '';
        for (let i in list) {
            const urlLocation = '?heroId=' + list[i].id;
            const newElement = '<li><a href="../hero-detail/hero-detail.component.html' + urlLocation + '" class="list__item"></a></li>'
            mylist += newElement;
        }
        if (listElement[0])
            listElement[0].innerHTML = mylist;
    }

    function updateDashboard(list) {
        for (let i in list) {
            const actualhero = list[i];
            if (listItemElement[i])
                listItemElement[i].innerHTML = actualhero.name;
        }
    }
}


const heroDashboarComponent = new HeroDashboardComponent();
heroDashboarComponent.onInit();