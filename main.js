// Sellect All Images
let imgBasic = document.getElementById('bg-Img0');   //div الصورة الرئيسية
let aboutImg = document.getElementById('bg-Img1');
let workImg = document.getElementById('bg-Img2');
let contImg = document.getElementById('bg-Img3');

imgBasic.style.backgroundImage = "url('2109_the_card/img/photo-02.jpg')";

// Sellect Overlay & Load icon
let overlay1 = document.getElementById('overlay1'),
    overlay2 = document.getElementById('overlay2');
let load = document.getElementsByClassName('load')[0];
window.onload = () => {
    overlay1.style.width = 0;
    overlay2.style.width = 0;
    load.style.opacity = 0;
}

let myMenu = document.getElementById('list'); // Menu

//Sellect The Button => Read More
var btReadMore = document.getElementById('btMore');

// Create Navbar (كلمة menu)
let navBt = document.createElement('nav');
let adressOfNav = document.createTextNode('MENU');
navBt.appendChild(adressOfNav);
myMenu.appendChild(navBt);
navBt.setAttribute('id', 'nav');

//Select Nav By 'id' :
let myNav = document.getElementById('nav');
myNav.style.width = '98px';
myNav.style.height = '55px';
myNav.style.backgroundColor = 'white';
myNav.style.color = 'black';
myNav.style.textAlign = 'center';
myNav.style.padding = '18px';
myNav.style.cursor = 'pointer';
myNav.style.float = 'right';

// Create <span> In Navbar
let navSpan = document.createElement('span');
myNav.appendChild(navSpan);

// Create Ul - عناصر Navbar
myUl = document.createElement('ul');
myMenu.appendChild(myUl);

// Create Li
for (var i = 0; i < 5; i++) {
    let myLi = document.createElement('li');
    myUl.appendChild(myLi);
    let liItems = ['INTRO', 'ABOUT', 'WORK', 'CONTACT', 'EXTERNAL'];
    myLi.textContent = liItems[i];
}

myMenu.style.transition = 'all .5s ease';

myNav.onclick = () => {
    if (myUl.style.display === 'block') {
        myUl.style.display = 'none';
    } else {
        myUl.style.display = 'block';
    }
    myNav.style.transition = 'all .5s ease';
}

myNav.onmouseover = () => {
    myNav.style.color = 'red';
    myNav.style.fontWeight = 'bold';
}
myNav.onmouseout = () => {
    myNav.style.color = 'black';
    myNav.style.fontWeight = '';
}

myUl.onmouseout = () => {
    if (myUl.style.display === 'block') {
        myUl.style.display = 'none';
    } else {
        myUl.style.display = 'block';
    }
}

//Sellect (h2, div) => INTRODUCTION:
let IntroH2 = document.getElementsByClassName('intro-head')[0],
    introDiv = document.getElementsByClassName('introDiv')[0];

// Sellect div => about-me
let aboutMe = document.getElementById('about-me'),
    aboutBt = document.getElementById('about-next');

// Sellect contaier => WORK
let workCont = document.getElementById('work-cont');

// Sellect => Contact
let contact = document.getElementById('contact'),
    formContact = document.getElementsByClassName('form-contact');

        // INTRODUCTION
myUl.childNodes[0].onclick = () => {
    imgBasic.style.backgroundImage = "url('2109_the_card/img/photo-02.jpg')";
    aboutImg.style.backgroundImage = '';
    workImg.style.backgroundImage = '';
    contImg.style.backgroundImage =  '';
    IntroH2.style.display = 'block';
    introDiv.style.display = 'block';
    btReadMore.style.display = 'block';
    aboutMe.style.display = 'none';
        // work
    workCont.style.display = 'none';
        // Contact
    contact.style.display = "none";
}

        //about-me
myUl.childNodes[1].onclick = () => {
    imgBasic.style.backgroundImage = '';
    workImg.style.backgroundImage = '';
    contImg.style.backgroundImage =  '';
    aboutImg.style.backgroundImage = "url('2109_the_card/img/photo-03.jpg')";
    IntroH2.style.display = 'none';
    introDiv.style.display = 'none';
    btReadMore.style.display = 'none';
    aboutMe.style.display = 'block';
        // work
    workCont.style.display = 'none';
        // Contact
    contact.style.display = "none";
}

        // WORK
myUl.childNodes[2].onclick = () => {
    imgBasic.style.backgroundImage = '';
    aboutImg.style.backgroundImage = '';
    contImg.style.backgroundImage =  '';
    workImg.style.backgroundImage = "url('2109_the_card/img/photo-04.jpg')";
    IntroH2.style.display = 'none';
    introDiv.style.display = 'none';
    btReadMore.style.display = 'none';
    aboutMe.style.display = 'none';
    // work
    workCont.style.display = 'block';
        // Contact
    contact.style.display = "none";
}

        // Contact
myUl.childNodes[3].onclick = () => {
    imgBasic.style.backgroundImage = '';
    aboutImg.style.backgroundImage = '';
    workImg.style.backgroundImage = '';
    contImg.style.backgroundImage = "url('2109_the_card/img/photo-05.jpg')"
    IntroH2.style.display = 'none';
    introDiv.style.display = 'none';
    btReadMore.style.display = 'none';
    aboutMe.style.display = 'none';
        // work
    workCont.style.display = 'none';
        // Contact
    contact.style.display = "block";
}

        // External
myUl.childNodes[4].onclick = () => {
    window.location = "https://www.facebook.com/hrshopi";
}
myUl.childNodes[4].setAttribute('id', 'blank-url');
myUl.childNodes[4].setAttribute('target', '_blank');

        // زر ال Read More in => أول صورة
btReadMore.onclick = () => {
    imgBasic.style.backgroundImage = '';
    workImg.style.backgroundImage = '';
    contImg.style.backgroundImage =  '';
    aboutImg.style.backgroundImage = "url('2109_the_card/img/photo-03.jpg')";
    IntroH2.style.display = 'none';
    introDiv.style.display = 'none';
    btReadMore.style.display = 'none';
    aboutMe.style.display = 'block';
        // work
    workCont.style.display = 'none';
}

        // زر ال Next in => ثاني صورة
aboutBt.onclick = () => {
    workImg.style.backgroundImage = "url('2109_the_card/img/photo-04.jpg')";
    imgBasic.style.backgroundImage = '';
    contImg.style.backgroundImage =  '';
    aboutImg.style.backgroundImage = "";
    IntroH2.style.display = 'none';
    introDiv.style.display = 'none';
    btReadMore.style.display = 'none';
    aboutMe.style.display = 'none';
    // work
    workCont.style.display = 'block';
}


                // WORK
        // باستخدام Array
// let workImages = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

        // طريقة أخرى
// let count = 1,
//     folder = "2109_the_card/img/",
//     totalImages = 12;
// let imgWork = document.getElementsByClassName('imgWork');

        // هنا فى for اما نستخدم Array أو الطريقة الثانية
// for (var x = 0; x < imgWork.length; x++) {
    // count = count + x;
//     imgWork[x].src = folder + workImages[x] + ".jpg";
// }


            // Number Of Small Image
    
let btImgTransfare = document.getElementById('img-transfare');
let divImageWork = document.getElementsByClassName('divimage-work');
let myImages = document.getElementsByClassName('imgWork');

for (var bt = 0; bt < 6; bt++) {
    let btnLi = document.createElement('li');
    btImgTransfare.appendChild(btnLi);
    let btnNum = ['1', '2', '3', '4', '5', '6'];
    btnLi.textContent = btnNum[bt];
}

btImgTransfare.childNodes[1].style.backgroundColor = 'brown';
btImgTransfare.childNodes[1].setAttribute('class', 'checked');

for (var t  = 4; t < divImageWork.length; t++) {
   divImageWork[t].style.display = 'none';
}

// btImgTransfare.childNodes[1].onclick = () => {
//     divImageWork[0].style.transform = 'translate3d(0, 0)';
//     divImageWork[1].style.transform = 'translate3d(0, 0)';
//     divImageWork[2].style.transform = 'translate3d(0, 0)';
//     divImageWork[3].style.transform = 'translate3d(0, 0)';

//     divImageWork[t].style.display = 'none';
    
//     divImageWork[0].style.display = 'inline-block';
//     divImageWork[1].style.display = 'inline-block';
//     divImageWork[2].style.display = 'inline-block';
//     divImageWork[3].style.display = 'inline-block';
// }

// btImgTransfare.childNodes[2].onclick = () => {
//     divImageWork[0].style.transform = 'translate3d(-218px, 0px, 0)';
//     divImageWork[1].style.transform = 'translate3d(-218px, 0px, 0)';
//     divImageWork[2].style.transform = 'translate3d(-436px, 0px, 0)';
//     divImageWork[3].style.transform = 'translate3d(-436px, 0px, 0)';

//     divImageWork[0].style.visibility = 'hidden';
//     divImageWork[1].style.visibility = 'hidden';

//     divImageWork[4].style.display = 'inline-block';
//     divImageWork[4].style.transform = 'translate3d(-436px, 0px, 0)';
    
//     divImageWork[5].style.display = 'inline-block';
//     divImageWork[5].style.transform = 'translate3d(-436px, 0px, 0)';
    
// }

// btImgTransfare.childNodes[3].onclick = () => {
//     divImageWork[2].style.transform = 'translate3d(-218px, 0px, 0)';
//     divImageWork[3].style.transform = 'translate3d(-218px, 0px, 0)';
//     divImageWork[4].style.transform = 'translate3d(-436px, 0px, 0)';
//     divImageWork[5].style.transform = 'translate3d(-436px, 0px, 0)';

//     divImageWork[2].style.visibility = 'hidden';
//     divImageWork[3].style.visibility = 'hidden';

//     divImageWork[6].style.display = 'inline-block';
//     divImageWork[6].style.transform = 'translate3d(-436px, 0px, 0)';
    
//     divImageWork[7].style.display = 'inline-block';
//     divImageWork[7].style.transform = 'translate3d(-436px, 0px, 0)';
    
// }

// btImgTransfare.childNodes[1].onclick = () => {
//     divImageWork[0].style
// }

// if (btImgTransfare.childNodes[2].onclick = () => {
//     divImageWork[0].style.transform = 'translate3d(-218px, 0px, 0)';
//     divImageWork[1].style.transform = 'translate3d(-218px, 0px, 0)';
//     divImageWork[2].style.transform = 'translate3d(-436px, 0px, 0)';
//     divImageWork[3].style.transform = 'translate3d(-436px, 0px, 0)';

//     divImageWork[0].style.visibility = 'hidden';
//     divImageWork[1].style.visibility = 'hidden';

//     divImageWork[4].style.display = 'inline-block';
//     divImageWork[4].style.transform = 'translate3d(-436px, 0px, 0)';
    
//     divImageWork[5].style.display = 'inline-block';
//     divImageWork[5].style.transform = 'translate3d(-436px, 0px, 0)'; 
// });


btImgTransfare.childNodes[1].onclick = () => {
    divImageWork[0].style.display = 'inline-block';
    divImageWork[1].style.display = 'inline-block';
    divImageWork[2].style.display = 'inline-block';
    divImageWork[3].style.display = 'inline-block';

    divImageWork[4].style.display = 'none';
    divImageWork[5].style.display = 'none';
    divImageWork[6].style.display = 'none';
    divImageWork[7].style.display = 'none';
    divImageWork[8].style.display = 'none';
    divImageWork[9].style.display = 'none';
    divImageWork[10].style.display = 'none';
    divImageWork[11].style.display = 'none';

    btImgTransfare.childNodes[1].style.backgroundColor = 'brown';
    btImgTransfare.childNodes[2].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[3].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[4].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[5].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[6].style.backgroundColor = 'orangered';
}

btImgTransfare.childNodes[2].onclick = () => {
    divImageWork[0].style.display = 'none';
    divImageWork[1].style.display = 'none';
    divImageWork[2].style.display = 'none';
    divImageWork[3].style.display = 'none';
    divImageWork[6].style.display = 'none';
    divImageWork[7].style.display = 'none';
    divImageWork[8].style.display = 'none';
    divImageWork[9].style.display = 'none';
    divImageWork[10].style.display = 'none';
    divImageWork[11].style.display = 'none';

    divImageWork[2].style.display = 'inline-block';
    divImageWork[3].style.display = 'inline-block';
    divImageWork[4].style.display = 'inline-block';
    divImageWork[5].style.display = 'inline-block';

    btImgTransfare.childNodes[1].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[2].style.backgroundColor = 'brown';
    btImgTransfare.childNodes[3].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[4].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[5].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[6].style.backgroundColor = 'orangered';
}

btImgTransfare.childNodes[3].onclick = () => {
    divImageWork[0].style.display = 'none';
    divImageWork[1].style.display = 'none';
    divImageWork[2].style.display = 'none';
    divImageWork[3].style.display = 'none';
    divImageWork[4].style.display = 'none';
    divImageWork[5].style.display = 'none';
    divImageWork[8].style.display = 'none';
    divImageWork[9].style.display = 'none';
    divImageWork[10].style.display = 'none';
    divImageWork[11].style.display = 'none';

    divImageWork[4].style.display = 'inline-block';
    divImageWork[5].style.display = 'inline-block';
    divImageWork[6].style.display = 'inline-block';
    divImageWork[7].style.display = 'inline-block';

    btImgTransfare.childNodes[1].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[2].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[3].style.backgroundColor = 'brown';
    btImgTransfare.childNodes[4].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[5].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[6].style.backgroundColor = 'orangered';
}

btImgTransfare.childNodes[4].onclick = () => {
    divImageWork[0].style.display = 'none';
    divImageWork[1].style.display = 'none';
    divImageWork[2].style.display = 'none';
    divImageWork[3].style.display = 'none';
    divImageWork[4].style.display = 'none';
    divImageWork[5].style.display = 'none';
    divImageWork[6].style.display = 'none';
    divImageWork[7].style.display = 'none';
    divImageWork[10].style.display = 'none';
    divImageWork[11].style.display = 'none';

    divImageWork[6].style.display = 'inline-block';
    divImageWork[7].style.display = 'inline-block';
    divImageWork[8].style.display = 'inline-block';
    divImageWork[9].style.display = 'inline-block';

    btImgTransfare.childNodes[1].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[2].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[3].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[4].style.backgroundColor = 'brown';
    btImgTransfare.childNodes[5].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[6].style.backgroundColor = 'orangered';
}

btImgTransfare.childNodes[5].onclick = () => {
    divImageWork[0].style.display = 'none';
    divImageWork[1].style.display = 'none';
    divImageWork[2].style.display = 'none';
    divImageWork[3].style.display = 'none';
    divImageWork[4].style.display = 'none';
    divImageWork[5].style.display = 'none';
    divImageWork[6].style.display = 'none';
    divImageWork[7].style.display = 'none';
    divImageWork[8].style.display = 'none';
    divImageWork[9].style.display = 'none';

    divImageWork[8].style.display = 'inline-block';
    divImageWork[9].style.display = 'inline-block';
    divImageWork[10].style.display = 'inline-block';
    divImageWork[11].style.display = 'inline-block';

    btImgTransfare.childNodes[1].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[2].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[3].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[4].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[5].style.backgroundColor = 'brown';
    btImgTransfare.childNodes[6].style.backgroundColor = 'orangered';
}

btImgTransfare.childNodes[6].onclick = () => {
    divImageWork[2].style.display = 'none';
    divImageWork[3].style.display = 'none';
    divImageWork[4].style.display = 'none';
    divImageWork[5].style.display = 'none';
    divImageWork[6].style.display = 'none';
    divImageWork[7].style.display = 'none';
    divImageWork[8].style.display = 'none';
    divImageWork[9].style.display = 'none';
    divImageWork[10].style.display = 'none';
    divImageWork[11].style.display = 'none';

    divImageWork[10].style.display = 'inline-block';
    divImageWork[11].style.display = 'inline-block';
    divImageWork[0].style.display = 'inline-block';
    divImageWork[1].style.display = 'inline-block';

    btImgTransfare.childNodes[1].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[2].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[3].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[4].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[5].style.backgroundColor = 'orangered';
    btImgTransfare.childNodes[6].style.backgroundColor = 'brown';
}

// عند الضغط على الصور المصغرة لكى يحدث لها تكبير

let divEnlargedImage = document.getElementsByClassName('div-enlarged-image');
let fullOverLay = document.getElementsByClassName('overlay-enlarged-image')[0];
let enlargedImage = document.getElementById('enlarged-image'),
    close = document.getElementById('close');

let folderEnlargedImage = "2109_the_card/img/",
    countEnlargedImage = 1,
    totalEnlargedImage = 12;

// let workImages = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
for (var im = 0; im < divImageWork.length; im++) {

    // countEnlargedImage = countEnlargedImage + im;

    divImageWork[im].onclick = () => {
        // overlay1.style.width = '50%';
        // overlay1.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        // overlay2.style.width = '50%';
        // overlay2.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
       
        fullOverLay.style.display = 'block';
        // divEnlargedImage.style.display = 'block';
        enlargedImage.src = myImages[0].src;

                    // ***** طريقة ثانية
        // divEnlargedImage.innerHTML = "<img src="+folderEnlargedImage+countEnlargedImage+".jpg>";

                // ***** طريقة ثانية
        // enlargedImage.src = folderEnlargedImage + workImages[im] + ".jpg";
    }
}

close.onclick = () => {
    fullOverLay.style.display = 'none';
    divEnlargedImage.style.display = 'none';
}


        // CONTACT

