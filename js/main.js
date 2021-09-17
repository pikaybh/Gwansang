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
            $('.file-upload-content').show();
        };

            reader.readAsDataURL(input.files[0]);
            init().then(() => {
                predict();
            });
        } else {
            removeUpload();
        }
    }
