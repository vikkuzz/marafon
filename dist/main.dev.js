"use strict";

var $btn = document.getElementById("btn-kick");
var character = {
  name: "Picachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character")
};
var enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy")
};
$btn.addEventListener("click", function () {
  console.log("Kick");
  console.log(random(20));
  changeHP(random(20), character);
  changeHP(random(20), enemy);
});

function init() {
  console.log("Start Game!");
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + "/" + person.defaultHP;
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert("Бедный " + person.name + "проиграл((");
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  console.log(Math.random());
  return Math.ceil(Math.random() * num);
}

init();