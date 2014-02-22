/* ---------------
 * PAGES
 * --------------- *//*
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
*//* ---------------
 * SIDEBAR
 * --------------- */function smooth_scroll(e,t){$(e).bind("click",function(e){e.preventDefault();$("html, body").animate({scrollTop:$(t).offset().top},500)})}$(document).ready(function(){$(".sidebar-link").bind("click",function(e){e.preventDefault();$(this).find("span").toggleClass("icon-menu icon-close");$(".sidebar").toggleClass("visible");$(".site-navbar").toggleClass("visible moved-right");$(".site-content").toggleClass("moved-right");$(".panel").toggleClass("moved-right")})});$(document).ready(function(){$("*[data-open-panel]").bind("click",function(e){e.preventDefault();var t=$("#"+$(this).attr("data-open-panel")),n=$(window).height()-$(".site-navbar").innerHeight();if(!t.hasClass("visible")){$(".panel.visible").length>0&&$(".panel.visible").removeClass("visible");t.addClass("visible");$(".site-navbar").addClass("visible move-bottom")}else{t.removeClass("visible");$(".site-navbar").removeClass("visible move-bottom")}})});$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>10&&$(window).scrollTop()<100?$(".site-navbar").addClass("hidden"):$(window).scrollTop()===0&&$(".site-navbar").removeClass("hidden")})});$(document).ready(function(){smooth_scroll(".scroll-down-link a","#project-content")});