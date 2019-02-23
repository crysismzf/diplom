$(".text_for_header").hide();
$("nav").hide();
$(function(e) {
	$(".text_for_header").fadeIn(3000);
	$("nav").fadeIn(3000);
    // $("nav").mouseout(MouserOverNav);
});

// function MouserOverNav() {
// 	var el = this;
// 	if (el.id!==undefined) {
//         $(el).css("width","20%")
// 	} else {
//         $(el).css("width","20%")
// 	}
// };