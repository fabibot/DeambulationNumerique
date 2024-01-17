document.addEventListener("DOMContentLoaded", function () {
    let contenair = document.getElementById("contenair");

    var blockTransition = document.getElementById("transition");
    var detransition = document.getElementById("deTransition");

    setTimeout(function () {
        detransition.style.width = "0%";
    }, 500);

    document.addEventListener("click", function (event) {
        mouveIcone();
    });

    document.addEventListener("keydown", function (event) {
        mouveIcone();
    });

    let menu = document.getElementById("menu");
    let iconeCategorie = document.getElementById("iconeCategorie");
    let iconeQuestion = document.getElementById("iconeQuestion");
    var explication = document.getElementById("explContenair");
    var iconePage1 = document.getElementById("iconePage1");
    var iconePage2 = document.getElementById("iconePage2");
    var iconePage3 = document.getElementById("iconePage3");
    var iconeRetour = document.getElementById("iconeRetour");

    function mouveIcone() {
        contenair.style.opacity = "0.6";
        contenair.style.top = "11%";
        contenair.style.left = "96%";
        contenair.style.width = "10%";
        contenair.style.backgroundColor = "transparent";
        menu.style.opacity = "0.8";
    }
    var menuHeight = parseFloat(window.getComputedStyle(menu).height);

    menu.addEventListener("mouseenter", function () {
        menu.style.height = menuHeight * 3 + "px";

        let questionHeight = parseFloat(window.getComputedStyle(iconeQuestion).height);
        iconeQuestion.style.top = (menuHeight * 2) - questionHeight - (questionHeight / 6) + "px";
        iconeCategorie.style.top = (menuHeight * 3) - questionHeight - (questionHeight / 3) + "px";

        setTimeout(function () {
            let currentHeight = parseFloat(window.getComputedStyle(menu).height);
            if (currentHeight > menuHeight) {
                iconeCategorie.style.opacity = "1"
                iconeQuestion.style.opacity = "1";
            }
        }, 500);

        var openExpl = false;
        iconeQuestion.addEventListener("click", function () {
            if (openExpl == false) {
                explication.style.opacity = "1";
                openExpl = true;
            } else {
                explication.style.opacity = "0";
                openExpl = false;
            }
        });

        var openCategorie = false;

        var heightCat;

        iconeCategorie.addEventListener("click", function () {


            if (openCategorie == false) {
                openCategorie = true;
                let iconeCatPosition = parseFloat(window.getComputedStyle(iconeCategorie).top);
                heightCat = parseFloat(window.getComputedStyle(menu).height);
                menu.style.height = heightCat * 2 + "px";
                iconePage1.style.top = iconeCatPosition * 1.5 + "px";
                iconePage2.style.top = iconeCatPosition * 1.85 + "px";
                iconePage3.style.top = iconeCatPosition * 2.20 + "px";
                iconeRetour.style.top = iconeCatPosition * 2.60 + "px";




                iconePage1.style.display = "block";
                iconePage2.style.display = "block";
                iconePage3.style.display = "block";
                iconeRetour.style.display = "block";


                iconePage1.addEventListener("click", function () {
                    blockTransition.style.width = "100%";
                    setTimeout(function () {
                        window.location.href = "page1.html";
                    }, 1000);
                });

                iconePage2.addEventListener("click", function () {
                    blockTransition.style.width = "100%";
                    setTimeout(function () {
                        window.location.href = "page2.html";
                    }, 1000);
                });

                iconePage3.addEventListener("click", function () {
                    blockTransition.style.width = "100%";
                    setTimeout(function () {
                        window.location.href = "page3.html";
                    }, 1000);
                });

                iconeRetour.addEventListener("click", function () {
                    blockTransition.style.width = "100%";
                    setTimeout(function () {
                        window.location.href = "gallery.html";
                    }, 1000);
                });

            } else {
                openCategorie = false;
                heightCat = menuHeight;

                menu.style.height = menuHeight * 3 + "px";
                iconePage1.style.display = "none";
                iconePage2.style.display = "none";
                iconePage3.style.display = "none";
                iconeRetour.style.display = "none";


            }
        });
    });


    menu.addEventListener("mouseleave", function () {
        let menuHeight = parseFloat(window.getComputedStyle(menu).height);
        menu.style.height = "";
        iconeQuestion.style.top = "";
        iconeCategorie.style.top = "";
        iconePage1.style.display = "none";
        iconePage2.style.display = "none";
        iconePage3.style.display = "none";
        iconePage3.style.display = "none";
        iconeRetour.style.display = "none";

        setTimeout(function () {
            let currentHeight = parseFloat(window.getComputedStyle(menu).height);
            if (currentHeight < menuHeight)
                /*   iconeCategorie.style.display = "none";
               iconeQuestion.style.display = "none";*/
                iconeQuestion.style.opacity = "0";
            iconeCategorie.style.opacity = "0";

            explication.style.opacity = "0";
        }, 300);
    });
});





