$(document).ready(function(){

  var contact=$('.contact');
  $(this).children().click(function(){
    $('#friends-img').attr("src",$('#contact-image').attr("src"));
    $('#Contatto').text($('#contact-name').text());

  });
  var messaggio=$('#btn-right');
  var input=$('#msgwriter');
  messaggio.click(function(){
        $('.greentext').text(input.val());

        $('.whitetext').text("Ok", (5000));

  });





});
