$(document).ready(function() {
$(".img") .click(function(){
    $(".par").toggle();
});
$(".imag") .click(function(){
    $(".pr").toggle();
});
$(".i") .click(function(){
    $(".pa").toggle();
});


    $(".img").hover(function () {
        $(this).find(".line").toggle();
    })



$(".button").click(function(event){
       
       var user =document.getElementById('input').value;
       alert(user + "Hi we've recieved your message,thank you for contacting us");

       });


    })
