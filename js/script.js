$(document).ready(function(){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	hideBlocks(timelineBlocks, offset);

	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
	/***************	show navbar in right		***************/
	$('.button-collapse').sideNav({
      edge: 'right',
    });
	/***************	slider image		***************/
	$('.slider').slider({
		full_width: true
	});

	/***************	show and hide fixed navbar		***************/
	var win_height = $(document).height();
	if (win_height == 3100) {
		$(".fix_nav").css({
			'top' : 0,
			'display' : 'block',
		});
	};
	$('.fix_nav').addClass('hide_nav');
	$(window).bind('scroll', function() {
		var bg_height = $('.fix_nav').height();
		if ($(window).scrollTop() < bg_height) {
			$('.fix_nav').addClass('hide_nav');
		}
		else {
			$('.fix_nav').removeClass('hide_nav');
		}
	});
	/***************	animation effect in first load page for body and register box		***************/

 	/* dernier nouvelle  slide*/
	$("#dernier_nouvelle").owlCarousel({
          items : 1,
          itemsDesktop:[1199,1],
          itemsDesktopSmall : [900,1],
          itemsTablet: [600,1],
          autoPlay : true,
          stopOnHover : true
     });
/* heider  slide*/
	$("#hai_slide").owlCarousel({
          items : 1,
          itemsDesktop:[1199,1],
          itemsDesktopSmall : [900,1],
          itemsTablet: [600,1],
          autoPlay : true,
          stopOnHover : true
     });
	/* sidebar slider images */

	 $("#sidebar_slide").owlCarousel({
		  items : 1,
	      itemsDesktop:[1199,1],
	      itemsDesktopSmall : [900,1],
	      itemsTablet: [600,1],
	      autoPlay : true,
	      stopOnHover : true
 	 });
 	$("#slide_news_article").owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  	});


  	/***************	dropdown button hover		***************/
	$(".dropdown-button").dropdown({
		"hover": true,
	});
	/***************	dropdown nav hover		***************/
	$(".sous_menu tbody tr td a").hover(function()
	{
		$('.dropdown-button').css('background','#fff');
	},function()
	{
		$('.dropdown-button').css('background','#fff');
	});

});
