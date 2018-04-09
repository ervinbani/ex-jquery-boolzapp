$(document).ready(function(){
  var messaggio=$('#btn-right');
  messaggio.click(function(){
    $('.greentext').text($('#msgwriter').text());
  });

});
