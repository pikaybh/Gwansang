<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상 | 로그인</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/homepage.css">
    <script defer src="./js/main.js"></script>
</head>

<body>
    <!--navbar-->
    <?php require_once('navbar.php'); ?>

    <!--article-->
    <article class="homepage-article">
        <section>
            <h2>로그인</h2>
            <form action="./includes/login.inc.php" method="post">
                <input class="text-in" type="text" name="uid" placeholder="ID 또는 Email">
                <input class="text-in" type="password" name="pwd" placeholder="비밀번호">
                <button type="submit" name="submit">로그인</button>
            </form>
            <?php
                if(isset($_GET["error"])) {
                    if ($_GET["error"] == "emptyinput") {
                        echo "<p>Fill in all fields!</p>";
                    } else if ($_GET["error"] == "wronglogin") {
                        echo "<p>Incorrect login information!</p>";
                    }
                }
            ?>
            <a href="./reset-password.php">비밀번호를 잊으셨나요?</a><br>
            <a href="./signup.php">아직 회원이 아니신가요?</a>
        </section>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>