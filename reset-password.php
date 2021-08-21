<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상 | 비밀번호 재설정</title>
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
        <section class="signup-form">
            <h2>Reset your password</h2>
            <p>An e-mail will be send to you with instructions on how to reset your password.</p>
            <form action="./include/reset-request.inc.php" method="post">
                <input type="text" name="email" placeholder="Enter your e-mail address...">
                <button type="submit" name="reset-request-submit">Receive new password by e-mail</button>
            </form>
            <?php
                if (isset($_GET["reset"])) {
                    if($_GET["reset"] == "success") {
                        echo '<p class="signupsuccess">Check your e-mail</p>';
                    }
                }
            ?>
        </section>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>