$(document).ready(function(){
  var messaggio=$('#btn-right');
  var input=$('#msgwriter');
  messaggio.click(function(){
    $('.greentext').text(input.val());
  });

});
