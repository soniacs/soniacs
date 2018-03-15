/* ---------------
 * SIDEBAR
 * --------------- */
$(document).ready(function() {
	$('.sidebar-link').bind('click', function(e) {
		e.preventDefault();

		// Trigger icon change
		$(this).find('span').toggleClass('icon-menu icon-close');

		// Trigger elements movement
		$('.sidebar').toggleClass('visible');
		$('.site-navbar').toggleClass('visible moved-right');
		$('.site-content').toggleClass('moved-right');
		$('.panel').toggleClass('moved-right');
		//$('.panels-container').toggleClass('moved-right');
	});
});


/* ---------------
 * PANELS
 * --------------- */
$(document).ready(function() {

	$('*[data-open-panel]').bind('click', function(e) {
		e.preventDefault();

		var panel = $('#'+$(this).attr('data-open-panel'));
		var navbarTop = $(window).height() - $('.site-navbar').innerHeight();

		//panel.css('height',windowHeight - navbarHeight);

		if(!panel.hasClass('visible')){

			if($('.panel.visible').length > 0){
				$('.panel.visible').removeClass('visible');
			}
			panel.addClass('visible');
			$('.site-navbar').addClass('visible move-bottom');

		} else {
			panel.removeClass('visible');
			$('.site-navbar').removeClass('visible move-bottom');
		}

	});
});


/* ---------------
 * SMOOTH SCROLL
 * --------------- */
$(document).ready(function() {
	$('*[data-scroll]').bind('click', function(e) {
		e.preventDefault();
		smooth_scroll($(this).attr('href'));
	});
});

function smooth_scroll(destination) {
	$('html, body').animate({
		scrollTop: $(destination).offset().top
	}, 500);
};