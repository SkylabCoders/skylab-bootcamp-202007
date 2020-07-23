function myHero(name) {
  document.querySelector('.my-hero').style.display = 'block';
  document.querySelector('.my-hero__name').innerHTML = name;
}

const mother = document.querySelector('.list');
for (let i = 0; i < heroList.length; i++) {
  let item = document.createElement('div');
  item.className = 'list__item';
  let num = document.createTextNode(heroList[i].id + ' | ');
  item.appendChild(num);
  let name = document.createTextNode(heroList[i].name);
  item.appendChild(name);
  item.addEventListener('click', function () {
    myHero(heroList[i].name);
  });

  mother.appendChild(item);
}
