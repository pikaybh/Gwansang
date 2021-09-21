let imgElement = document.getElementById('face-image');
let faces;
let classifier;
let utils;

imgElement.onload = function () {
    let mat = cv.imread(imgElement);
    let gray = new cv.Mat();
    cv.cvtColor(mat, gray, cv.COLOR_RGBA2GRAY, 0);
    cv.imshow('matGrayImg', gray);
    console.log("gotImg!");
    try {
        classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
        console.log(faces.size() + " face(s) detected");
    } catch (err) {
        console.log(err);
    }
    for (let i = 0; i < faces.size(); ++i) {
        let face = faces.get(i);
        cv.imshow("matRoiImg", mat.roi(face));
        console.log("detectReady!");
        let point1 = new cv.Point(face.x, face.y);
        let point2 = new cv.Point(face.x + face.width, face.y + face.height);
        cv.rectangle(mat, point1, point2, [255, 0, 0, 255]);
    }
    cv.imshow("roiImg", mat);
    mat.delete();
};

function onOpenCvReady() {
    cv['onRuntimeInitialized'] = () => {
        faces = new cv.RectVector();
        classifier = new cv.CascadeClassifier();
        utils = new Utils('errorMessage');
        let catFaceCascadeFile = 'haarcascade_frontalcatface.xml'; // path to xml
        utils.createFileFromUrl(catFaceCascadeFile, catFaceCascadeFile, () => {
            classifier.load(catFaceCascadeFile); // in the callback, load the cascade from file 
            console.log("openCV ready!");
            $('.loadingOpenCV').hide();
            $('.image-upload-wrap').show();
        });
    }
}
//출처 : https://github.com/nanuyo/cv_facedetect_tutorial