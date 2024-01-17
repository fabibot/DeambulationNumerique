//background : 
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.body.style.backgroundColor = "#030A3A";
    }, 500);
});

//fourchette aleatoire :
var screenWidth = window.innerWidth - 200;
var screenHeight = window.innerHeight - 120;
var min = -10;

function randomFourchette(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//couleur aléatoire :
var colorList = ['#0090C4', '#4D21C6', '#0059F3', '#007390', '#000CB6', '#002E89'];
function RandomColor() {
    return Math.floor(Math.random() * colorList.length);
}


const cursorHalo = document.querySelector('.cursor-halo');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursorHalo.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    var circle;
    var circleList = [];
    var circleMax = 600;
    var i = 0;
    //var circle;

    function createCircle() {
        circle = document.createElement('div');
        circle.classList.add('circle');
        var pX = randomFourchette(min, screenWidth);
        var pY = randomFourchette(min, screenHeight);
        circle.style.left = pX + "px";
        circle.style.top = pY + "px";
        var taille = randomFourchette(3, 8);
        circle.style.width = taille + "%";
        circle.style.height = taille + "vw";
        var color = RandomColor();
        circle.style.backgroundColor = colorList[color];
        document.body.appendChild(circle);
        circleList.push(circle);
    }

    for (var u = 0; u < 90; u++) {
        circle = document.createElement('div');
        circle.classList.add('circleBack');
        var pX = randomFourchette(min, screenWidth - 30);
        var pY = randomFourchette(min, screenHeight - 30);
        circle.style.left = pX + "px";
        circle.style.top = pY + "px";
        var taille = randomFourchette(8, 20);
        circle.style.width = taille + "%";
        circle.style.height = taille + "vw";
        document.body.appendChild(circle);
        u += 1;
    }

    for (i = 0; i < circleMax; i++) {
        createCircle();
    }
    for (var j = 0; j < circleList.length; j++) {
        (function (index) {
            setTimeout(function () {
                circleList[index].style.opacity = "0.5";
            }, 10 * index);
        })(j);
    }


    function boucleInfinie() {
        setInterval(function () {
            for (var k = 0; k < circleList.length; k++) {
            
                (function (index) {
                    setTimeout(function () {
                        var colorIndex = RandomColor();
                        circleList[index].style.backgroundColor = colorList[colorIndex];
                    }, 70 * index);
                })(k);
            }
        }, 300);
    }

    console.log("Début du programme");

    boucleInfinie();

    console.log("Fin du programme");


    var circles = document.querySelectorAll('.circle');
    var circlesProchesList = [];

    document.addEventListener('mousemove', function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        circles.forEach(function (circle) {
            var circleX = circle.offsetLeft + circle.offsetWidth / 2;
            var circleY = circle.offsetTop + circle.offsetHeight / 2;

            var distance = Math.sqrt(Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2));
            if (distance < 70) {
                circle.style.backgroundColor = '#FFF383';
                setTimeout(function () {
                    var indexColor = RandomColor();
                    circle.style.backgroundColor = colorList[indexColor];
                }, 1000);

                /*circlesProchesList.push(circle);
                if (circlesProchesList.length > 100) {
                    circlesProchesList.shift();
                }*/
                

                document.addEventListener('click', function (e) {


                    for (var i = 0; i < circlesProchesList.length; i++) {
                        //circlesProchesList[i].style.backgroundColor = "#E62955";
                       // circlesProchesList[i].style.border = "solid";

                    }
                    setTimeout(function () {

                       /* var indexColor = RandomColor();
                        circle.style.backgroundColor = colorList[indexColor];*/
                       // circlesProchesList[i].style.border = "";


                    }, 1000);

                }); 


            }
        });
    });
});



