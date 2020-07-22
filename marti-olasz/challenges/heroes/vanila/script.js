function update() {
  hero.setName(document.querySelector('.input').value);
  document.querySelector('.id__number').innerHTML = hero.getId();
  document.querySelector('.main__details').innerHTML =
    hero.getName() + ' details!';
}

/*
setInterval(function () {
  update();
}, 100);
*/

const hero = Hero();
document.querySelector('.input').value = hero.getName();
update();
