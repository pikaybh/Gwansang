<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 | AI관상</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/404.css">
    <script defer src="./js/main.js"></script>
</head>
<body>
    <!--navbar-->
    <?php require_once('header.php'); ?>
    
    <!-article-->
    <article>
        <section>
            <h3>죄송합니다.<br>요청하신 페이지를 찾을 수 없습니다.</h3>
            <div class="content">
                <?php
                    if(isset($_GET["error"])) {
                        if($_GET["error"] == "invalidAccess") {
                            echo "
                            <p>방문하시려는 페이지는 주소가 잘못 입력되었거나,<br>잘못된 접근으로 오신겁니다.</p>
                            <p>이 페이지의 접근은 유효하지 않습니다.</p>
                            <p>죄송합니다.</p>" ;
                        } else if($_GET["error"] == "wrongTestList") {
                            echo "
                            <p>현재 방문하신 페이지는 아직 준비 중이거나,<br>점검 상태에 있습니다.</p>
                            <p>최대한 빠른 시일 내에 준비하여 고객님께 불편하신 않도록 하겠습니다.</p>
                            <p>감사합니다.</p>" ;
                        } else {
                            echo "
                            <p>방문하시려는 페이지의 주소가 잘못 입력되었거나,<br>페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</p>
                            <p>입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
                            <p>감사합니다.</p>";
                        }
                    } else {
                        echo "
                        <p>방문하시려는 페이지의 주소가 잘못 입력되었거나,<br>페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</p>
                        <p>입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
                        <p>감사합니다.</p>";
                    }
                ?>
                
            </div>
        </section>
    </article>

    <!--footer>
    <?php require_once('footer.php'); ?>

</body>
</html>