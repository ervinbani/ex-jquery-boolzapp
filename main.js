$(document).ready(function(){


  var i=0;

    var cont=$('.contact');
  cont.click(function(){
    $('.friends-img').removeAttr("src");
    $('.friends-img').attr("src",$('.contact-image').attr("src"));
    $('.Contatto').text($('.contact-name').text());
    i++;

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
