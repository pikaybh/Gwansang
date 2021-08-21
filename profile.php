<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상 | 프로필</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <script defer src="./js/main.js"></script>
</head>

<body>
    <!--navbar-->
    <?php require_once('navbar.php'); ?>

    <!--article-->
    <article class="article">
        <section>
            <ul>
                <?php
                    if (isset($_SESSION["useruid"])) {
                        echo "<li><p>안녕하세요, " . $_SESSION["useruid"] . "님!</p></li>";
                        echo "<li><h1>회원정보</h1></li>";
                        echo "<li><div>프사</div></li>";
                        echo "<li><p>ID : " . $_SESSION["useruid"] . "</p></li>";
                        echo "<li><p>이름 : " . $_SESSION["username"] . "</p></li>";
                        echo "<li><p>e-mail : " . $_SESSION["useremail"] . "</p></li>";
                        echo "<li><a href='./include/logout.inc.php'>Log out</a></li>";
                    } else{
                        echo "<li><p>현재 로그아웃 상태입니다.</br>로그인을 하시거나, 비회원이시라면 회원가입을 해주세요.</p></li>";
                        echo "<li><a href='./signup.php'>Sign up</a></li>";
                        echo "<li><a href='./login.php'>Log in</a></li>";
                    }
                ?>
            </ul>  
        </section>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>