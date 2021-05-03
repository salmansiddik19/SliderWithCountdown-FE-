// var animateInterval;
// function rotateImagesForward() {

//     var oCurrentPhoto = $("#background-slideshow img.current");
//     var oNextPhoto = oCurrentPhoto.next();

//     if (oNextPhoto.length == 0) {
//         oNextPhoto = $("#background-slideshow img:first");
//     }

//     oCurrentPhoto.removeClass("current").addClass("previous");

//     oNextPhoto.css({ opacity: 0.0 }).addClass("current")
//         .animate({ opacity: 1.0 }, 500, function () {
//             oCurrentPhoto.removeClass("previous");
//         });
// }

// animateInterval = setInterval(rotateImagesForward, 5000);

$(document).ready(function () {
    $(".next").click(function () {
        var oCurrentPhoto = $("#background-slideshow img.current");
        var oNextPhoto = oCurrentPhoto.next();

        if (oNextPhoto.length == 0) {
            oNextPhoto = $("#background-slideshow img:first");
        }

        oCurrentPhoto.removeClass("current").addClass("previous");

        oNextPhoto.css({ opacity: 0.0 }).addClass("current")
            .animate({ opacity: 1.0 }, 500, function () {
                oCurrentPhoto.removeClass("previous");
            });
    })

    $(".prev").click(function () {
        var oCurrentPhoto = $("#background-slideshow img.current");
        var oPrevPhoto = oCurrentPhoto.prev();

        if (oPrevPhoto.length == 0) {
            oPrevPhoto = $("#background-slideshow img:last");
        }

        oCurrentPhoto.removeClass("current").addClass("previous");

        oPrevPhoto.css({ opacity: 0.0 }).addClass("current")
            .animate({ opacity: 1.0 }, 500, function () {
                oCurrentPhoto.removeClass("previous");
            });
    })
})