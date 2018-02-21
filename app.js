$(function () {
    $('.top h1').text('Traversing is fun!');
    $('#list').children().text('hey');
    $('.element').children().addClass('hidden');


  $('.change-show').click(function () {
      $('.show').toggleClass('hidden');
  });

  $('.add-item').click(function () {
      $('#list').append('<li>New Item!</li>');
  });  
});