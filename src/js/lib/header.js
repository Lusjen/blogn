import $ from 'jquery';
$(window).scroll(function() {
  if ($(window).scrollTop() > '20') {
    $('.js-background').css({'background':'#E8E8E8'});
  }
  else{
    	$('.js-background').css({'background':'transparent'});
  };
});
