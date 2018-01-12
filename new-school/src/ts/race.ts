import { IRacer } from './iRacer';

export class Race {

  private static readonly FINISH_LINE = 60;
  private static readonly METERS_TO_PIXELS = 20;
  private static readonly INTERVAL_MS = 10;
  private runningInterval: number;

  constructor(private readonly racers:Array<IRacer>) {
    this.reset();
  }

  /**
   * Start the race
   */
  public start() {
    this.reset();

    this.runningInterval = window.setInterval(() => {
      let winner: IRacer = this.runForSeconds(Race.INTERVAL_MS / 1000);
      // if there's a winner, stop the race
      if (winner) {
        this.stop();
        this.setWinner(winner);
      }
    }, Race.INTERVAL_MS);
  }

  /**
   * Stop the race
   */
  public stop() {
    if (this.runningInterval) {
      clearInterval(this.runningInterval);
      this.runningInterval = null;
    }
  }

  /**
   * race for 'seconds', returning the winning racer if they are past the finish line
   */
  private runForSeconds(seconds:number) {
    var winner;

    this.racers.forEach((racer:IRacer) => {
      // let the racer race
      racer.race(seconds);
      // position the racer
      $('#' + racer.id).css('left', racer.distance * Race.METERS_TO_PIXELS + 'px');

      // if past the finish line, then record the winner
      if (racer.distance > Race.FINISH_LINE) {
        if ((winner && racer.distance > winner.distance) || ! winner) {
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
  private setWinner(winner:IRacer) {
    $('#winner').html('Winner: ' + winner.name);
  }

  /**
   * Reset the racers to their starting position
   */
  private reset() {
    this.stop();
    $('#winner').html('');
    var racerHtml = '';
    this.racers.forEach((racer) => {
      racer.reset();
      racerHtml += racer.html;
    });
    $('#race').html(racerHtml);
  }

}