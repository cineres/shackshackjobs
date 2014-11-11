$(window).load(function(){
    var $container = $('.jobs');
    $container.isotope({
        filter: '*',
        animationOptions: {
        duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.filters a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
    $('.filters a').click(function(){
        if($(this).hasClass('selected')){
           $(this).removeClass('selected');
        }
        else{
            $(this).addClass('selected');
        }   
    });
    $('.position-button').click(function(){
        if($(this).hasClass('highlight')){
           $(this).removeClass('highlight');
        }
        else{
            $(this).addClass('highlight');
        }   
    });
    
$('#myCarousel').carousel({
  interval: false,
  pause: true
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});


});

