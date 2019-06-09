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
       
       var user =document.getElementById('name').value;
       alert("Hi", + user +  "we've recieved your message,thank you for contacting us");

       const Mailchimp = require("57ad93865f611e18fd8f6f2aa352ff87-us20");

       const mailchimp = new Mailchimp(myMailchimpAPI);
       
       mailchimp.post(`/lists/${myListId}/members`, {
         email_address: 'juliekmuthee@gmail.com',
         status: 'subscribed',
         merge_fields: {
           FNAME: 'julie254',
           EMAIL: 'juliekmuthee@gmail.com',
           COMPANY: 'xyz'
         }
       })
       .then(res => console.log(res))
       .catch(err => console.log(err))
    });

       

    })
