$( document ).ready(function() {
		var didScroll = false;

	window.onscroll = doThisStuffOnScroll;

	function doThisStuffOnScroll() {
	    didScroll = true;
	    $("span").addClass("punctuation");
	}

	setInterval(function() {
	    if(didScroll) {
	        didScroll = false;
	        $("span").removeClass("punctuation");
	    }
	}, 100);
});