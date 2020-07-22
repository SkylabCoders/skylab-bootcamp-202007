function update() {
  hero.setName(document.querySelector('.input').value);
  document.querySelector('.id__number').innerHTML = hero.getId();
  document.querySelector('.main__details').innerHTML =
    hero.getName() + ' details!';
}

const hero = Hero();
document.querySelector('.input').value = hero.getName();
update();
