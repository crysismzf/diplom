var el;
var el_back;
var el_forwd;

$(".background_for_foto").hide();
$(".text_for_header").hide();
$("nav").hide();

$(function(e) {
	$(".text_for_header").fadeIn(2000);
	$("nav").fadeIn(2000);
	// Открытие слайдшоу
	$(".foto_portfolio").click(startSlideShow);
	// Закрытие слайдшоу
    $(document).on('click', '.background_for_foto', closeSlideShow);
    // Листает фото влево
    $(document).on('click', '.turn_back', turnBackFoto);
    // Листает фото вправо
    $(document).on('click', '.turn_forward', turnForwardFoto)

});



function startSlideShow() {
    el = $(this);
    var src = $(this).children("img").attr("src");
    $("body").prepend("<div class=\"background_for_foto\"> " +
        " <div class=\"turn_back\"> <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>" +
        " </div> <div class=\"max_foto\"> <img src="+src+"></div><div class=\"turn_forward\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>" +
        "</div></div>");
};

function closeSlideShow() {
    $(".background_for_foto").remove();
};

function turnBackFoto(event) {
    event.stopPropagation();
    el_back = $(el).prev().children("img").attr("src");
    if (el_back!==undefined) {
        el = $(el).prev();
        $(".max_foto").children().attr("src", el_back);
    } else {
        closeSlideShow();
     };
};

function turnForwardFoto(event) {
    event.stopPropagation();
    el_forwd = $(el).next().children("img").attr("src");
    if (el_back!==undefined) {
        el = $(el).next();
        $(".max_foto").children().attr("src", el_forwd);
    } else {
        closeSlideShow();
    };
};
