//background : 
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.body.style.backgroundColor = "#black";
    }, 500);


    var slider = document.getElementById("slider");
    var sliderPosition = slider.getAttribute("cx");
    var mouseDown = false;
    var lineX1 = 800;
    var lineX2 = 996;

    const elementsWith2sDuration = document.querySelectorAll('[dur="2s"]');
    const elementsWith4sDuration = document.querySelectorAll('[dur="4s"]');
    const elementsWith5sDuration = document.querySelectorAll('[dur="5s"]');
    //const animePath = document.querySelector("#animePath animateTransform");





    slider.addEventListener("mouseover", function () {
        slider.setAttribute("r", "12");
    });

    slider.addEventListener("mousedown", function () {
        mouseDown = true;
    });

    document.addEventListener("mouseup", function () {
        mouseDown = false;
    });

    document.addEventListener("mousemove", function (e) {
        if (mouseDown) {
            var mouseX = e.clientX;
            if (mouseX < lineX1) {
                slider.setAttribute("cx", lineX1);

            }
            else if (mouseX > lineX2) {
                slider.setAttribute("cx", lineX2);

            } else {
                slider.setAttribute("cx", mouseX);

            }
        } else {
            sliderPosition = slider.getAttribute("cx");
            slider.setAttribute("cx", sliderPosition);
            let vitesse = calculateDur(sliderPosition);
            elementsWith2sDuration.forEach(element => {
                element.setAttribute("dur", vitesse + "s");
            });
            elementsWith4sDuration.forEach(element => {
                element.setAttribute("dur", vitesse + "s");
            });
            elementsWith5sDuration.forEach(element => {
                element.setAttribute("dur", vitesse + "s");
            });

            //animePath.setAttribute("dur", vitesse + "s");
        


        }
    });

    slider.addEventListener("mouseleave", function () {
        slider.setAttribute("r", "8");
    });





    function calculateDur(SlidPosition) {
        let result;
        result = 20 * Math.pow(1 - (SlidPosition - 900) / 100, 2);
        return result;
    }


});
