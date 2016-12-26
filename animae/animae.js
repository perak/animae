/*
	Animate Visible (use with animate.css)

	This function animates elements only if they are visible (in viewport).
	  1. instead "animated" add "animate" class to elements and prefix effects with "a-" (e.g. "bounce" should be "a-bounce")
	  2. call animateVisible() function when you want animation to start, but most likelly you'll call it on scroll and resize: $(window).on("scroll resize", animateVisible)
*/

this.animateVisible = function() {
	var $window = $(window);
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);
	var bgSwitcher = null;

	$(".animae").each(function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		var effects = "";
		$element.attr("class").split(" ").map(function(c) {
			if(c.indexOf("a-") == 0) {
				c = c.substring(2);
				effects += " "; 
				effects += c;
			}
		});

		//check to see if this current container is within viewport
		if(
			(element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)
		) {
			$element.addClass("animated" + effects);

			if($element.attr("data-background-image")) {
				bgSwitcher = $element;
			}

		} else {
			$element.removeClass("animated" + effects);
		}
	});

	if(bgSwitcher) {
		var oldImage = $("#background-image").last();
		var oldbg = (oldImage.css("backgroundImage") + "").replace(/['"]+/g, "");
		var newbg = (bgSwitcher.attr("data-background-image") + "").replace(/['"]+/g, "");

		if(oldImage.length && (oldbg == newbg)) {
			return;
		}

		if(!oldImage.length) {
			oldImage = $("<div></div>");
			oldImage.attr("id", "background-image");
			oldImage.addClass("remove-old-bg");
			$("body").append(oldImage);
		} else {
			oldImage.addClass("remove-old-bg");
		}

		var newImage = $("<div></div>");
		newImage.css({ display: "none", backgroundImage: bgSwitcher.attr("data-background-image") });
		newImage.attr("id", "background-image");
		oldImage.parent().append(newImage);

		newImage.fadeIn("slow", function() {
			$(".remove-old-bg").remove();
			newImage.addClass("remove-old-bg");
		});
	}
};

this.animae = function() {
	$(window).on("scroll resize", function() {
		animateVisible();
	});

	animateVisible();
}
