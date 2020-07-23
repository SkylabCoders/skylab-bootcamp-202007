function DashboardComponent() {
    const fourHeroes = heroList.slice(0, 4);
    const heroListContainer = document.getElementById('dashboard__component');

    this.onInit = function () {
        this.renderHeroList().forEach((element) => {
            heroListContainer.appendChild(element);
        })
    }

    this.renderHeroList = function () {
        let anchorNames = [];

        for (hero of fourHeroes) {
            anchorNames.push(`<a href="../">${hero.name}</a>`);
        }
        return anchorNames;
    }
}