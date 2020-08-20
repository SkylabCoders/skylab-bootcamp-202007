const renderHeroList = function () {
    function myHero(hero) {
        document.querySelector('.my-hero').style.display = 'block';
        document.querySelector('.my-hero__name').innerHTML = hero.name;
        document.querySelector(
            '.button'
        ).href = `../../detailItem?heroId=${hero.id}`;
    }

    this.render = function () {
        const mother = document.querySelector('.list');
        for (let i = 0; i < LIST_HEROES.length; i++) {
            const item = document.createElement('div');
            item.className = 'list__item';
            const num = document.createTextNode(LIST_HEROES[i].id + ' | ');
            item.appendChild(num);
            const name = document.createTextNode(LIST_HEROES[i].name);
            item.appendChild(name);
            item.addEventListener('click', function () {
                myHero(LIST_HEROES[i]);
            });

            mother.appendChild(item);
        }
    };
};
try {
    const list = new renderHeroList();
    list.render();
} catch (error) {
    console.log('Hi tester ==> ', error);
}