<!-- с курса LoftBlog "Создание динамического веб-сайта PHP/MySQL/JS" -->



<?php
require_once 'db.php';

if (isset($_SESSION['user_login'])) {
    echo $_SESSION['user_login'] . ', welcome to the club!';
    echo '<br>';
    echo 'You have visited this page: ' . $_COOKIE['page_visit'] . ' times.';

    echo '<a href="logout.php">Exit from accaunt</a>';
} else {
    die('Have not acces to page');
}

