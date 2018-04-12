

$(document).ready(function(){

    var cont=$('.contact');
    cont.each(function(){

    $(this).click(function(){
    $('.friends-img').attr("src", $(this).children('.contact-img').children('.contact-image').attr("src"));

    $('.Contatto').text($(this).children('.info-container').children('.contact-name').text());

});
  });
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
  $('#msgwriter').keypress(function(e) {
		if (e.which == 13) {
			var thisInput = $(this),
			newMessage = thisInput.val(),
			now = new Date();

			if (newMessage) {
				//now i can append to the messages
				var footerCnt = thisInput.parent(),
				rightContainer = footerCnt.parent()
				messagesContainer = rightContainer.children('.right-messages');

				  $('.right-container').append(
					messageTagOpen + newMessage + spanTimeOpen + now.getHours() + ':' + now.getMinutes() + spanTimeClose + messageTagClose + clearDiv
				);
        $('.right-container').append("<div class='whitetext'>"
           + "Ok" + "</div>");

				thisInput.val('');

				messagesContainer.scrollTop(messagesContainer[0].scrollHeight)
			}
		}
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
