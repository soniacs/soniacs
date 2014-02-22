/* ---------------
 * PAGES SLIDE
 * --------------- */
/*
$(document).ready(function() {

	// Set body and pages width to make slide
	var screenWidth = screen.width;
	var pages = $('.page').length;
	var bodyWidth = 100 * pages;
	var pageWidth = 100 / pages;
	resizeSlide(bodyWidth, pageWidth);

	// Set pages position
	var currentPosition = 0;
	var slideWidth = $('.page').width();
	var firstPage = $('.page').first().attr('id');
	var lastPage = $('.page').last().attr('id');
	var currentPage = firstPage;

	// Responsive
	$(window).resize(function() {
		bodyWidth = 100 * pages;
		pageWidth = 100 / pages;
		resizeSlide(bodyWidth, pageWidth);

		slideWidth = $('.page').width();
	});

	// Tell the butons what to do when clicked
	$('.pages-navigation a').bind('click', function(event) {

		event.preventDefault();

		// Determine new position
		var navLink = $(this).attr('id');
		if (currentPage != firstPage) {
			var prevPanel = $('#'+currentPage).prev().attr('id');
		}
		if (currentPage != lastPage) {
			var nextPanel = $('#'+currentPage).next().attr('id');
		}

		// Determine new position for first and last panel
		if (currentPage == firstPage) {
			currentPosition = (navLink == 'nextNav') ? currentPosition + 1 : pages - 1;
			currentPage = (navLink == 'nextNav') ? nextPanel : lastPage;
		} else if (currentPage == lastPage){
			currentPosition = (navLink == 'nextNav') ? 0 : currentPosition - 1;
			currentPage = (navLink == 'nextNav') ? firstPage : prevPanel;
		} else {
			currentPosition = (navLink == 'nextNav') ? currentPosition + 1 : currentPosition - 1;
			currentPage = (navLink == 'nextNav') ? nextPanel : prevPanel;
		}

		// Move slide
		moveSlide();
	});

	function moveSlide() {
		// Animate slide
		$('#pages-container').animate({
				'marginLeft' : slideWidth*(-currentPosition)
			}, 800);
	}

	function resizeSlide(bodyWidth, pageWidth) {
		$('#pages-container').css('width', bodyWidth+'%');
		$('.page').css('width', pageWidth+'%');
	}

});
*/

/* ---------------
 * AJAX PAGES
 * --------------- */
/*
$(document).ready(function() {

	// Preload next and after content

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
	var currentPosition = 0;

	$('.load-page').bind("click", function(e) {
		e.preventDefault();

		// Move pages
		if($(this).hasClass('next-page')){
			$('#content-container').addClass('move-left');
		} else if($(this).hasClass('previous-page')) {
			$('#content-container').addClass('move-right');
		}

		// Load content
		loadContent($(this).attr('href'));
		history.pushState(null, null, $(this).attr('href'));
		historyedited = true;
	});
}

function loadContent(url) {

	$('#site-content').empty().addClass('loading').load(url + ' #content-container', function() {
		$('#site-content').removeClass('loading');

		doPager();
		changePagination();
	});
}

function changePagination(){
	var next_page = $('#content-container').attr('data-next-page');
	var previous_page = $('#content-container').attr('data-previous-page');

	// Change Pagination URLs
	if(next_page === '') {
		$('.pagination-next').addClass('hidden');
	} else {
		$('.pagination-next').removeClass('hidden').find('a').attr('href', next_page);
	}
	if(previous_page === '') {
		$('.pagination-previous').addClass('hidden');
	} else {
		$('.pagination-previous').removeClass('hidden').find('a').attr('href', previous_page);
	}
}
*/






/* ---------------
 * NAVBAR
 * --------------- */
/*
$(document).ready(function() {

	$( window ).scroll(function() {
		if ($(window).scrollTop() > 10 && $(window).scrollTop() < 100){
			$('.site-navbar').addClass('hidden');
		} else if ($(window).scrollTop() === 0) {
			$('.site-navbar').removeClass('hidden');
		}
	});

});
*/


