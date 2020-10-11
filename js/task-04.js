/*
Задание 4

Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

- Создай переменную counterValue в которой будет хранится текущее значение счетчика.
- Создай функции increment и decrement для увеличения и уменьшения значения счетчика
- Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
 */

//  Решение:

let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("span");

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
