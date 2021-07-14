document.addEventListener('DOMContentLoaded', () => {
	const start = document.querySelector('#start'),
				screens = document.querySelectorAll('.screen'),
				timeList = document.querySelector('#time-list'),
				timeEl = document.querySelector('#time'),
				board = document.querySelector('#board'),
				scoreEl = document.querySelector('#score'),
				endBtn = document.querySelector('#end'),
				colors = ['Salmon', 'DeepPink', 'OrangeRed', 'SpringGreen', 'RoyalBlue', 'Maroon'];
	
	let time = 20,
			score = 0;

	const startGame = (time) => {
		if (time > 0) {
			createRandomCircle();

			const intevalId = setInterval(() => {
				if (time > 0) {
					time--;
					if (time > 10) {
						timeEl.innerHTML = `00:${time}`;
					} else {
						timeEl.innerHTML = `00:0${time}`;
					}
				} else if (time === 0) {
					finishGame();
					clearInterval(intevalId);
				}
			}, 1000);
		}
	};

	const finishGame = () => {
		screens[2].classList.add('up');
		scoreEl.innerHTML = score;
		endBtn.addEventListener('click', (event) => {
			event.preventDefault();
			window.location.reload();
		});
	};
	
	const createRandomCircle = () => {
		const circle = document.createElement('div');
		circle.classList.add('circle');

		const size = getCircleNum(5, 30);
		circle.style.width = `${size}px`;
		circle.style.height = `${size}px`;

		const {width, height} = board.getBoundingClientRect();

		const x = getCircleNum(size, width - size);
		const y = getCircleNum(size, height - size);

		circle.style.top = `${y}px`;
		circle.style.left = `${x}px`;

		let color = getRandomColor();
		circle.style.background = `${color}`;

		board.append(circle);

		circle.addEventListener('click', () => {
			score++;
			circle.remove();

			if (time > 0) {
				createRandomCircle();
			}
		});
	};

	const getCircleNum = (min, max) => {
		return parseInt(Math.random() * (max - min) + min);
	};

	const getRandomColor = () => {
		return colors[parseInt(Math.random() * colors.length)];
	};

	start.addEventListener('click', event => {
		event.preventDefault();

		screens[0].classList.add('up');
	});

	timeList.addEventListener('click', event => {
		if (event.target.matches('.time-btn')) {
			time = +event.target.dataset.time;
			if (time > 10) {
				timeEl.innerHTML = `00:${time}`;
			} else {
				timeEl.innerHTML = `00:0${time}`;
			}

			screens[1].classList.add('up');
			startGame(time);
		}
	});
});
