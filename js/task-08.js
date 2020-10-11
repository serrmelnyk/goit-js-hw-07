/*
Задание 8

Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать,
   после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/

// Решение:

const input = document.querySelector('[type="number"]');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

function BtnMakeBoxes() {
  boxes.innerHTML = "";

  const num = input.value;
  const items = [];

  for (let i = 1; i <= num; i += 1) {
    const createDiv = document.createElement("div");

    createDiv.style.backgroundColor = randomColorRGB();
    createDiv.style.width = i * 10 + 20 + "px";
    createDiv.style.height = i * 10 + 20 + "px";

    items.push(createDiv);
  }

  boxes.append(...items);
}

const BtnClearBoxes = () => {
  boxes.innerHTML = "";
};

function randomColorRGB() {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);

  const red = random(0, 255);
  const green = random(0, 255);
  const blue = random(0, 255);

  return `rgb(${red},${green},${blue})`;
}

btnRender.addEventListener("click", BtnMakeBoxes);
btnDestroy.addEventListener("click", BtnClearBoxes);
