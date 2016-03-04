$(document).ready(function() {
	$('.scroll-button').click(function() {
		var divHeight = $('.header').height();
		$('body').animate({
			scrollTop: divHeight },
			600, 'linear');
	});
});