'use strict';
function HeroDashboardComponent() {
    let heroListDashboard;
    const listElement = document.getElementsByClassName('dashboard__list');
    const listItemClass = 'list__item';
    const listItemElement = document.getElementsByClassName(listItemClass);

    this.onInit = function () {
        heroListDashboard = heroService.getHeroList()
            .then(handleFulfilled)
            .catch(handleError);
    }

    function handleFulfilled(response) {
        toggleLoading();
        const topFour = response.slice(0, 4);
        createDashboardList(topFour);
        updateDashboard(topFour);
    }

    function handleError(message) {
        toggleLoading()
        document.getElementById('hero-dashboard__container').style.display = 'none'
        document.getElementById('hero-dashboard__error').innerHTML = message;
    }
    function toggleLoading() {
        let loadingElement = document.getElementById('hero-dashboard__loading');
        if (loadingElement.style.display === 'block') {
            loadingElement.style.display = 'none';
        } else {
            loadingElement.style.display = 'block'
        }
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