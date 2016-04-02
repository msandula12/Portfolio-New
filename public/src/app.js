$(document).ready(function() {
	
	// scrolling down from top makes scroll-to-top arrow appear
	$(window).on("scroll", function() {
		if ($("body").scrollTop() > 600 || $("html").scrollTop() > 600) {
			$(".scrollToTop").fadeIn(400);
		} else {
			$(".scrollToTop").fadeOut(400);
		}
	});
	
	// click activates scroll to top function
	$(".scrollToTop").on("click", function() {
		$("body").animate({scrollTop: 0});
		$("html").animate({scrollTop: 0});
	});

	// nav bar is fixed to top of page after scroll
	$(window).on("scroll", function(e) {
		if ($("body").scrollTop() > 300 || $("html").scrollTop() > 300) {
			$("#navigation").addClass("navFixed");
		} else {
			$("#navigation").removeClass("navFixed");
		}
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
		$(this).css("background-color", "#fff");
	});
	$("textarea").on("focus", function() {
		$(this).css("background-color", "#fff");
	});

	// change color of form button on hover, mousedown, mouseup
	$("button").hover(
		function() {
			$(this).css("background-color", "#e77555");
		}, function() {
			$(this).css("background-color", "#e73a30");
		})
	.mousedown(function() {
		$(this).css("background-color", "#bc3e1b");
	})
	.mouseup(function() {
		$(this).css("background-color", "#e73a30");
	});

	// blog controller for older entries
	$('.blogList').each(function(){
		var $this     = $(this),
		    $tab      = $this.find('li.active'),
		    $link     = $tab.find('a'),
		    $entry    = $($link.attr('href'));

		    $this.on('click', '.blogControl', function(e) {
		    	e.preventDefault();
		    	var $link = $(this);
		    	var id    = this.hash;

		    	if (id && !$link.is('.active')){
		    		$entry.removeClass('active');
		    		$tab.removeClass('active');

		    		$entry = $(id).addClass('active');
		    		$tab   = $link.parent().addClass('active');
		    	}
		    })
	});

	// portfolio info fades in and out when hovering over portfolio image
	$('#item1').hover(
		function(){
			$('#img1').fadeIn(600);
		}, function(){
			$('#img1').fadeOut(600);
		}
	);

	$('#item2').hover(
		function(){
			$('#img2').fadeIn(600);
		}, function(){
			$('#img2').fadeOut(600);
		}
	);

	$('#item3').hover(
		function(){
			$('#img3').fadeIn(600);
		}, function(){
			$('#img3').fadeOut(600);
		}
	);

	$('#item4').hover(
		function(){
			$('#img4').fadeIn(600);
		}, function(){
			$('#img4').fadeOut(600);
		}
	);	

});