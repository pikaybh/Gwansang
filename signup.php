<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상 | 회원가입</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/homepage.css">
    <script defer src="./js/main.js"></script>
</head>

<body>
    <!--navbar-->
    <?php require_once('header.php'); ?>

    <!--article-->
    <article class="homepage-article">
        <section class="signup-form">
            <h2>회원가입</h2>
            <form action="./includes/signup.inc.php" method="post">
                <input class="text-in" type="text" name="name" placeholder="성함">
                <input class="text-in" type="text" name="email" placeholder="Email">
                <input class="text-in" type="text" name="uid" placeholder="아이디">
                <input class="text-in" type="password" name="pwd" placeholder="비밀번호">
                <input class="text-in" type="password" name="pwdrepeat" placeholder="비밀번호 확인"><br>
                <button type="submit" name="submit">가입하기</button>
            </form>
            <?php
                if(isset($_GET["error"])) {
                    if ($_GET["error"] == "emptyinput") {
                        echo "<p>Fill in all fields!</p>";
                    } else if ($_GET["error"] == "invaliduid") {
                        echo "<p>Choose a proper username!</p>";
                    } else if ($_GET["error"] == "invalidemail") {
                        echo "<p>Choose a proper email!</p>";
                    } else if ($_GET["error"] == "tooshortortoolong") {
                        echo "<p>비밀번호는 영문, 숫자, 특수문자를 혼합하여 최소 8자리 ~ 최대 20자리 이내로 입력해주세요.</p>";
                    } else if ($_GET["error"] == "spaceincluded") {
                        echo "<p>비밀번호는 공백없이 입력해주세요.</p>";
                    } else if ($_GET["error"] == "neednumengspe") {
                        echo "<p>영문, 숫자, 특수문자를 혼합하여 입력해주세요.</p>";
                    } else if ($_GET["error"] == "passwordsdontmatch") {
                        echo "<p>Passwords doesn't match!</p>";
                    } else if ($_GET["error"] == "stmtfailed") {
                        echo "<p>Something went wrong, try again!</p>";
                    } else if ($_GET["error"] == "usernametaken") {
                        echo "<p>Username already taken!</p>";
                    } else if ($_GET["error"] == "none") {
                        echo "<p>You have signed up, successfully!</p>";
                    }
                }
            ?>

            <!--password recovery process-->
            <?php
                if (isset($_GET["newpwd"])) {
                    if ($_GET["newpwd"] == "passwordupdated") {
                        echo '<p class="signupsuccess">Your password has been reset!</p>';
                    }
                }
            ?>
        </section>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>