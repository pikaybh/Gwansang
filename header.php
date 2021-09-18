<?php
    session_start();
?>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">

<header>
    <?php
        if (isset($_SESSION["useruid"])) {
            echo "<span class='material-icons history-back' onclick='history.back()'>arrow_back_ios</span>";
        } else{
            echo "<a class='logo_text' href='/'><span class='material-icons history-back'>arrow_back_ios 더 많은 컨텐츠</span></a>";
        }
    ?>
</header>