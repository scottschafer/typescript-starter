/**
 * A race component. Races racers against each other.
 * @param {*} racers 
 */
function Race(racers) {
  
  var FINISH_LINE = 30;
  var METERS_TO_PIXELS = 20;
  var INTERVAL_MS = 10;
  
  /**
   * Reset the racers to their starting position
   */
  this.reset = function() {
    this.stop();
    $('#winner').html('');
    var racerHtml = '';
    racers.forEach(function(racer) {
      racer.reset();
      racerHtml += racer.getHtml();
    });
    $('#race').html(racerHtml);
  }

  /**
   * Start the race
   */
  this.start = function() {
    this.reset();
    var self = this;
    this.runningInterval = setInterval(
      function() {
        var winner = self.runForSeconds(INTERVAL_MS / 1000);
        // if there's a winner, stop the race
        if (winner) {
          self.stop();
          self.setWinner(winner);
        }
      }, INTERVAL_MS);
  }

  /**
   * Stop the race
   */
  this.stop = function() {
    if (this.runningInterval) {
      clearInterval(this.runningInterval);
      this.runningInterval = null;
    }
  }

  /**
   * race for 'seconds', returning the winning racer if they are past the finish line
   */
  this.runForSeconds = function(seconds) {
    var winner;

    racers.forEach(function(racer) {
      // let the racer race
      racer.race(seconds);
      // position the racer
      $('#' + racer.getId()).css('left', racer.getDistance() * METERS_TO_PIXELS + 'px');

      // if past the finish line, then record the winner
      if (racer.getDistance() > FINISH_LINE) {
        if ((winner && racer.getDistance() > winner.getDistance()) || ! winner) {
          winner = racer;
        }
      }
    });
    return winner;
  }

  /**
   * Set the winner of the race
   * @param {*} winner 
   */
  this.setWinner = function (winner) {
    $('#winner').html('Winner: ' + winner.name);
  }

}