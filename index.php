﻿<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>JavaScript Learning</title>
	<link rel="stylesheet" href ='css/123.css'>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap" rel="stylesheet">
</head>
<body>



	<div id="root">
		<div id="navig">
			<button class="main-display-buttons" id="myBtn">Калькулятор №1</button>
			<!-- <button class="main-display-buttons" id="myBtn2">Калькулятор №2</button> -->
			<button class="main-display-buttons" id="myBtn3">Анализатор текста</button>
			<button class="main-display-buttons" id="myBtn4">ДМБ-таймер</button>
		</div>
	<!-- Задания по геометрии с 1 по 4 -->
		<div id="myModal" class="modal">
			<div class="modal-content">
				<button class="button-close">&times;</button>
				<p class="modal-units">Калькулятор на JavaScript<br>
					<br>
					1. Площадь прямоугольника. Используемые инпуты: 1-2 (ширина-длина)<br>
					2. Периметр прямоугольника. Используемые инпуты: 1-2 (ширина-длина)<br>
					3. Длина круга. Используемые инпуты: 1 (радиус)<br>
					4. Площадь круга. Используемые инпуты: 1 (радиус)<br>
					5. Площадь треугольника по трём сторонам(только так). Используемые инпуты: 1-2-3 (три стороны)<br>
				</p>
				<input class="modal-inputs" type="text" value="1" id="widthFigure"><br>
				<input class="modal-inputs" type="text" value="2" id="lengthFigure"><br>
				<input class="modal-inputs" type="text" value="3" id="thirdSide"><br>
				<button class="button-modal" id="areaBut">Площадь прямоугольника</button><br>
				<button class="button-modal" id="perBut">Периметр прямоугольника</button><br>
				<button class="button-modal" id="perBut2">Длина круга</button><br>
				<button class="button-modal" id="areaBut2">Площадь круга</button><br>
				<button class="button-modal" id="areaBut3">Площадь треугольника</button><br>
				<div class="modal-units" id="outInf">Resultat is -</div><br>
			</div>
		</div>	

	<!-- Задания по матеше с 5 по 10 -->
		<div id="modalMath" class="modal">
			<div class="modal-content">
				<button class="button-close">&times;</button>
				<p class="modal-units">Не работает бля, сука, не доделал</p>
				<input class="modal-inputs" type="text" value="1" id="termValue1"><br>
				<input class="modal-inputs" type="text" value="2" id="termValue2"><br>
				<input class="modal-inputs" type="text" value="3" id="termValue3"><br>
				<button class="button-modal" id="calcMath1">Calculate 1</button><br>
				<button class="button-modal" id="calcMath2">Calculate 2</button><br>
				<div class="modal-units" id="resultMath">Resultat is -</div><br>
			</div>
		</div>	

	<!-- 	Задания по анализатору текста -->
		<div id="modalAnal" class="modal">
			<div class="modal-content">
				<div>
					<button class="button-close">&times;</button>
					<p class="modal-units">Анализатор текста<br>
						<br>
						Читайте описание функций на чекбоксах<br>
					</p>
					<input class="modal-inputs" type="text" value="Вводите" id="textArea"><br>
					<input class="modal-units" type="checkbox" id="checkB1" checked >Количество символов без пробелов<br>
					<input class="modal-units" type="checkbox" id="checkB2" checked >Количество слов в тексте<br>
					<input class="modal-units" type="checkbox" id="checkB3" checked >Количество символов в общем<br>
					<input class="modal-units" type="checkbox" id="checkB4" checked >Процентное содержание букв ещё не сделал. Есть только массив из слов<br>
					<button class="button-modal" id="actArea">Do this</button><br>
					<div class="modal-units" id="resultArea">Look there!</div><br>
				</div>
			</div>
		</div>

		<!-- Делаю ДМБ-таймер -->
		<div id="modalDMB" class="modal">
			<div class="modal-content">
				<button class="button-close">&times;</button>
				<p class="modal-units">ДМБ-таймер</p>
				<input class="modal-inputs" type="date" id="dateOfArmy"><br>
				<button class="button-modal" id="calculateDMB">Calculate date of DMB</button><br>
				<div class="modal-units" id="dateResult">Resultat is -</div><br>
			</div>
		</div>	

		<!-- <div class="content-main-units"> </div> -->

		<div class="post-news">
			<div class="post-header">
				<div class="post-header-info">
					NOT PUBLIC SITE
				</div>
			</div>
			<div class="post-body">
				<div class="post-body-info">
					<img width="640" height="420" src="./img/route.jpg" alt="ЭТО">
				</div>
			</div>
			<div class="post-replies">
				<div class="post-replies-info">
					<button class="post-comment-btns">
						Comment
					</button>
					<button class="post-comment-del">
						Clear
					</button>
				</div>
				<div class="tempFeatureComment">
					
				</div>
			</div>
		</div>		

	</div>

	<script src="js/first.js"></script>
	<script src="js/second.js"></script>
	<script src="js/third.js"></script>
	<script src="js/fourth.js"></script>
	<script src="js/practice.js"></script>
	<script src="js/ajax.js"></script>
</body>

</html>
