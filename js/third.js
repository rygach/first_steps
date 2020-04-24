// Дан textarea. Пусть в него вводится текст.
//[COMPLETE] Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение 
// о том, сколько в этом тексте слов.

//[COMPLETE] Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение 
// о том, сколько в тексте символов.

//[COMPLETE] Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение 
// о том, сколько в тексте символов за вычетом пробелов.

// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение 
// о процентном содержании каждого символа в тексте.

//[COMPLETE] В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра.
// Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.

let modalAnal = document.getElementById('modalAnal');
let myBtn3 = document.getElementById('myBtn3');
let close3 = document.getElementsByClassName('close')[2];

myBtn3.onclick = function() {
	modalAnal.style.display = 'block';
}

close3.onclick = function () {
	modalAnal.style.display = 'none'; 
}

// класс не обязателен, даже лишний
// просто захотел попрактиковаться
class Result {
	constructor (consid, symNonSpaces, allSymbols, percents) {
		//сколько слов
		this.consid = 0;
		//сколько символов БЕЗ пробелов
		this.symNonSpaces = 0;
		//сколько символов в общем
		this.allSymbols = 0;
		//сколько процентное соотношение
		this.percents = [];
	}
	checkMethod () {
		console.log(this);
	}
}

let textArea = document.getElementById('textArea');
let actArea = document.getElementById('actArea');
let resultArea = document.getElementById('resultArea');
let selectFields = document.getElementById('selectFields');
let inputText = [];
let considerSymbols = [];
let result = new Result(0, 0, 0, 0);
// специальная переменная для процентов
let percents;

function considering() {
	textArea.onchange = inputText = `${textArea.value}`;
	//очень странно, не понял почему, но если поменять местами в цикле знаки
	//то он начинает некорректно работать
	let workArr = [];
	inputText = inputText.toLowerCase();
	for (i=0;i<inputText.length;i++) {
		considerSymbols = inputText.split(' ');
		workArr = inputText.split('');
	}
	let sym = considerSymbols.join('');
	result.symNonSpaces = sym.length;
	result.consid = considerSymbols.length;
	result.allSymbols = inputText.length;
	// временно запишу сюда массив из всех символов, но символы будут здесь встречаться единожды. 
	// что-то типо картотеки уникальных значений. влом просто пока что делать нахождение процента символа во всём тексте
	percents = new Set(workArr);
	percents = Array.from(percents);
	return(result);
}

let checkB1 = document.getElementById('checkB1');
let checkB2 = document.getElementById('checkB2');
let checkB3 = document.getElementById('checkB3');
let checkB4 = document.getElementById('checkB4');

actArea.onclick = function () {
	  let output = considering();
	  resultArea.innerHTML = '';
	  if (checkB1.checked) {resultArea.innerHTML += `<p>Количество символов без пробелов ${result.symNonSpaces}</p>`;}
	  if (checkB2.checked) {resultArea.innerHTML += `<p>Количество слов в тексте ${result.consid}</p>`;}
	  if (checkB3.checked) {resultArea.innerHTML += `<p>Количество символов в общем ${result.allSymbols}</p>`;}
	  if (checkB4.checked) {resultArea.innerHTML += `<p>Процентное содержание букв ещё не сделал. Есть только массив из слов \\${percents}\\</p>`;}
	  console.log(percents);
}