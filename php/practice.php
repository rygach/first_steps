<!-- с курса LoftBlog "Создание динамического веб-сайта PHP/MySQL/JS" -->



<?php
require_once 'db.php';


$result = $pdo->query('SELECT * FROM movies');

// медот fetch извлекает построчно, поэтому нужно засовывать в цикл (он разбивает массив на части)
// while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
//     echo 'Film ' . $row['title'] . ' lasts ' . $row['duration'] . ' minutes :))<br>';

// }

//ещё один метод, который возвращает содержимое, но не разделяя, 
// цикл не нужен, получается каша
// $rows = $result->fetchAll(PDO::FETCH_ASSOC);
// echo '<pre>';
// var_dump($rows);


// если в запрос передаётся хоть одна переменная, 
// это должно производиться через подготовленные выражения
// то есть, вместо переменной ставится placeholder (!!!!!!!!!!!НЕ HTML!!!!!!!!!!!!!!!!!(вот они :duration и ?))
// это нужно, чтобы не залили sql инъекцию в БД



// именованные placeholder'ы

$sql = 'SELECT title FROM movies WHERE duration = :duration';
$stmt = $pdo->prepare($sql);

$params = [':duration' => '125'];
$stmt->execute($params);

$rows = $stmt->fetch(PDO::FETCH_ASSOC);

echo '<pre>';
// в отличие от урока, здесь я решил вывести не весь асс массив, а только название
// + не трогал fetchAll, сделал через обычный fetch
var_dump($rows['title']);



// позиционные placeholder'ы

$sql_pos = 'SELECT title FROM movies WHERE duration = ?';
$stmt_pos = $pdo->prepare($sql_pos);

// здесь как раз отличие, не нужно указывать "duration" 
$stmt_pos->execute(['141']);
$rows_pos = $stmt_pos->fetch(PDO::FETCH_ASSOC);

echo '<pre>';
var_dump($rows_pos['title']);




// ===================================================
// еще один обязательный параметр подготовки выражений
// обезвреживание xss кода с помощью htmlentities

$user_input = '<script>alert(\'СОСИ\');</script>';
$safe_input = htmlentities($user_input);

// xss-скрипт можно засунуть в комменты. когда другой пользователь будет загружать страничку
// с комментами, он одновременно подгрузит и xss, который сразу выполнится
// простой пример приведен ниже

// выведет алерт с сосанием
echo $user_input;
// выведет обезвреженный вариант
echo $safe_input;