<?php
    session_start();
?>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">

<nav id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <ul>
    <?php
        if (isset($_SESSION["useruid"])) {
            echo "<li><a href='./profile.php'>Profile page</a></li>";
            echo "<li><a href='./include/logout.inc.php'>Log out</a></li>";
        } else{
            echo "<li><a href='./signup.php'>Sign up</a></li>";
            echo "<li><a href='./login.php'>Log in</a></li>";
        }
    ?>
    <li><hr></li>
    <li><a href="./notice.php"><span class="material-icons">campaign</span>  공지사항</a></li>
    <li><a href="#"><span class="material-icons">settings</span>  설정</a></li>
    </ul>
</nav>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main" onclick="closeNav()"></div>

<!-- Use any element to open the sidenav -->
<header>
    <span class="logo"><a class="logo_text" href="/">GwanSimAI</a></span>
    <span class="nav_btn material-icons" onclick="openNav()">menu</span>
</header>

