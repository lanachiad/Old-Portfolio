$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 800) {
		$('.topMenu').fadeIn();
	} else {
		$('.topMenu').fadeOut();
	} 
});