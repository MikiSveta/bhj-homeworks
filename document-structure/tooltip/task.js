const toolTip = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < toolTip.length; i++) {
	
	toolTip[i].addEventListener('click', (event) => {

		event.preventDefault();

		let deletableElement = document.getElementsByClassName("tooltip tooltip_active")[0];

    	if (deletableElement) {
    		deletableElement.remove();
    	}

		text = toolTip[i].getAttribute('title');
		toolTip[i].insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active"> ${text} </div>`);	
	})
}