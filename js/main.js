/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    if (matchMedia("Screen and (max-width: 600px)").matches) {
        document.getElementById("mySidenav").style.width = "200px";
    } else {
        document.getElementById("mySidenav").style.width = "500px";
    }
    document.getElementById("main").style.width = "100%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.width = "0";
}

/*imgReader */
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-image').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
        init().then(() => {
            predict();
        });

        removeUpload();
    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}

/* copy url */
function copyurl() {
    var url = window.document.location.href;
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    console.log("copied a link url");
    alert("링크가 복사되었습니다.")
}

/* loader box*/
function AIthinking() {
    document.getElementById("loadingP").style.display = "flexbox";

    if (matchMedia("Screen and (max-width: 600px)").matches) {
        document.getElementById("AIthinking").style.width = "320px";
        document.getElementById("AIthinking").style.height = "320px";
    } else {
        document.getElementById("AIthinking").style.width = "530px";
        document.getElementById("AIthinking").style.height = "530px";
    }
}

function AItelling() {
    document.getElementById("AIthinking").style.width = "0";
    document.getElementById("AIthinking").style.height = "0";
    document.getElementById("save-btn").style.display = "flex";
}

/*screen shot*/
function screenShot() {    
    html2canvas(document.getElementById('article-page'), {}).then(function (canvas) {
        saveAs(canvas.toDataURL(), 'InChin.jpg');
        console.log("screen captured");
    });
}

function saveAs(uri, filename) {
	var link = document.createElement('a');
	if (typeof link.download === 'string') {
		link.href = uri;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		window.open(uri);
	}
}