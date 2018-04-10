$(document).ready(function(){

  var cont=$('.left-container');
  cont.click(function(){
    $(this).children('.friends-img').attr("src",$('.contact-image').attr("src"));
    $(this).children('.Contatto').text($('.contact-name').text());

  });
  var messaggio=$('#btn-right');
  var input=$('#msgwriter');
  messaggio.click(function(){
        $('.right-container').append("<div class='greentext'>"
      + input.val() + "</div>");
     $('.right-container').append("<div class='whitetext'>"
    + "Ok" + "</div>");



  });
  });
