document.addEventListener('DOMContentLoaded', () => {
	const board = document.querySelector('#board'),
				colors = ['Salmon', 'DeepPink', 'OrangeRed', 'SpringGreen', 'RoyalBlue', 'Maroon'],
				squaresNumber = 500;

	const getRandomColor = () => {
		return colors[parseInt(Math.random() * colors.length)];
	};

	const setColor = (el) => {
		let color = getRandomColor();
		el.style.backgroundColor = `${color}`;
		el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
		setTimeout(() => removeColor(el), 1000);
	};

	const removeColor = (el) => {
		el.style.backgroundColor = '';
		el.style.boxShadow = ``;
	};

	for (let i = 0; i < squaresNumber; i++) {
		let square = document.createElement('div');

		square.classList.add('square');
		board.append(square);
		
		square.addEventListener('mouseover', () => setColor(square));
	}
});
