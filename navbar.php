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
            echo "<li><a href='./profile.php'><span class='material-icons'>account_circle</span>  프로필</a></li>";
            echo "<li><a href='./includes/logout.inc.php'><span class='material-icons'>logout</span>  로그아웃</a></li>";
        } else{
            echo "<li><a href='./signup.php'><span class='material-icons'>assignment</span>  회원가입</a></li>";
            echo "<li><a href='./login.php'><span class='material-icons'>login</span>  로그인</a></li>";
        }
    ?>
    <li><a href="./notice.php"><span class="material-icons">campaign</span>  공지사항</a></li>
    <li><a href="#"><span class="material-icons">settings</span>  설정</a></li>
    <li><hr></li>
    <li class="nav-share">
        <a class="share-btn" href="#">
            <svg class="kakaoTalk share-btn" width="23px" height="48" viewBox="0 0 48 48" fill="#818181" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM8 23.6154C8 16.6482 15.1634 11 24 11C32.8366 11 40 16.6482 40 23.6154C40 30.5828 32.8366 36.2308 24 36.2308C23.0302 36.2308 22.0805 36.1629 21.1582 36.0323C20.2349 36.6829 14.9009 40.4297 14.3975 40.5C14.3975 40.5 14.1911 40.5803 14.0155 40.4769C13.84 40.3735 13.8718 40.1025 13.8718 40.1025C13.9248 39.7417 15.2546 35.1494 15.4997 34.3042C10.9948 32.0723 8 28.1198 8 23.6154Z" fill="#818181"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1538 28.0193C14.6447 28.0193 14.2307 27.6239 14.2307 27.1377V21.6539H12.7904C12.2908 21.6539 11.8845 21.2483 11.8845 20.75C11.8845 20.2517 12.291 19.8462 12.7904 19.8462H17.5171C18.0167 19.8462 18.423 20.2517 18.423 20.75C18.423 21.2483 18.0165 21.6539 17.5171 21.6539H16.0768V27.1377C16.0768 27.6239 15.6628 28.0193 15.1538 28.0193ZM23.2479 28.0073C22.863 28.0073 22.5685 27.851 22.4798 27.5996L22.0227 26.403L19.2079 26.4028L18.7505 27.6002C18.6621 27.8511 18.3678 28.0073 17.9828 28.0073C17.7804 28.0075 17.5802 27.964 17.3961 27.8799C17.1416 27.7625 16.897 27.4397 17.1773 26.5691L19.3853 20.7574C19.5408 20.3154 20.0133 19.86 20.6145 19.8463C21.2174 19.8599 21.6899 20.3154 21.8458 20.7583L24.0528 26.5674C24.3337 27.44 24.0891 27.763 23.8347 27.88C23.6505 27.964 23.4504 28.0074 23.2479 28.0073ZM21.5373 24.7679L20.6153 22.1487L19.6933 24.7679H21.5373ZM25.5384 27.8847C25.0505 27.8847 24.6538 27.505 24.6538 27.0385V20.7693C24.6538 20.2602 25.0765 19.8462 25.5961 19.8462C26.1156 19.8462 26.5384 20.2602 26.5384 20.7693V26.1923H28.4999C28.9877 26.1923 29.3845 26.572 29.3845 27.0385C29.3845 27.505 28.9877 27.8847 28.4999 27.8847H25.5384ZM30.6667 28.0073C30.1576 28.0073 29.7436 27.5933 29.7436 27.0842V20.7693C29.7436 20.2602 30.1576 19.8462 30.6667 19.8462C31.1757 19.8462 31.5897 20.2602 31.5897 20.7693V22.7533L34.1651 20.1779C34.2976 20.0454 34.4796 19.9725 34.6771 19.9725C34.9076 19.9725 35.139 20.0719 35.3124 20.2451C35.4741 20.4067 35.5705 20.6145 35.5837 20.8303C35.5971 21.048 35.5247 21.2476 35.3801 21.3923L33.2765 23.4956L35.5487 26.5057C35.622 26.6023 35.6755 26.7125 35.7059 26.8299C35.7363 26.9473 35.7431 27.0695 35.7259 27.1896C35.7094 27.3097 35.6693 27.4254 35.6078 27.5299C35.5464 27.6344 35.4648 27.7256 35.3678 27.7983C35.2081 27.9197 35.013 27.9851 34.8125 27.9847C34.6695 27.9853 34.5283 27.9525 34.4003 27.8888C34.2722 27.825 34.1609 27.7322 34.0751 27.6177L31.9104 24.7494L31.5901 25.0697V27.0837C31.5898 27.3286 31.4924 27.5633 31.3193 27.7364C31.1462 27.9095 30.9115 28.0069 30.6667 28.0073Z" fill="#818181"/>
            </svg>                    
        </a>
        <span>&nbsp;</span>
        <a class="share-btn" href="">
            <svg class="faceBook share-btn" fill="#818181" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"/>
            </svg>
        </a>
        <span>&nbsp;</span>
        <a class="share-btn" href="">
            <svg class="twitter share-btn" fill="#818181" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="27px" height="27px">
                <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/>
            </svg>
        </a>
        <span>&nbsp;</span>
        <a class="share-btn" href="">
            <svg fill="#818181" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
                <path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"/>
            </svg>
        </a>
    </li>
    </ul>
</nav>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main" onclick="closeNav()"></div>

<!-- Use any element to open the sidenav -->
<header>
    <span class="logo"><a class="logo_text" href="/">GwanSimAI</a></span>
    <span class="nav_btn material-icons" onclick="openNav()">menu</span>
</header>

