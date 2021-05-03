$(document).ready(function () {
    $(".next").click(function () {
        var currentSlide = $(".current")
        var nextSlide = currentSlide.next()

        if (nextSlide.length == 0) {
            nextSlide = $(".container div:first")
        }
        currentSlide.removeClass("current").addClass("previous")
        nextSlide.addClass("current").removeClass("previous")

    })
    $(".prev").click(function () {
        var currentSlide = $(".current")
        var prevSlide = currentSlide.prev()

        if (prevSlide.length == 0) {
            prevSlide = $(".container div:last")
        }
        prevSlide.addClass("current").removeClass("previous")
        currentSlide.removeClass("current").addClass("previous")


    })
})