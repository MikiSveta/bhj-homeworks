const tasksList = document.getElementById('tasks__list');
const tasksInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add')

function taskAdd(event) {
	
	event.preventDefault();

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

	const taskRemove = document.querySelector('.task__remove');

	taskRemove.addEventListener('click', () => taskRemove.closest('.task').remove());
}

tasksInput.addEventListener('dowm', taskAdd)

tasksAdd.addEventListener('click', taskAdd)






    

