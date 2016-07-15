// Display Search Form
$('.submit').click(function(event) {
  
  $(this).toggleClass('active');

    if ($(window).width() <= 1080) {
        event.preventDefault();
        $('.search-form-toggle').toggle();
        $('.input-toggle').focus();
       
        $('.submit-toggle').click(function(event) {
            event.preventDefault();
        });
    }
});


// Toggling Main-Nav on Desctop Size
 $('.js-first-opened').click(function(event) {
     event.preventDefault();
     var target = $(event.target);
     $('.js-second-opened').removeClass('active').find('.sub-nav').slideUp();
     if (target.is($('.js-first-opened > a'))) {
         $(this).toggleClass('active').find('.sub-nav').slideToggle();
     }
 });

 $('.js-second-opened').click(function(event) {
     event.preventDefault();
     var target = $(event.target);
     $('.js-first-opened').removeClass('active').find('.sub-nav').slideUp();
     if (target.is($('.js-second-opened > a'))) {
         $(this).toggleClass('active').find('.sub-nav').slideToggle();
     }

 });

 $(document).click(function(event) {
     if ($(event.target).closest(".js-first-opened, .js-second-opened").length) return;
     $('.js-second-opened, .js-first-opened').removeClass('active').find('.sub-nav').hide();
     event.stopPropagation();
 });


// Toggling Main-Nav on Mobile Size
	$('.gamburger-toggle-nav').click(function() {

    $('.search-form-toggle').hide();
    $('.submit').removeClass('active');

		$(this).toggleClass('active');
    if ($(window).width() <= 900) {

      $('.microsoft-header-nav').slideToggle();

      $('.sub-nav > li').click(function(event) {
          var target = $(event.target);
          if (target.is($('.sub-nav > li > a'))) {
              $(this).find('.sub-sub-nav').toggle();
              $(this).toggleClass('open-point');

          }
      });
      $(document).click(function(event) {
      	if ($(window).width() <= 900) {
              if ($(event.target).closest('.microsoft-header-nav, .gamburger-toggle-nav, .js-first-opened, .js-second-opened').length) return;
              $('.microsoft-header-nav').hide('slow');
              $('.gamburger-toggle-nav').removeClass('active');
              event.stopPropagation();
            }
      });
    }
  });
	
// Display block/none Main-Nav and Search Form menu after Window resizing
$(window).resize(function() {
    if ($(window).width() > 900) {
        $('.microsoft-header-nav').css('display', 'block');
    }
    if ($(window).width() < 900) {
        $('.microsoft-header-nav').css('display', 'none');
    }
    if ($(window).width() >=1079) {
        $('.search-form-toggle').css('display', 'none');
        $('.submit').removeClass('active');
    }
});