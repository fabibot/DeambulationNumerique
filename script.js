let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let prenom = document.getElementById("prenom");

let background = document.getElementById("background");
var titre = document.getElementById("titre");

var bodyElement = document.body;
document.addEventListener("DOMContentLoaded", function () {
    var animeIntro = document.getElementById('animeIntro');
    animeIntro.style.top = "50%";

    setTimeout(function () {
        animeIntro.style.width = "110vw"
        animeIntro.style.height = "110vw";
    }, 1000);

    setTimeout(function () {
        bodyElement.style.backgroundColor = "#FFC95A";
    }, 1400);

    setTimeout(function () {
        document.body.removeChild(animeIntro);
        titre.style.opacity = "0.8";
        titre.style.left = "10%";
        prenom.style.opacity = "0.6";
        prenom.style.marginLeft = "100px"

    }, 2000);

    setTimeout(function () {
        img1.style.width = "10%";
        img1.style.opacity = "1";
        img2.style.width = "10%";
        img2.style.opacity = "1";
        img3.style.width = "10%";
        img3.style.opacity = "1";

    }, 3000);
});

function retablir() {
    img1.style.width = "10%";
    img2.style.width = "10%";
    img3.style.width = "10%";
    bodyElement.style.backgroundColor = "#FFC95A";
    titre.style.filter = "blur(0px)";
    prenom.style.filter = "blur(0px)";

}

document.addEventListener("DOMContentLoaded", function () {

    img1.addEventListener("mouseenter", function () {
        bodyElement.style.backgroundColor = "#4734EC";
        img1.style.width = "20%";
        img2.style.width = "5%";
        img3.style.width = "5%";
        titre.style.filter = "blur(20px)"
        prenom.style.filter = "blur(20px)"

    }
    );

    img1.addEventListener("mouseleave", function () {
        retablir();
    }
    );


    img2.addEventListener("mouseenter", function () {
        bodyElement.style.backgroundColor = "#DB0D52";
        img2.style.width = "20%";
        img1.style.width = "5%";
        img3.style.width = "5%";
        titre.style.filter = "blur(20px)"
        prenom.style.filter = "blur(20px)"


    }
    );

    img2.addEventListener("mouseleave", function () {
        retablir();
    }
    );



    img3.addEventListener("mouseenter", function () {
        bodyElement.style.backgroundColor = "#43F2AC";
        img3.style.width = "20%";
        img2.style.width = "5%";
        img1.style.width = "5%";
        titre.style.filter = "blur(20px)"
        prenom.style.filter = "blur(20px)"

    }
    );

    img3.addEventListener("mouseleave", function () {
        retablir();
    }
    );

    //si on click sur une image : 
    var blockTransition = document.getElementById("transition");
    img1.addEventListener("click", function () {
        blockTransition.style.width = "100%";
        setTimeout(function () {
            window.location.href = "page1.html";
        }, 1000);
    });

    img2.addEventListener("click", function () {
        blockTransition.style.width = "100%";
        setTimeout(function () {
            window.location.href = "page2.html";
        }, 1000);
    });

    img3.addEventListener("click", function () {
        blockTransition.style.width = "100%";
        setTimeout(function () {
            window.location.href = "page3.html";
        }, 1000);

    });

});
