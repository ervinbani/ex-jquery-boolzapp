

$(document).ready(function(){


  var messaggio=$('#btn-right');
  var input=$('#msgwriter');
      messaggio.click(function(){
        $('.right-container').append("<div class='greentext'>"
        + input.val() + "</div>"+"<div class='clear'>"+ "</div>");

      $('.right-container').append("<div class='whitetext'>"
         + "Ok" + "</div>");
      input.val("");



  });
  var clearDiv = '<div class="clear"></div>',
    messageTagOpen = '<div class="greentext">',
    messageTagClose = '</div>',
    spanTimeOpen = '<span class="message-time">',
    spanTimeClose = '</span>';
  $('.msgwriter').keypress(function(e) {
		if (e.which == 13) {
			var thisInput = $(this),
			newMessage = thisInput.val(),
			now = new Date();


        //$('.left-container').children('.contact').adclass('active');
        $('.contact').addClass('active');

        //var activeContact = $('.contact.active');
      if (newMessage) {
            //now i can append to the messages
              $('.contact').children('.msg-container').append(
              messageTagOpen + newMessage + spanTimeOpen + now.getHours() + ':' + now.getMinutes() + spanTimeClose + messageTagClose + clearDiv
            );
            $('.contact').children('.msg-container').append("<div class='whitetext'>"
               + "Ok" + "</div>");

            thisInput.val('');

            $('.msg-container').scrollTop(messagesContainer[i].scrollHeight)
      }

      thisInput.val('');



    }
	});

  //var cont=$('.contact');

  $('.contact').click(function(){

      $('.friends-img').attr("src", $(this).children('.contact-img').children('.contact-image').attr("src"));

      $('.Contatto').text($(this).children('.info-container').children('.contact-name').text());

      $(this).children('.msg-container').show();
      $('.contact').not($(this)).children('.msg-container').hide();


  });


  //istruzioni per cercare tra i contatti
  var searchinput=$('#leftinput');
    searchinput.keyup(function(){

      $('.contact').each(function(){
            var nome=$(this).children('.info-container').children('.contact-name').text();
            nome=nome.toLowerCase();

              if(!nome.includes(searchinput.val().toLowerCase())){
                $(this).hide();
              }


              else{
                $(this).show();
              }
          });

});
});
