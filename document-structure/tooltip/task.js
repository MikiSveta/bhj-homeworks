const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement(`div`);
tooltip.classList.add(`tooltip`);

hasToolTip.forEach((elem, i) => {

  elem.addEventListener(`click`, (event) => {

    if (elem.nextSibling === tooltip) {
      tooltip.classList.toggle(`tooltip_active`);
    } else {
      elem.insertAdjacentElement(`afterend`, tooltip);
      
      tooltip.classList.add(`tooltip_active`);
      tooltip.textContent = elem.title;
      tooltip.style.left = `${elem.getBoundingClientRect().left}px`;
      tooltip.style.top = `${elem.getBoundingClientRect().top + 20}px`;
    }
    
    event.preventDefault();
  });
});




		

		