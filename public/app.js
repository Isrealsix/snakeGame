import { Snake } from './snake.js';
const canvas = document.querySelector('#snake');
const ctx = canvas.getContext('2d');

let snake;

(function snakeEngine() {
	snake = new Snake(canvas, ctx);
	snake.foodLocation();
	window.setInterval(() => {
		snake.update();
		snake.foodDraw();
		snake.draw();
		snake.eat(snake.foodX, snake.foodY);
	}, 250);
})();

window.addEventListener('keydown', ev => {
	const direction = ev.key.replace('Arrow', '');
	snake.changeDirection(direction);
});
