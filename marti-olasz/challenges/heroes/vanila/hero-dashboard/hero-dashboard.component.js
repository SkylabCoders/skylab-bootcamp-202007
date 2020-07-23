const [a, b, c, d] = document.querySelectorAll('.item');
a.innerHTML = heroList[0].name;
b.innerHTML = heroList[1].name;
c.innerHTML = heroList[2].name;
d.innerHTML = heroList[3].name;

a.addEventListener('click', function () {
  const hero = new Hero(heroList[0].id, heroList[0].name);
});
b.addEventListener('click', function () {
  const hero = new Hero(heroList[1].id, heroList[0].name);
});
c.addEventListener('click', function () {
  const hero = new Hero(heroList[2].id, heroList[0].name);
});
d.addEventListener('click', function () {
  const hero = new Hero(heroList[3].id, heroList[0].name);
});
