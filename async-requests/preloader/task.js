const items = document.getElementById('items');
const loader = document.getElementById('loader');
const item = document.getElementsByClassName('item')


let xhr = new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		
		loader.classList.remove('loader_active')};

		const data = xhr.response;
		const valutes = data.response.Valute;

		for(let i in valutes)
		items.insertAdjacentHTML('beforeEnd',
            `<div class="item">
                <div class="item__code">
                    ${valutes[i].CharCode}
                </div>
                <div class="item__value">
                    ${valutes[i].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`
            )
	};