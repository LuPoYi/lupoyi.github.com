jQuery(function($){
  $('article img').mouseover(function(){
    $(this).css("max-width","none");
  }).mouseout(function() {
    $(this).css("max-width","100%");
  })
})