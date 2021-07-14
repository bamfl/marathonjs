document.addEventListener('DOMContentLoaded', () => {
	const item = document.querySelector('.item'),
				placeholders = document.querySelectorAll('.placeholder');

	const dragstart = (event) => {
		event.target.classList.add('drag');
		setTimeout(() => {
			event.target.classList.add('hide');
		}, 0);
	};

	const dragend = (event) => {
		event.target.classList.remove('drag', 'hide');
	};

	const dragover = (event) => {
		event.preventDefault();
		event.target.style.cssText = 'background: #8d68bd2c; border-radius: 20px;';
	};

	const dragleave = (event) => {
		event.target.style.cssText = '';
	};

	const drop = (event) => {
		event.target.append(item);
	};

	placeholders.forEach(placeholder => {
		placeholder.addEventListener('dragover', dragover);
		placeholder.addEventListener('dragleave', dragleave);
		placeholder.addEventListener('drop', drop);
	});	

	item.addEventListener('dragstart', dragstart);
	item.addEventListener('dragend', dragend);
});
