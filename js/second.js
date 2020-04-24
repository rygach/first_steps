// Задачи:
// 1. Скрипт, который будет находить корни кв ур-я. 3 инпута, в которые будут записываться инпуты
// 2. 3 инпута. В инпуты поступают числа, проверить, являются ли они тройкой Пифагора(квадрат самого большего числа должен быть равен сумме квадратов двух остальных)
// 3. Дан инпут и кнопка. По нажатию на кнопку предоставте список делителей этого числа.
// 4. Два инпута и кнопка. По нажатию на кнопку предоставте список общих делителей.
// 5. Два инпута и кнопка. По нажатию предоставте наибольший делитель этих двух чисел
// 6. Два инпута и кнопка. По нажатию найти наименьшее общее кратное (которое делится на оба числа)

function rootQuad (a,b,c) {
	let result;
	let disk = b**2-4*a*c;
	if (disk<0) {
		let res = 'Корней нет';
		result = res;
	}
	if (disk==0) {
		let res = (-b)/(2*a);
		result = res;
	}
	if (disk>0) {
		let res = [];
		x1 = ((-b)+Math.sqrt(disk))/(2*a);
		x2 = ((-b)-Math.sqrt(disk))/(2*a);	
		res.push(x1,x2);
		result = res;
	}
	return(result);
}

//задача №2
function triplePythagoras (a,b,c) {
	let res = false;
	let maxi;
	let avr;
	let min;
	if (a>b) {
		maxi = a;
		avr = b;
		min = c;
	}
	if (a>c) {
		maxi = a;
		if (b>c) {
			avr = b;
			min = c;				
		}
		else { 
			avr = c;
			min = b;
		}
	
	}
	if (b>c) {
		maxi = b;
		if (a>c) {
			avr = a;
			min = c;
		}
		else {
			avr = c;
			min = a;
		}
	}
	if (c>b) {
		maxi = c;
		if (b>a) {
			avr = b;
			min = a;
		}
		else {
			avr = a;
			min = b;
		}
	}
	let sr = avr**2+min**2;
	if (maxi**2==sr) {
		res = true;
	}
	return(res);
}

// задача №3
function dividers(a) {
	let result = [];
	let arr = [];
	let arr2 = [];
	for (i=1;i<=a;i++) {
		arr.push(i);
	}
	for (i=0;i<a;i++) {
		if (a%arr[i]==0) {
			result.push(arr[i]);
		}
	}
	return(result);
}


function dividers2(a,b) {
	let result = [];
	let arrA = [];
	let arrB = [];
	let specA = [];
	let specB = [];
	if (a>b) {
		for (i=1;i<=a;i++) {
			arrA.push(i);
		}
		for (i=0;i<arrA.length;i++) {	
			if (a%arrA[i]==0) {
				specA.push(arrA[i])
		}
/*		for (i=0;i<arrB.length;i++) {
			if (specA[i]==arrB[i]) {
				result.push(specA[i]);
			}
		}*/
	}
	}
	if (b>a) {
		for (i=1;i<=b;i++) {
			arrB.push(i);
		}
		for (i=0;i<arrB.length;i++) {	
			if (b%arrB[i]==0) {
				specB.push(arrB[i])
			}
		}
/*		for (i=0;i<arrA.length;i++) {
			if (specB[i]==arrA[i]) {
				result.push(specB[i]);
			}
		}*/
	}

/*	//заполняем массив числами, от 1 до a
	for (i=1;i<=arrA.length;i++) {
		arrA.push(i);
	}
	//заполняем массив числами, от 1 до b
	for (i=1;i<=arrB.length;i++) {
		arrB.push(i);
	}*/
	//проходимся по массиву и сравниваем их равность
	//если равны, то даем в массив result

	return(specA);
}






let modalMath = document.getElementById('modalMath');
let myBtn2 = document.getElementById('myBtn2');
let close2 = document.getElementsByClassName('close')[1];

// вычисляет площадь (знак плюсика перед document - преобразование строки в число)
termValue1.onclick = function() {
	let width = +document.getElementById('widthFigure').value;
	let length = +document.getElementById('lengthFigure').value;

	document.getElementById('outInf').innerHTML = `Resultat is - ${rectangleArea(width,length)}`;
}

// вычисляет периметр (знак плюсика перед document - преобразование строки в число)
termValue2.onclick = function() {
	let width = +document.getElementById('widthFigure').value;
	let length = +document.getElementById('lengthFigure').value;
	let thirdSide = +document.getElementById('thirdSide').value;

	document.getElementById('outInf').innerHTML = `Resultat is - ${areaTriangle(width,length,thirdSide)}`;
}

// myBtn2.onclick = function() {
// 	modalMath.style.display = 'block';
// }

// close2.onclick = function () {
// 	modalMath.style.display = 'none'; 
// }



// ПРОЕКТ ДАННОГО ФАЙЛА ВРЕМЕННО ПРИОСТОНОВЛЕН 21.04.2020