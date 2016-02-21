$(document).ready(function() {
	
	// scrolling down from top makes scroll-to-top arrow appear
	var $scrollArrow = $(".scrollToTop");
	$(window).on("scroll", function() {
		if ($("body").scrollTop() > 600 || $("html").scrollTop() > 600) {
			$scrollArrow.fadeIn(400);
		} else {
			$scrollArrow.fadeOut(400);
		}
	});
	
	// click activates scroll to top function
	$scrollArrow.on("click", function() {
		$("body").animate({scrollTop: 0});
		$("html").animate({scrollTop: 0});
	});

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

	// change form input fields to white on focus
	$("input").on("focus", function() {
		$(this).css("background-color", "white");
	});
	$("textarea").on("focus", function() {
		$(this).css("background-color", "white");
	});

	// change color of form button on hover, mousedown, mouseup
	$("button").hover(
		function() {
			$(this).css("background-color", "#e77555");
		}, function() {
			$(this).css("background-color", "#e1532b");
		})
	.mousedown(function() {
		$(this).css("background-color", "#bc3e1b");
	})
	.mouseup(function() {
		$(this).css("background-color", "#e1532b");
	});
});