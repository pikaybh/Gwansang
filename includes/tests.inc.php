<?php

    include 'autoloader.inc.php';

    if (isset($_POST["AItest"])) {
        if ($_POST["AItest"] == "theSortingHat") {
            header("location: ../tests/?test=theSortingHat");
            exit();
        } else if ($_POST["AItest"] == "fruitFace") {
            header("location: ../tests/?test=fruitFace");
            exit();
        } else if ($_POST["AItest"] == "catBreed") {
            header("location: ../tests/?test=catBreed");
            exit();
        } else if ($_POST["AItest"] == "dogBreed") {
            header("location: ../tests/?test=dogBreed");
            exit();
        } else if ($_POST["AItest"] == "idolPosition") {
            header("location: ../tests/?test=idolPosition");
            exit();
        } else {
            header("location: ../404.php?error=wrongTestList");
            exit();
        }
    } else {
        header("location: ../404.php?error=invalidAccess");
        exit();
    }

?>