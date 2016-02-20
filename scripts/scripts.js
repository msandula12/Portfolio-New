$(document).ready(function() {
	
	// scrolling down from top makes scroll-to-top arrow appear
	var scrollArrow = $(".scrollToTop");
	$(window).scroll(function() {
		if ($("body").scrollTop() > 600 || $("html").scrollTop() > 600) {
			scrollArrow.fadeIn(400);
		} else {
			scrollArrow.fadeOut(400);
		}
	});
	
	// click activates scroll to top function
	scrollArrow.on("click", function() {
		$("body").animate({scrollTop: 0});
		$("html").animate({scrollTop: 0});
	});

	// fade in background image
	$("header").hide().fadeIn(800);

	// toggle blog archive headlines
	$("#oldEntries").on("click", function() {
		$(".archives").slideToggle();
	});

	// toggle blog one
	$("#blogOneHead").on("click", function() {
		$("#blogOne").slideToggle();
		$("#blogOneHead>span").toggle();
	});

	// toggle blog two
	$("#blogTwoHead").on("click", function() {
		$("#blogTwo").slideToggle();
		$("#blogTwoHead>span").toggle();
	});
});