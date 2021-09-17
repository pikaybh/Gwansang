<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상</title>
    <link rel="icon" href="./images/nbklogo.ico" type="image/x-icon">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/homepage.css">
    <script defer src="./js/main.js"></script>
</head>

<body>
    <!--navbar-->
    <?php require_once('navbar.php'); ?>

    <div class="AD"></div>

    <!--article-->
    <article>
        <ul class="li-art">
            <!--호그와트 기숙사 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="theSortingHat" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink').submit();">
                            <div class="testPic"></div>
                            <h3 class="testTitle">호그와트 기숙사 배정 테스트</h3>
                            <h4 class="testTitle">AI 분류모자가 당신의 관상으로 정해주는 기숙사!👓⚡🧹</h4>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--과즙상 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink1" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="fruitFace" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink1').submit();">
                            <div class="testPic"></div>
                            <h3 class="testTitle">과즙상 테스트</h3>
                            <h4 class="testTitle">AI가 알려주는 당신의 과즙상!🍎</h4>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--첫인상 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink2" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="firstImpression" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink2').submit();">
                            <div class="testPic"></div>
                            <h3 class="testTitle">첫인상 테스트</h3>
                            <h4 class="testTitle">AI가 알려주는 당신의 첫인상!👩🧑</h4>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--동물상 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink3" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="firstImpression" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink3').submit();">
                            <div class="testPic"></div>
                            <h3 class="testTitle">동물상 테스트</h3>
                            <h4 class="testTitle">AI가 알려주는 당신의 동물상!🐶🐱</h4>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
        </ul>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>