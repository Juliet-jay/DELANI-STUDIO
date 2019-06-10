$(document).ready(function(){
$(".img").click(function(){
    $(".par").toggle();
});
$(".imag") .click(function(){
    $(".pr").toggle();
});
$(".i") .click(function(){
    $(".pa").toggle();
});
$('#hoVer').hover(function() {
    $(this).children(".overlay").fadeToggle(1000, "linear");
    $(this).toggle(css('.'))
    $(".tExt").toggle();
    $('.line').showToggle();

   
});
$('.line').hover(function() {
  $(this).animate({
    opacity: '1'
  });
},
function() {
  $(this).animate({
    opacity: '0'
  });
});

  $('.line').hover(function(){
  	$(this).animate({
  		opacity: '0'
  	})
  })
  $("#input").submit(function(event){
    var name = $("input#name").val();
    var email =$("input#email").val();
    var textarea=$("input#message").val();
    if(name && email && message != " " ){
        alert( name + "Thankyou for contacting us,your message has been received");
    }
    else{
        alert("invalid");
    }
    event.preventDefault();
   });

  
});
