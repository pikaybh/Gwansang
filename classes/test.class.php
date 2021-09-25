<?php

    class test {
        public $fileName;
        public $test;
        public $title;
        public $subtitle;
        public $switch;
        public $switchName;
        public $detects;

        public function __construct($fileName, $test, $title, $subtitle, $switch, $switchName, $detects) {
            $this->style = "<link rel='stylesheet' href='../css/aiTests/" . $fileName . ".css'>";
            $this->test = $test;
            $this->title = $title;
            $this->subtitle = $subtitle;
            $this->switch = "<link rel='stylesheet' href='../css/switch." . $switch . ".css'>";
            $this->switchName = $switchName;
            $this->script = "<script defer src='../js/aiTests/" . $fileName . ".js' type='text/javascript'></script>";
            $this->detects = "<script defer src='../js/" . $detects . ".js' type='text/javascript'></script>";
        }

        public function __destruct() {
            
        }
    }

?>