let modalAnal = document.getElementById('modalAnal');
let myBtn3 = document.getElementById('myBtn3');
let close3 = document.getElementsByClassName('close')[2];


myBtn3.onclick = function() {
	modalAnal.style.display = 'block';
}

close3.onclick = function () {
	modalAnal.style.display = 'none'; 
}


let textArea = document.getElementById('textArea');
let actArea = document.getElementById('actArea');
let resultArea = document.getElementById('resultArea');
let inputText = '';
let considerSymbols = [];
let result = {
	//сколько слов
	consid: 0,
	//сколько символов БЕЗ пробелов
	symNonSpaces: 0,
	//сколько символов в общем
	allSymbols: 0,
	//сколько процентное соотношение
	percents: 0,
};

function considering() {
	textArea.onchange = inputText = `${textArea.value}`;
	//очень странно, не понял почему, но если поменять местами в цикле знаки
	//то он начинает некорректно работать
	for (i=0;i<inputText.length;i++) {
		considerSymbols = inputText.split(' ');
	}
	let sym = considerSymbols.join('');
	result.symNonSpaces = sym.length;
	result.consid = considerSymbols.length;
	result.allSymbols = inputText.length;
	return(result);
}

textArea.onblur = function () {
	  let output = considering();
	  resultArea.innerHTML = `Look there! We have ${output} words!`
	  console.log(result.symNonSpaces);
	  console.log(result.consid);
	  console.log(result.allSymbols);
	  console.log(considerSymbols);
}