<?php
// с курса LoftBlog "Создание динамического веб-сайта PHP/MySQL/JS"




// подрубаем файл с подключением к БД, где хранится спец
// объект для взаимодействия с БД
require_once 'db.php';

// принимаем данные из двух инпутов login и pwd 
// со страницы signup.php 
// trim убирает лишние пробелы
$login = trim($_POST['login']);
$pwd = trim($_POST['pwd']);

// делаем запрос в БД и ищем логин, который был введён
$sql_check = 'SELECT EXISTS (SELECT login FROM users WHERE login = :login)';
// стандартные преобразования данных при получении из БД в пхп
$stmt_check = $pdo->prepare($sql_check);
$stmt_check->execute([':login' => $login]);

// проверяем, если SELECT EXIST(булевая функция) вернула истину
// то выводим сообщение, что такой пользователь уже есть
if ($stmt_check->fetchColumn()) {
    die('User with that login already exist :((');
}

// проверяем пустые инпуты или нет
// если НЕ ПУСТЫЕ, то производим манипуляции далее
if (!empty($login) && !empty($pwd)) {
    // хешируем введённый пароль специальной функцией
    $pwd = password_hash($pwd, PASSWORD_DEFAULT);

    // формируем команду для записи пары логин-пароль в БД
    $sql = 'INSERT INTO users(login, password) VALUES(:login, :pwd)';
    // стандартное использование плейсхолдеров (:логин) для избежания 
    // sql инъекций
    $params = [':login' => $login, ':pwd' => $pwd];
    
    // закидываем подготовленную переменную с sql-командой в другую переменную
    $stmt = $pdo->prepare($sql);
    // запускает в БД подготовленный запрос на выполнение 
    $stmt->execute($params);

    echo 'Вы успешно зарегистрировались! :))';
}else {
    echo 'Пожалуйста, заполните поля!';
}