//couleur aléatoire :
var colorList = ['#E5002E', '#FFDA1C', '#465CEC'];
function RandomColorIndex() {
    return Math.floor(Math.random() * colorList.length);
}
//position aleatoire :
var screenWidth = window.innerWidth - 100;
var screenHeight = window.innerHeight - 100;
var min = 40;
function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//background
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.body.style.backgroundColor = "white";
    }, 500);
});


//------------------------------------Touche E-------------------------------------------------------------//
var keyEPress = false;
var startCreation = true;
var squarewidth = 0;
var square;
var maxSquare = 6;
var squareList = [];
var keyList1 = ['e', 'E', 'm', 'M', 'w', 'W'];

function actionTaille() {
    if (keyEPress && square) {
        var squarewidth = parseFloat(window.getComputedStyle(square).width);
        if (square.offsetLeft + squarewidth >= screenWidth + 80) {
            squarewidth += 0;
        } else {
            squarewidth += 0.5;
        }
        square.style.width = squarewidth + "px";
    }
    requestAnimationFrame(actionTaille);
}

document.addEventListener("keydown", function (event) {
    if (keyList1.includes(event.key)) {

        keyEPress = true;
        if (startCreation == true) {
            square = document.createElement('div');
            square.classList.add('square');
            var color = RandomColorIndex();
            pX = randomPosition(min, screenWidth);
            pY = randomPosition(min, screenHeight);
            square.style.backgroundColor = colorList[color];
            square.style.left = pX + "px";
            square.style.top = pY + "px";

            document.body.appendChild(square);
            squareList.push(square);
            startCreation = false;
        }
        actionTaille();
        if (squareList.length > maxSquare) {
            var firstSquare = squareList.shift();
            firstSquare.style.opacity = "0";
            setTimeout(function () {
                document.body.removeChild(firstSquare);
            }, 1000);
        }
    };
});

document.addEventListener('keyup', function (event) {
    if (keyList1.includes(event.key)) {
        keyEPress = false;
        startCreation = true;
    }
});

//------------------------------------Touche Z-------------------------------------------------------------//

var keyZPress = false;
var startCreation2 = true;
var rectheight = 0;
var rect;
var maxRect = 6;
var rectList = [];
var keyList2 = ['z', 'Z', 'l', 'L', 'c', 'C'];
function rectTaille() {
    if (keyZPress && rect) {
        var rectheight = parseFloat(window.getComputedStyle(rect).height);
        if (rect.offsetTop + rectheight >= screenHeight + 100) {
            rectheight += 0;
        } else {
            rectheight += 0.5;
        }
        rect.style.height = rectheight + "px";
    }
    requestAnimationFrame(rectTaille);
}

document.addEventListener("keydown", function (event) {
    if (keyList2.includes(event.key)) {
        keyZPress = true;
        if (startCreation2 == true) {
            rect = document.createElement('div');
            rect.classList.add('rect');
            var color = RandomColorIndex();
            pX = randomPosition(min, screenWidth);
            pY = randomPosition(min, screenHeight);
            rect.style.backgroundColor = colorList[color];
            rect.style.left = pX + "px";
            rect.style.top = pY + "px";

            document.body.appendChild(rect);
            rectList.push(rect);
            startCreation2 = false;
        }
        rectTaille();
        if (rectList.length > maxRect) {
            var firstRect = rectList.shift();
            firstRect.style.opacity = "0";

            setTimeout(function () {
                document.body.removeChild(firstRect)
            }, 1000);
        }
    };
});

document.addEventListener('keyup', function (event) {
    if (keyList2.includes(event.key)) {
        keyZPress = false;
        startCreation2 = true;
    }
});


//--------------------------------------------------------Touche T ----------------------------------------//
var minLine = -50;
var line2;

var startLine2 = true;
var keyTPress = false;
var svg2;
var maxLine = 6;
var lineList2 = [];
var keyList3 = ['t', 'T', 'f', 'F', 'x', 'X'];

function addLargeur() {
    if (keyTPress && line2) {
        var x2 = parseFloat(line2.getAttribute('x2'));
        x2 += 1;
        line2.setAttribute("x2", x2);

    }
    requestAnimationFrame(addLargeur);
}


document.addEventListener('keydown', function (event) {
    if (keyList3.includes(event.key)) {
        keyTPress = true;
        if (startLine2 == true) {
            svg2 = document.getElementById("svg-container");
            line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");

            pX = randomPosition(minLine, screenWidth);
            pY = randomPosition(minLine, screenHeight);

            line2.setAttribute("x1", pX);
            line2.setAttribute("y1", pY + 70);
            line2.setAttribute("x2", "15");
            line2.setAttribute("y2", pY + 70);
            line2.setAttribute("stroke", "black");
            line2.setAttribute("stroke-width", "4");
            line2.setAttribute("opacity", "1");
            line2.setAttribute("style", "transition : opacity 3s ease-in-out")

            svg2.appendChild(line2);
            lineList2.push(line2);
            startLine2 = false;
        }
        addLargeur();
        if (lineList2.length > maxLine) {
            var firstLine = lineList2.shift();
            firstLine.setAttribute("opacity", "0");

            setTimeout(function () {
                svg2.removeChild(firstLine);
            }, 4000);
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (keyList3.includes(event.key)) {
        keyTPress = false;
        startLine2 = true;
    }
});

//------------------------------------Touche Y-------------------------------------------------------------//
var keyYPress = false;
var startCreation4 = true;
var largeSquare;
var maxLargeSquare = 3;
var largeSquareList = [];
var keyList4 = ['y', 'Y', 'o', 'O', 'r', 'R'];

function actionLargeTaille() {
    if (keyYPress && largeSquare) {
        var largeSquarewidth = parseFloat(window.getComputedStyle(largeSquare).width);
        if (largeSquare.offsetWidth >= screenWidth / 3) {
            largeSquarewidth += 0;
        } else {
            largeSquarewidth += 0.5;
        }
        largeSquare.style.height = largeSquarewidth + "px";
        largeSquare.style.width = largeSquarewidth + "px";
    }
    requestAnimationFrame(actionLargeTaille);
}

document.addEventListener("keydown", function (event) {
    if (keyList4.includes(event.key)) {

        keyYPress = true;
        if (startCreation4 == true) {
            largeSquare = document.createElement('div');
            largeSquare.classList.add('largeSquare');
            var color = RandomColorIndex();
            pX = randomPosition(min, screenWidth - 80);
            pY = randomPosition(min, screenHeight - 20);
            largeSquare.style.backgroundColor = colorList[color];
            largeSquare.style.left = pX + "px";
            largeSquare.style.top = pY + "px";
            largeSquare.style.width = "50px";
            largeSquare.style.height = "50px";
            largeSquare.style.opacity = "0.3";

            document.body.appendChild(largeSquare);
            largeSquareList.push(largeSquare);
            startCreation4 = false;
        }
        actionLargeTaille();

        if (largeSquareList.length > maxLargeSquare) {
            var firstLargeSquare = largeSquareList.shift();
            firstLargeSquare.style.opacity = "0";
            setTimeout(function () {
                document.body.removeChild(firstLargeSquare);
            }, 4000);
        }
    };
});

document.addEventListener('keyup', function (event) {
    if (keyList4.includes(event.key)) {
        keyYPress = false;
        startCreation4 = true;
    }
});



//--------------------------------------------------------Touche I ----------------------------------------//
var minLine = -50;
var line1;

var startLine = true;
var keyIPress = false;
var svg;
var maxLine = 6;
var lineList = [];
var keyList5 = ['i', 'I', 'j', 'J', 'n', 'N'];

function addLongueur() {
    if (keyIPress && line1) {
        var y2 = parseFloat(line1.getAttribute('y2'));
        y2 += 1;
        line1.setAttribute("y2", y2);

    }
    requestAnimationFrame(addLongueur);
}


document.addEventListener('keydown', function (event) {
    if (keyList5.includes(event.key)) {
        keyIPress = true;
        if (startLine == true) {
            svg = document.getElementById("svg-container");
            line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");

            pX = randomPosition(minLine, screenWidth);
            pY = randomPosition(minLine, screenHeight);

            line1.setAttribute("x1", pX + 70);
            line1.setAttribute("y1", pY);
            line1.setAttribute("x2", pX + 70);
            line1.setAttribute("y2", "15");
            line1.setAttribute("stroke", "black");
            line1.setAttribute("stroke-width", "4");
            line1.setAttribute("opacity", "1");
            line1.setAttribute("style", "transition : opacity 3s ease-in-out")

            svg.appendChild(line1);
            lineList.push(line1);
            startLine = false;
        }
        addLongueur();
        if (lineList.length > maxLine) {
            var firstLine = lineList.shift();
            firstLine.setAttribute("opacity", "0");

            setTimeout(function () {
                svg.removeChild(firstLine);
            }, 4000);
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (keyList5.includes(event.key)) {
        keyIPress = false;
        startLine = true;
    }
});


//------------------------------------Touche P-------------------------------------------------------------//

var startCreation3 = true;
var keyPPress = false;
var semiCircle;
var inclinaisonCircle = ['80px 80px 0 0', '0 80px 80px 0', '0 0 80px 80px', '80px 0 0 80px',]
var widthCircle = ['160px', '80px', '160px', '80px']
var heightCircle = ['80px', '160px', '80px', '160px']
var i = 0;
var maxCircle = 5;
var circleList = [];
var keyList6 = ['p', 'P', 'q', 'Q', 'g', 'G', 'd', 'D'];

document.addEventListener('keydown', function (event) {
    if (keyList6.includes(event.key)) {
        keyPPress = true;
        if (startCreation3 == true) {
            semiCircle = document.createElement('div');
            semiCircle.classList.add('semi-circle');
            pX = randomPosition(min, screenWidth);
            pY = randomPosition(min, screenHeight);
            semiCircle.style.backgroundColor = "black";
            semiCircle.style.left = pX + "px";
            semiCircle.style.top = pY + "px";
            semiCircle.style.width = 80 + 'px';
            semiCircle.style.height = 80 + 'px';


            document.body.appendChild(semiCircle);
            circleList.push(semiCircle);
            startCreation3 = false;

        }

        if (circleList.length > maxCircle) {
            var firstCircle = circleList.shift();
            firstCircle.style.opacity = "0";

            setTimeout(function () {
                document.body.removeChild(firstCircle);
            }, 1000);
        }
    }

});
document.addEventListener('keyup', function (event) {
    if (keyList6.includes(event.key)) {
        semiCircle.style.borderRadius = inclinaisonCircle[i];
        semiCircle.style.width = widthCircle[i];
        semiCircle.style.height = heightCircle[i];
        i += 1;
        if (i == 4) {
            i = 0;
        }
        keyPPress = false;
        startCreation3 = true;
    }
});



//--------------------------------------------------------Touche B A U H S----------------------------------------//
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'b' || event.key === 'B') {
            keyUPress = true;
            var letterB = document.getElementById("letterB");
            letterB.style.opacity = '1';

        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'b' || event.key === 'B') {
            keyUPress = false;
            var letterB = document.getElementById("letterB");
            letterB.style.opacity = '0';
        }
    });

    function getOpacity() {
        var letterB = document.getElementById('letterB');
        var currentOpacity = parseFloat(window.getComputedStyle(letterB).opacity);

        // console.log('Current Opacity:', currentOpacity);

        if (currentOpacity < 0.05) {
            pX = randomPosition(min, screenWidth);
            letterB.style.left = pX + 'px';
        }
    }
    // Vérifie l'opacité toutes les 1000 millisecondes (1 seconde)
    var opacityInterval = setInterval(getOpacity, 1000);
});

/////////A
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a' || event.key === 'A') {
            var letterA = document.getElementById("letterA");
            letterA.style.opacity = '1';

        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'a' || event.key === 'A') {
            var letterA = document.getElementById("letterA");
            letterA.style.opacity = '0';
        }
    });

    function getOpacity() {
        var letterA = document.getElementById('letterA');
        var currentOpacity = parseFloat(window.getComputedStyle(letterA).opacity);

        // console.log('Current Opacity:', currentOpacity);

        if (currentOpacity < 0.02) {
            pX = randomPosition(min, screenWidth);
            letterA.style.left = pX + 'px';
        }
    }
    // Vérifie l'opacité toutes les 1000 millisecondes (1 seconde)
    var opacityInterval = setInterval(getOpacity, 1000);
});

////U
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'u' || event.key === 'U') {
            var letterU = document.getElementById("letterU");
            letterU.style.opacity = '1';

        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'u' || event.key === 'U') {
            var letterU = document.getElementById("letterU");
            letterU.style.opacity = '0';
        }
    });

    function getOpacity() {
        var letterU = document.getElementById('letterU');
        var currentOpacity = parseFloat(window.getComputedStyle(letterU).opacity);

        // console.log('Current Opacity:', currentOpacity);

        if (currentOpacity < 0.02) {
            pX = randomPosition(min, screenWidth);
            letterU.style.left = pX + 'px';
        }
    }
    // Vérifie l'opacité toutes les 1000 millisecondes (1 seconde)
    var opacityInterval = setInterval(getOpacity, 1000);
});


////S
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('keydown', function (event) {
        if (event.key === 's' || event.key === 'S') {
            var letterS = document.getElementById("letterS");
            letterS.style.opacity = '1';

        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 's' || event.key === 'S') {
            var letterS = document.getElementById("letterS");
            letterS.style.opacity = '0';
        }
    });

    function getOpacity() {
        var letterS = document.getElementById('letterS');
        var currentOpacity = parseFloat(window.getComputedStyle(letterS).opacity);

        //  console.log('Current Opacity:', currentOpacity);

        if (currentOpacity < 0.02) {
            pX = randomPosition(min, screenWidth);
            letterS.style.left = pX + 'px';
        }
    }
    // Vérifie l'opacité toutes les 1000 millisecondes (1 seconde)
    var opacityInterval = setInterval(getOpacity, 1000);
});


////H
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'h' || event.key === 'H') {
            var letterH = document.getElementById("letterH");
            letterH.style.opacity = '1';

        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'h' || event.key === 'H') {
            var letterH = document.getElementById("letterH");
            letterH.style.opacity = '0';
        }
    });

    function getOpacity() {
        var letterH = document.getElementById('letterH');
        var currentOpacity = parseFloat(window.getComputedStyle(letterH).opacity);

        //  console.log('Current Opacity:', currentOpacity);

        if (currentOpacity < 0.02) {
            pX = randomPosition(min, screenWidth);
            letterH.style.left = pX + 'px';
        }
    }
    // Vérifie l'opacité toutes les 1000 millisecondes (1 seconde)
    var opacityInterval = setInterval(getOpacity, 1000);
});

////K
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'k' || event.key === 'K') {
            var letterK = document.getElementById("letterK");
            letterK.style.opacity = '1';

        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'k' || event.key === 'K') {
            var letterK = document.getElementById("letterK");
            letterK.style.opacity = '0';
        }
    });

    function getOpacity() {
        var letterK = document.getElementById('letterK');
        var currentOpacity = parseFloat(window.getComputedStyle(letterK).opacity);

        //  console.log('Current Opacity:', currentOpacity);

        if (currentOpacity < 0.02) {
            pX = randomPosition(min, screenWidth);
            letterK.style.left = pX + 'px';
        }
    }
    // Vérifie l'opacité toutes les 1000 millisecondes (1 seconde)
    var opacityInterval = setInterval(getOpacity, 1000);
});


////V
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'v' || event.key === 'V') {
            var letterV = document.getElementById("letterV");
            letterV.style.opacity = '1';

        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'v' || event.key === 'V') {
            var letterV = document.getElementById("letterV");
            letterV.style.opacity = '0';
        }
    });

    function getOpacity() {
        var letterV = document.getElementById('letterV');
        var currentOpacity = parseFloat(window.getComputedStyle(letterV).opacity);

        //  console.log('Current Opacity:', currentOpacity);

        if (currentOpacity < 0.02) {
            pX = randomPosition(min, screenWidth);
            letterV.style.left = pX + 'px';
        }
    }
    // Vérifie l'opacité toutes les 1000 millisecondes (1 seconde)
    var opacityInterval = setInterval(getOpacity, 1000);
});
