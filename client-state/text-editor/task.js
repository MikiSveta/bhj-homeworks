const editor = document.getElementById('editor');

window.onload = () => {
    editor.value = localStorage.getItem('text');
}

editor.oninput = function(){
    let value = this.value;
    console.log(value);
    localStorage.setItem('text', value);
}

	

