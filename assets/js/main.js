$(document).ready(function(){
	$(".effect").boxLoader({
	    direction:"y",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "100%"
});


	$(".up i").click(scroll);

});


function scroll(){

	$("html, body").animate({
        scrollTop: $(".boxes").offset().top
    }, {
    	queue: false,
    	duration: 1000});

}