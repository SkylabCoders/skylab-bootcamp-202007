const renderHeroList = function () {
  function myHero(hero) {
    document.querySelector('.my-hero').style.display = 'block';
    document.querySelector('.my-hero__name').innerHTML = hero.name;
    document.querySelector(
      '.button'
    ).href = `../hero-detail/hero-detail.component.html?heroId=${hero.id}`;
  }

  this.render = function () {
    const mother = document.querySelector('.list');
    for (let i = 0; i < heroList.length; i++) {
      const item = document.createElement('div');
      item.className = 'list__item';
      const num = document.createTextNode(heroList[i].id + ' | ');
      item.appendChild(num);
      const name = document.createTextNode(heroList[i].name);
      item.appendChild(name);
      item.addEventListener('click', function () {
        myHero(heroList[i]);
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
