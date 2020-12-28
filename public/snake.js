export class Snake {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.x = 0;
		this.y = 0;
		this.scale = 10;
		this.xSpeed = this.scale * 1;
		this.ySpeed = 0;
		this.scale = 10;
		this.rows = this.canvas.height / this.scale;
		this.columns = this.canvas.width / this.scale;
		this.total = 0;
		this.tail = [];
	}
	draw() {
		this.ctx.fillStyle = '#6e8104';
		for (let i = 0; i < this.tail.length; i++) {
			this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
		}

		this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
	}
	update() {
		// Clear the canvas
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (let i = 0; i < this.tail.length - 1; i++) {
			//shift the tail to follow the coordinte of the body
			this.tail[i] = this.tail[i + 1];
		}

		// Ensure that the last part of the body has the previous coordinate of the snake's head
		this.tail[this.total - 1] = { x: this.x, y: this.y };

		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (this.x > this.canvas.width) {
			this.x = 0;
		}
		if (this.x < 0) {
			this.x = this.canvas.width;
		}
		if (this.y > this.canvas.height) {
			this.y = 0;
		}
		if (this.y < 0) {
			this.y = this.canvas.height;
		}
	}

	changeDirection(direction) {
		switch (direction) {
			case 'Up':
				this.ySpeed = -this.scale * 1;
				this.xSpeed = 0;
				break;
			case 'Down':
				this.ySpeed = this.scale * 1;
				this.xSpeed = 0;
				break;
			case 'Left':
				this.xSpeed = -this.scale * 1;
				this.ySpeed = 0;
				break;
			case 'Right':
				this.xSpeed = this.scale * 1;
				this.ySpeed = 0;
		}
	}
	foodLocation() {
		// ~~ New new syntax for Math.floor
		this.foodX = ~~(Math.random() * (this.rows - 1) + 1) * this.scale;
		this.foodY = ~~(Math.random() * (this.columns - 1) + 1) * this.scale;
	}
	foodDraw() {
		this.ctx.fillStyle = '#0a850ae8';
		this.ctx.fillRect(this.foodX, this.foodY, this.scale, this.scale);
	}
	eat(foodX, foodY) {
		if (foodX === this.x && foodY === this.y) {
			this.foodLocation();
			this.total++;
		}
		return false;
	}
}
