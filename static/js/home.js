$(document).ready(function() {

	// Scroll Animations
	$('.home-section').waypoint(function(direction) {
		if(direction === 'down') {
			//trigger_animation(this);
		}
	},{
		offset: '50%'
	}).waypoint(function(direction) {
		if(direction === 'up') {
			//trigger_animation(this);
		}
	},{
		offset: function(){
			return -$(this).height()/2;
		}
	});

	// Scroll to Animations
	$('.local-navigation a').bind('click',function(e){
		e.preventDefault();
		smooth_scroll($(this).attr('href'));
	});


	function smooth_scroll(destination){
		$('html, body').animate({
			scrollTop: $(destination).offset().top
		}, 1000);
	}

	function trigger_animation(this){
		// Animate Background Color
		var panelId = $(this).attr('id');
		$('body').removeClass().addClass('color-' + panelId);

		// Animate Image
		/*
		if($(this).hasClass('home-project')){
			$('.home-project-image.visible').removeClass('visible');
			$(this).find('.home-project-image').addClass('visible');

			//Show local navigation
			if(!$('.local-navigation').hasClass('visible')){
				$('.local-navigation').fadeIn();
			}

			// Add active class to navigation
			$('.local-navigation a.active').removeClass('active');
			$('.local-navigation a[data-linked-panel='+panelId+']').addClass('active');

		} else {
			$('.home-project-image.visible').removeClass('visible');

			// Remove local navigation
			$('.local-navigation').fadeOut();

			// Remove active class
			$('.local-navigation a.active').removeClass('active');
		}
		*/
	}


});