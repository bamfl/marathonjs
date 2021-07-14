document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.container'),
				slides = document.querySelectorAll('.slide');

	window.addEventListener('load', () => {
		slides.forEach(slide => {
				slide.style.height = '80vh';
		});
	});

	container.addEventListener('click', (event) => {
		if (event.target && event.target.matches('.slide')) {
			slides.forEach((slide, i) => {
				slide.classList.remove('active');

				if (event.target === slides[i]) {
					slide.classList.add('active');
					slide.style.transition = 'all 0.8s';
				}
			});
		}
	});
});
