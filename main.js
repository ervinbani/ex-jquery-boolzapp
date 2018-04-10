$(document).ready(function(){
  var messaggio=$('#btn-right');
  var input=$('#msgwriter');
  messaggio.click(function(){
        $('.greentext').text(input.val());

        $('.whitetext').text("Ok", (5000));

  });
  var x=$('#contact-img').attr("src")
  console.log(x);
  var contact=$('.contact');
  contact.click(function(){
    $('#friends-img').attr("src",$('#contact-image').attr("src"));
    $('#Contatto').text($('#contact-name').text());

  })




});
