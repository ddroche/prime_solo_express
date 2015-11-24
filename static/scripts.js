$.ajax({
  method: 'GET',
  url: '/balance',
}).done(function(data) {
    $(document).ready(function() {
      $('.balance').html(data);
    });
  }
);

$('.wrapper').on('click', '.balanceBtn', function() {
  $('#balance').animate({'font-size': '4em'}, 1000, function() {
    $.ajax({
      method: 'GET',
      url: '/balance',
    }).done(function(data) {
      $('.balance').html(data);
    });
  }).animate({'font-size': '1em'}, 1000);
});
