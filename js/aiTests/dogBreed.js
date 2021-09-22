let predictions, labelContainer;
let maxPredictions = 3;
var resultLabel, resultTitle, resultExplain, resultCeleb, barWidth;

// Load the model.
mobilenet.load().then(model => {
    console.log("mobileNet ready!");
    $('.loadingOpenCV').hide();
    $('.image-upload-wrap').show();
});

// Load the image model
async function init() {
    AIthinking();
    $('.loader').show();
    $('.loading').show();

    // delete former informations 
    //labelContainer = document.getElementById('label-container');
    //for (let i = 0; i < maxPredictions; i++) {
    //    labelContainer.childNodes[i].innerHTML = "";
    //}

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds 'tmImage' object to your window (window.tmImage)
    //maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
    console.log('work done');
}

// image through the image model
async function predict() {

    // Load the model.
    mobilenet.load().then(model => {
        var img = document.getElementById('face-image');
        // Classify the image.
        model.classify(img).then(predictions => {
            AItelling();
            $('.loader').hide();
            $('.loading').hide();
            $('.file-upload-content').show();
            console.log('Predictions: ');
            console.log(predictions);

            const face = 1;
            if (face < 0) {
                // no face detected
                var resultError = "<h3 class='resultTitle'>얼굴을 찾을 수 없습니다!<br>???여길 어떻게 들어왔누???</h3>"
                var resultErrorText = "<p class='resultExplain'><b>※얼굴이 잘 나오게 다시 찍어주세요!※</b><br><i>특히, 눈, 코, 입이 잘 나와야 합니다.</i></p><style type='text/css'>.sumAnal{display:none;} .resultExplain{max-width: 100%; padding-bottom: 6px;}</st>"
                document.getElementById("identity").innerHTML = resultError;
                document.getElementById("contents").innerHTML = resultErrorText;

            } else {
                // predict can take in an image, video or canvas html element
                //prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
                console.log(predictions[0].className);
                console.log(predictions[1].className);
                console.log(predictions[2].className);

                for (let i = 0; i < maxPredictions; i++) {
                    if (predictions[i].probability.toFixed(2) == 0.00) {
                        barWidth = '2%';
                    } else if (predictions[i].probability.toFixed(2) < 0.1) {
                        barWidth = '4%';
                    } else {
                        barWidth = Math.round(predictions[i].probability.toFixed(2) * 100) + '%';
                    }
                    switch (predictions[i].className) {
                        case "Chihuahua":
                            resultLabel = "치와와"
                            break;
                        case "Japanese spaniel":
                            resultLabel = "재패니즈 친"
                            break;
                        case "Maltese dog, Maltese terrier, Maltese":
                            resultLabel = "말티즈, 말티즈 테리어"
                            break;
                        case "Pekinese, Pekingese, Peke":
                            resultLabel = "페키니즈"
                            break;
                        case "Shih-Tzu":
                            resultLabel = "시추"
                            break;
                        case "Blenheim spaniel":
                            resultLabel = "킹 찰스 스파니엘"
                            break;
                        case "papillon":
                            resultLabel = "빠삐용"
                            break;
                        case "toy terrier":
                            resultLabel = "러스키"
                            break;
                        case "Rhodesian ridgeback":
                            resultLabel = "로디지안 리지백"
                            break;
                        case "Afghan hound, Afghan":
                            resultLabel = "아프간 하운드"
                            break;
                        case "basset, basset hound":
                            resultLabel = "바셋 하운드"
                            break;
                        case "beagle":
                            resultLabel = "비글"
                            break;
                        case "bloodhound, sleuthhound":
                            resultLabel = "블러드하운드"
                            break;
                        case "bluetick":
                            resultLabel = "블루틱 쿤하운드"
                            break;
                        case "black-and-tan coonhound":
                            resultLabel = "블랙 앤드 탄 쿤하운드"
                            break;
                        case "Walker hound, Walker foxhound":
                            resultLabel = "트링 워커 쿤하운드"
                            break;
                        case "English foxhound":
                            resultLabel = "잉글리시 폭스하운드"
                            break;
                        case "redbone":
                            resultLabel = "레드본 쿤하운드"
                            break;
                        case "borzoi, Russian wolfhound":
                            resultLabel = "보르조이"
                            break;
                        case "Irish wolfhound":
                            resultLabel = "아이리시 울프하운드"
                            break;
                        case "Italian greyhound":
                            resultLabel = "이탈리안 그레이하운드"
                            break;
                        case "whippet":
                            resultLabel = "휘핏"
                            break;
                        case "Ibizan hound, Ibizan Podenco":
                            resultLabel = "이비전 하운드"
                            break;
                        case "Norwegian elkhound, elkhound":
                            resultLabel = "노르웨이언 엘크하운드"
                            break;
                        case "otterhound, otter hound":
                            resultLabel = "오터 하운드"
                            break;
                        case "Saluki, gazelle hound":
                            resultLabel = "살루키"
                            break;
                        case "Scottish deerhound, deerhound":
                            resultLabel = "스코티시 디어하운드"
                            break;
                        case "Weimaraner":
                            resultLabel = "와이머라너"
                            break;
                        case "Staffordshire bullterrier, Staffordshire bull terrier":
                            resultLabel = "스타포드셔 불 테리어"
                            break;
                        case "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier":
                            resultLabel = "아메리칸 스태퍼드셔 테리어"
                            break;
                        case "Bedlington terrier":
                            resultLabel = "베들링턴 테리어"
                            break;
                        case "Border terrier":
                            resultLabel = "보더 테리어"
                            break;
                        case "Kerry blue terrier":
                            resultLabel = "케리 블루 테리어"
                            break;
                        case "Irish terrier":
                            resultLabel = "아이리시 테리어"
                            break;
                        case "Norfolk terrier":
                            resultLabel = "노퍽 테리어"
                            break;
                        case "Norwich terrier":
                            resultLabel = "노리치 테리어"
                            break;
                        case "Yorkshire terrier":
                            resultLabel = "요크셔 테리어"
                            break;
                        case "wire-haired fox terrier":
                            resultLabel = "와이어 폭스 테리어"
                            break;
                        case "Lakeland terrier":
                            resultLabel = "레이클랜드 테리어"
                            break;
                        case "Sealyham terrier, Sealyham":
                            resultLabel = "실리햄 테리어"
                            break;
                        case "Airedale, Airedale terrier":
                            resultLabel = "에어데일 테리어"
                            break;
                        case "cairn, cairn terrier":
                            resultLabel = "케언 테리어"
                            break;
                        case "Australian terrier":
                            resultLabel = "오스트레일리안 테리어"
                            break;
                        case "Dandie Dinmont, Dandie Dinmont terrier":
                            resultLabel = "댄디 딘몬트 테리어"
                            break;
                        case "Boston bull, Boston terrier":
                            resultLabel = "보스턴 테리어"
                            break;
                        case "miniature schnauzer":
                            resultLabel = "미니어처 슈나우저"
                            break;
                        case "giant schnauzer":
                            resultLabel = "자이언트 슈나우저"
                            break;
                        case "standard schnauzer":
                            resultLabel = "스탠더드 슈나우저"
                            break;
                        case "Scotch terrier, Scottish terrier, Scottie":
                            resultLabel = "스코티시 테리어"
                            break;
                        case "Tibetan terrier, chrysanthemum dog":
                            resultLabel = "티베탄 테리어"
                            break;
                        case "silky terrier, Sydney silky":
                            resultLabel = "오스트레일리안 실키 테리어"
                            break;
                        case "soft-coated wheaten terrier":
                            resultLabel = "아이리쉬 소프트코티드 휘튼 테리어"
                            break;
                        case "West Highland white terrier":
                            resultLabel = "웨스트 하일랜드 화이트 테리어"
                            break;
                        case "Lhasa, Lhasa apso":
                            resultLabel = "라사압소"
                            break;
                        case "flat-coated retriever":
                            resultLabel = "플랫 코티드 리트리버"
                            break;
                        case "curly-coated retriever":
                            resultLabel = "컬리 코티드 리트리버"
                            break;
                        case "golden retriever":
                            resultLabel = "골든 리트리버"
                            break;
                        case "Labrador retriever":
                            resultLabel = "래브라도 리트리버"
                            break;
                        case "Chesapeake Bay retriever":
                            resultLabel = "체서피크 베이 리트리버"
                            break;
                        case "German short-haired pointer":
                            resultLabel = "저먼 쇼트헤어드 포인터"
                            break;
                        case "vizsla, Hungarian pointer":
                            resultLabel = "비즐라"
                            break;
                        case "English setter":
                            resultLabel = "르웰린"
                            break;
                        case "Irish setter, red setter":
                            resultLabel = "아이리시 세터"
                            break;
                        case "Gordon setter":
                            resultLabel = "고든 세터"
                            break;
                        case "Brittany spaniel":
                            resultLabel = "브리트니"
                            break;
                        case "clumber, clumber spaniel":
                            resultLabel = "클럼버 스파니엘"
                            break;
                        case "English springer, English springer spaniel":
                            resultLabel = "잉글리시 스프링어 스패니얼"
                            break;
                        case "Welsh springer spaniel":
                            resultLabel = "웰시 스프링어 스패니얼"
                            break;
                        case "cocker spaniel, English cocker spaniel, cocker":
                            resultLabel = "코커 스패니얼"
                            break;
                        case "Sussex spaniel":
                            resultLabel = "서식스 스패니얼"
                            break;
                        case "Irish water spaniel":
                            resultLabel = "아이리시 워터 스패니얼"
                            break;
                        case "kuvasz":
                            resultLabel = "쿠바츠"
                            break;
                        case "schipperke":
                            resultLabel = "스키퍼키"
                            break;
                        case "groenendael":
                            resultLabel = "그루넨달"
                            break;
                        case "malinois":
                            resultLabel = "말리노이즈"
                            break;
                        case "briard":
                            resultLabel = "브리아드"
                            break;
                        case "kelpie":
                            resultLabel = "오스트레일리안 켈피"
                            break;
                        case "komondor":
                            resultLabel = "코몬돌"
                            break;
                        case "Old English sheepdog, bobtail":
                            resultLabel = "올드 잉글리시 쉽독"
                            break;
                        case "Shetland sheepdog, Shetland sheep dog, Shetland":
                            resultLabel = "셔틀랜드 쉽독"
                            break;
                        case "collie":
                            resultLabel = "콜리"
                            break;
                        case "Border collie":
                            resultLabel = "보더 콜리"
                            break;
                        case "Bouvier des Flandres, Bouviers des Flandres":
                            resultLabel = "부비에 데 플랑드르"
                            break;
                        case "Rottweiler":
                            resultLabel = "로트바일러"
                            break;
                        case "German shepherd, German shepherd dog, German police dog, alsatian":
                            resultLabel = "저먼 셰퍼드"
                            break;
                        case "Doberman, Doberman pinscher":
                            resultLabel = "도베르만 핀셔"
                            break;
                        case "miniature pinscher":
                            resultLabel = "미니어처 핀셔"
                            break;
                        case "Greater Swiss Mountain dog":
                            resultLabel = "그레이트 스위스 마운틴 도그"
                            break;
                        case "Bernese mountain dog":
                            resultLabel = "버니즈 마운틴 도그일"
                            break;
                        case "Appenzeller":
                            resultLabel = "아펜젤러 세넨훈드"
                            break;
                        case "EntleBucher":
                            resultLabel = "엔틀버쳐 마운틴 독"
                            break;
                        case "boxer":
                            resultLabel = "복서"
                            break;
                        case "bull mastiff":
                            resultLabel = "불마스티프"
                            break;
                        case "Tibetan mastiff":
                            resultLabel = "티베탄 마스티프"
                            break;
                        case "French bulldog":
                            resultLabel = "프렌치 불도그"
                            break;
                        case "Great Dane":
                            resultLabel = "그레이트 데인"
                            break;
                        case "Saint Bernard, St Bernard":
                            resultLabel = "세인트버나드"
                            break;
                        case "Eskimo dog, husky":
                            resultLabel = "아메리칸 에스키모 도그"
                            break;
                        case "malamute, malemute, Alaskan malamute":
                            resultLabel = "알래스칸 말라뮤트"
                            break;
                        case "Siberian husky":
                            resultLabel = "시베리안 허스키"
                            break;
                        case "dalmatian, coach dog, carriage dog":
                            resultLabel = "달마티안"
                            break;
                        case "affenpinscher, monkey pinscher, monkey dog":
                            resultLabel = "아펜핀셔"
                            break;
                        case "basenji":
                            resultLabel = "바센지"
                            break;
                        case "pug, pug-dog":
                            resultLabel = "퍼그"
                            break;
                        case "Leonberg":
                            resultLabel = "레온베르거"
                            break;
                        case "Newfoundland, Newfoundland dog":
                            resultLabel = "뉴펀들랜드"
                            break;
                        case "Great Pyrenees":
                            resultLabel = "그레이트 피레니즈"
                            break;
                        case "Samoyed, Samoyede":
                            resultLabel = "사모예드견"
                            break;
                        case "Pomeranian":
                            resultLabel = "포메라니안"
                            break;
                        case "chow, chow chow":
                            resultLabel = "차우차우"
                            break;
                        case "keeshond":
                            resultLabel = "키스혼드"
                            break;
                        case "Brabancon griffon":
                            resultLabel = "브뤼셀 그리펀"
                            break;
                        case "Pembroke, Pembroke Welsh corgi":
                            resultLabel = "펨브록 웰시 코기"
                            break;
                        case "Cardigan, Cardigan Welsh corgi":
                            resultLabel = "카디건 웰시 코기"
                            break;
                        case "toy poodle":
                            resultLabel = "토이푸들"
                            break;
                        case "miniature poodle":
                            resultLabel = "미니어처 푸들"
                            break;
                        case "standard poodle":
                            resultLabel = "푸들"
                            break;
                        case "Mexican hairless":
                            resultLabel = "멕시칸 헤어리스 도그"
                            break;
                        case "timber wolf, grey wolf, gray wolf, Canis lupus":
                            resultLabel = "회색늑대(?!)"
                            break;
                        case "white wolf, Arctic wolf, Canis lupus tundrarum":
                            resultLabel = "북극늑대(?!)"
                            break;
                        case "red wolf, maned wolf, Canis rufus, Canis niger":
                            resultLabel = "붉은늑대(?!)"
                            break;
                        case "coyote, prairie wolf, brush wolf, Canis latrans":
                            resultLabel = "코요테(?!)"
                            break;
                        case "dingo, warrigal, warragal, Canis dingo":
                            resultLabel = "딩고"
                            break;
                        case "dhole, Cuon alpinus":
                            resultLabel = "승냥이(?!)"
                            break;
                        case "African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus":
                            resultLabel = "아프리카들개"
                            break;
                        default:
                            resultLabel = "강아지가 아닌 데이터입니다."
                    }

                    switch (predictions[0].className) {
                        case "Chihuahua":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Japanese spaniel":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Maltese dog, Maltese terrier, Maltese":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Pekinese, Pekingese, Peke":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Shih-Tzu":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Blenheim spaniel":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "papillon":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "toy terrier":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Rhodesian ridgeback":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Afghan hound, Afghan":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "basset, basset hound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "beagle":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "bloodhound, sleuthhound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "bluetick":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "black-and-tan coonhound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Walker hound, Walker foxhound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "English foxhound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "redbone":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "borzoi, Russian wolfhound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                        case "Irish wolfhound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Italian greyhound":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "whippet":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Ibizan hound, Ibizan Podenco":
                            resultLabel = "이비전 하운드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Norwegian elkhound, elkhound":
                            resultLabel = "노르웨이언 엘크하운드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "otterhound, otter hound":
                            resultLabel = "오터 하운드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Saluki, gazelle hound":
                            resultLabel = "살루키"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Scottish deerhound, deerhound":
                            resultLabel = "스코티시 디어하운드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Weimaraner":
                            resultLabel = "와이머라너"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Staffordshire bullterrier, Staffordshire bull terrier":
                            resultLabel = "스타포드셔 불 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier":
                            resultLabel = "아메리칸 스태퍼드셔 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Bedlington terrier":
                            resultLabel = "베들링턴 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Border terrier":
                            resultLabel = "보더 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Kerry blue terrier":
                            resultLabel = "케리 블루 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Irish terrier":
                            resultLabel = "아이리시 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Norfolk terrier":
                            resultLabel = "노퍽 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Norwich terrier":
                            resultLabel = "노리치 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Yorkshire terrier":
                            resultLabel = "요크셔 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "wire-haired fox terrier":
                            resultLabel = "와이어 폭스 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Lakeland terrier":
                            resultLabel = "레이클랜드 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Sealyham terrier, Sealyham":
                            resultLabel = "실리햄 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Airedale, Airedale terrier":
                            resultLabel = "에어데일 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "cairn, cairn terrier":
                            resultLabel = "케언 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Australian terrier":
                            resultLabel = "오스트레일리안 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Dandie Dinmont, Dandie Dinmont terrier":
                            resultLabel = "댄디 딘몬트 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Boston bull, Boston terrier":
                            resultLabel = "보스턴 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "miniature schnauzer":
                            resultLabel = "미니어처 슈나우저"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "giant schnauzer":
                            resultLabel = "자이언트 슈나우저"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "standard schnauzer":
                            resultLabel = "스탠더드 슈나우저"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Scotch terrier, Scottish terrier, Scottie":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            resultLabel = "스코티시 테리어"
                            break;
                        case "Tibetan terrier, chrysanthemum dog":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            resultLabel = "티베탄 테리어"
                            break;
                        case "silky terrier, Sydney silky":
                            resultLabel = "오스트레일리안 실키 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "soft-coated wheaten terrier":
                            resultLabel = "아이리쉬 소프트코티드 휘튼 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "West Highland white terrier":
                            resultLabel = "웨스트 하일랜드 화이트 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Lhasa, Lhasa apso":
                            resultLabel = "라사압소"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "flat-coated retriever":
                            resultLabel = "플랫 코티드 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "curly-coated retriever":
                            resultLabel = "컬리 코티드 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "golden retriever":
                            resultLabel = "골든 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Labrador retriever":
                            resultLabel = "래브라도 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Chesapeake Bay retriever":
                            resultLabel = "체서피크 베이 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "German short-haired pointer":
                            resultLabel = "저먼 쇼트헤어드 포인터"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "vizsla, Hungarian pointer":
                            resultLabel = "비즐라"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "English setter":
                            resultLabel = "르웰린"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Irish setter, red setter":
                            resultLabel = "아이리시 세터"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Gordon setter":
                            resultLabel = "고든 세터"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Brittany spaniel":
                            resultLabel = "브리트니"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "clumber, clumber spaniel":
                            resultLabel = "클럼버 스파니엘"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "English springer, English springer spaniel":
                            resultLabel = "잉글리시 스프링어 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Welsh springer spaniel":
                            resultLabel = "웰시 스프링어 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "cocker spaniel, English cocker spaniel, cocker":
                            resultLabel = "코커 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Sussex spaniel":
                            resultLabel = "서식스 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Irish water spaniel":
                            resultLabel = "아이리시 워터 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "kuvasz":
                            resultLabel = "쿠바츠"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "schipperke":
                            resultLabel = "스키퍼키"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "groenendael":
                            resultLabel = "그루넨달"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "malinois":
                            resultLabel = "말리노이즈"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "briard":
                            resultLabel = "브리아드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "kelpie":
                            resultLabel = "오스트레일리안 켈피"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "komondor":
                            resultLabel = "코몬돌"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Old English sheepdog, bobtail":
                            resultLabel = "올드 잉글리시 쉽독"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Shetland sheepdog, Shetland sheep dog, Shetland":
                            resultLabel = "셔틀랜드 쉽독"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "collie":
                            resultLabel = "콜리"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Border collie":
                            resultLabel = "보더 콜리"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Bouvier des Flandres, Bouviers des Flandres":
                            resultLabel = "부비에 데 플랑드르"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Rottweiler":
                            resultLabel = "로트바일러"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "German shepherd, German shepherd dog, German police dog, alsatian":
                            resultLabel = "저먼 셰퍼드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Doberman, Doberman pinscher":
                            resultLabel = "도베르만 핀셔"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "miniature pinscher":
                            resultLabel = "미니어처 핀셔"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Greater Swiss Mountain dog":
                            resultLabel = "그레이트 스위스 마운틴 도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Bernese mountain dog":
                            resultLabel = "버니즈 마운틴 도그일"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Appenzeller":
                            resultLabel = "아펜젤러 세넨훈드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "EntleBucher":
                            resultLabel = "엔틀버쳐 마운틴 독"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "boxer":
                            resultLabel = "복서"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "bull mastiff":
                            resultLabel = "불마스티프"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Tibetan mastiff":
                            resultLabel = "티베탄 마스티프"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "French bulldog":
                            resultLabel = "프렌치 불도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Great Dane":
                            resultLabel = "그레이트 데인"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Saint Bernard, St Bernard":
                            resultLabel = "세인트버나드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Eskimo dog, husky":
                            resultLabel = "아메리칸 에스키모 도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "malamute, malemute, Alaskan malamute":
                            resultLabel = "알래스칸 말라뮤트"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Siberian husky":
                            resultLabel = "시베리안 허스키"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "dalmatian, coach dog, carriage dog":
                            resultLabel = "달마티안"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "affenpinscher, monkey pinscher, monkey dog":
                            resultLabel = "아펜핀셔"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "basenji":
                            resultLabel = "바센지"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "pug, pug-dog":
                            resultLabel = "퍼그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Leonberg":
                            resultLabel = "레온베르거"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Newfoundland, Newfoundland dog":
                            resultLabel = "뉴펀들랜드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Great Pyrenees":
                            resultLabel = "그레이트 피레니즈"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Samoyed, Samoyede":
                            resultLabel = "사모예드견"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Pomeranian":
                            resultLabel = "포메라니안"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "chow, chow chow":
                            resultLabel = "차우차우"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "keeshond":
                            resultLabel = "키스혼드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Brabancon griffon":
                            resultLabel = "브뤼셀 그리펀"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Pembroke, Pembroke Welsh corgi":
                            resultLabel = "펨브록 웰시 코기"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Cardigan, Cardigan Welsh corgi":
                            resultLabel = "카디건 웰시 코기"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "toy poodle":
                            resultLabel = "토이푸들"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "miniature poodle":
                            resultLabel = "미니어처 푸들"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "standard poodle":
                            resultLabel = "푸들"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Mexican hairless":
                            resultLabel = "멕시칸 헤어리스 도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "timber wolf, grey wolf, gray wolf, Canis lupus":
                            resultLabel = "회색늑대(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "white wolf, Arctic wolf, Canis lupus tundrarum":
                            resultLabel = "북극늑대(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "red wolf, maned wolf, Canis rufus, Canis niger":
                            resultLabel = "붉은늑대(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "coyote, prairie wolf, brush wolf, Canis latrans":
                            resultLabel = "코요테(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "dingo, warrigal, warragal, Canis dingo":
                            resultLabel = "딩고"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "dhole, Cuon alpinus":
                            resultLabel = "승냥이(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus":
                            resultLabel = "아프리카들개"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        default:
                            resultTitle = "강아지를 감지하지 못했습니다!"
                            resultExplain = "더 정확한 결과를 원한다면 강이지가 잘 나오게 다시 찍어주세요. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                    }

                    var title = "<div class='resultContents'><h3 class='resultTitle " + predictions[0].className + "'>" + resultTitle + "</h3>"
                    var explain = "<p class='resultExplain " + predictions[0].className + "'>" + resultExplain + "</p>"
                    var celeb = "<p class='resultCeleb " + predictions[0].className + "'>" + resultCeleb + "</P></div><br>"
                    document.getElementById("identity").innerHTML = title
                    document.getElementById("contents").innerHTML = explain + celeb;

                    if (resultLabel == "강아지가 아닌 데이터입니다.") {
                        var label = "<h3></h3>";
                        var bar = "<div></div>";
                    } else {
                        var label = "<h3 class=' bar-title " + predictions[i].className + "'>" + resultLabel + "</h3>";
                        var bar = "<div class='" + predictions[i].className + "-bar-container bar-container'><div class='" + predictions[i].className + "-bar-box'></div><div class=' " + predictions[i].className + "-bar bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(predictions[i].probability.toFixed(2) * 100) + "%</span></div></div>";
                    }
                    var resultGraph = "<h3 class='result-graph'>분석결과 : </h3>"
                    document.getElementById("analTitle").innerHTML = resultGraph;
                    var analysis = "<div class='anal' id='label-container'>" + label + bar + "</div>"
                    labelContainer.childNodes[i].innerHTML = analysis;
                }
            }
        });
    });
}
