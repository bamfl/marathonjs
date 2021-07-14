document.addEventListener('DOMContentLoaded', () => {
	const upBtn = document.querySelector('.up-button'),
				downBtn = document.querySelector('.down-button'),
				sidebar = document.querySelector('.sidebar'),
				mainSlide = document.querySelector('.main-slide'),				 
				slidesLength = sidebar.children.length;

	let activeSlideIndex = 0;

	const sidebarStartPosition = (sidebar) => {
		sidebar.style.top = `-${(slidesLength - 1) * 100}%`;
	};

	const moveSlide = (slide, direction) => {
		if (direction === 'down') {
			if (window.getComputedStyle(slide).top && !parseInt(slide.style.top)) {
				slide.style.top = `${parseInt(window.getComputedStyle(slide).top) + 100}%`;
			} else {
				slide.style.top = `${parseInt(slide.style.top) + 100}%`;
			}
		} else {
			if (window.getComputedStyle(slide).top && !parseInt(slide.style.top)) {
				slide.style.top = `${parseInt(window.getComputedStyle(slide).top) - 100}%`;
			} else {
				slide.style.top = `${parseInt(slide.style.top) - 100}%`;
			}
		}
	};

	const slideUp = (sidebar, mainSlide) => {
		if (activeSlideIndex < slidesLength - 1) {
			moveSlide(sidebar, 'down');
			moveSlide(mainSlide, 'up');
	
			activeSlideIndex++;
			console.log(activeSlideIndex);
		}
	};

	const slideDown = (sidebar, mainSlide) => {
		if (activeSlideIndex > 0) {
			moveSlide(sidebar, 'up');
			moveSlide(mainSlide, 'down');
	
			activeSlideIndex--;
			console.log(activeSlideIndex);
		}
	};

	sidebarStartPosition(sidebar);

	upBtn.addEventListener('click', () => slideUp(sidebar, mainSlide));
	downBtn.addEventListener('click', () => slideDown(sidebar, mainSlide));
});
