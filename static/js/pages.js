/* ---------------
 * PROJECTS PANEL
 * --------------- */
$(document).ready(function() {
	if(window.history && history.pushState) {
		historyedited = false;
		$(window).bind('popstate', function(e) {
			if(historyedited) {
				//loadContent(location.pathname + location.search);
				loadContent(location.pathname);
			}
		});
		doPager();
	}
});

function doPager() {

	$('*[data-page]').bind('click', function(e) {
		e.preventDefault();

		// Set Container
		if($(this).attr('data-page') === 'next-page'){
			$('.site-content').after('<div id="pages-container" class="pages-container"></div>');

			// Move all to left
			$('.site-content').addClass('moved-left');
			$('.pages-container').addClass('moved-left');
			$('.home-link').addClass('hidden');
		}

		// Hide previous content
		setTimeout(function() {
			window.scrollTo(0, 0);
			$('.site-content.moved-left').remove();
			$('#pages-container').attr({
				'id':'site-content',
				'class':'site-content'});
		}, 401);

		// Load Content
		loadContent($(this).attr('href'));
		history.pushState(null, null, $(this).attr('href'));
		historyedited = true;
	});
}

function loadContent(url) {

	$('#pages-container').addClass('loading').load(url + ' #page', function() {
		//doPager();
		//changePagination();
	});
}