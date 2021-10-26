const tasksList = document.getElementById('tasks__list');
const tasksInput = document.getElementById('task__input');

tasksInput.addEventListener('change', (event) => {

	if(!tasksInput.value.trim()) {
		return false;
	}

	tasksList.insertAdjacentHTML('afterEnd', `<div class="task">
  		<div class="task__title">
    	${tasksInput.value}
  		</div>
  		<a href="#" class="task__remove">&times;</a>
		</div>`
	);

	tasksInput.value = '';

	event.preventDefault();

	const taskRemove = document.querySelector('.task__remove');

	taskRemove.addEventListener('click', () => taskRemove.closest('.task').remove());
})




    

