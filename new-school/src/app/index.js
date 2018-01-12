$( document ).ready(function() {
  var race = new Race(racers);
  race.reset();

  $('#btnGo').click(function() {
    race.start();
  })
});


