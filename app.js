$(() => {
  
  $('.top h1').text('Traversing is fun!');
  $('#list').children().text('hey');
  $('.element').children().addClass('hidden');

  $('.change-show').click(() => {
    $('.show').toggleClass('hidden');
  });

  $('..add-item').click(() => {
    $('#list').append('<li>New Item!</li>');
  });

});
