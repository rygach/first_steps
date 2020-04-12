// Задача№1, 2, 3, 4 Калькулятор, который будет находить площадь и периметр квадрата(задача 1), прямоугольника(задача 2)
// площадь круга и его длину (задача 3), площадь треугольника по трём сторонам(задача 4)
// 07.04.20

function rectangleArea (width,length) {
	let result = width * length;
	return(result);
}

function rectanglePerimeter (width,length) {
	let result = (width + length) * 2;
	return(result);
}

function circleArea(radius) {
	let result = 3.14 * (radius**2);
	return(result);
}

function circlePerimeter(radius) {
	let result = 6.28 * radius;
	return (result);
}

function areaTriangle(a,b,c) {
	let p = (a+b+c) / 2;
	let result = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	return(result.toFixed(1));
}

// переменные, для работы с DOM
let myModal = document.getElementById('myModal');
let myBtn = document.getElementById('myBtn');
let myBtn1 = document.getElementById('myBtn1');
let close = document.getElementsByClassName('close')[0];
let inpEnter1 = document.getElementById('widthFigure');
let inpEnter2 = document.getElementById('lengthFigure');

// вычисляет площадь (знак плюсика перед document - преобразование строки в число)
areaBut.onclick = function() {
	let width = +document.getElementById('widthFigure').value;
	let length = +document.getElementById('lengthFigure').value;

	document.getElementById('outInf').innerHTML = `Resultat is - ${rectangleArea(width,length)}`;
}

// вычисляет периметр (знак плюсика перед document - преобразование строки в число)
perBut.onclick = function() {
	let width = +document.getElementById('widthFigure').value;
	let length = +document.getElementById('lengthFigure').value;

	document.getElementById('outInf').innerHTML = `Resultat is - ${rectanglePerimeter(width,length)}`;
}

perBut2.onclick = function() {
	let radius = +document.getElementById('widthFigure').value;

	document.getElementById('outInf').innerHTML = `Resultat is - ${circlePerimeter(radius)}`;
}

areaBut2.onclick = function() {
	let radius = +document.getElementById('widthFigure').value;

	document.getElementById('outInf').innerHTML = `Resultat is - ${circleArea(radius)}`;
}

areaBut3.onclick = function() {
	let width = +document.getElementById('widthFigure').value;
	let length = +document.getElementById('lengthFigure').value;
	let thirdSide = +document.getElementById('thirdSide').value;

	document.getElementById('outInf').innerHTML = `Resultat is - ${areaTriangle(width,length,thirdSide)}`;
}

myBtn.onclick = function() {
	myModal.style.display = 'block';
}

close.onclick = function () {
	myModal.style.display = 'none'; 
}