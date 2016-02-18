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