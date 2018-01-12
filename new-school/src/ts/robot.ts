import { IRacer } from './iRacer';

export class Robot implements IRacer {

  private static nextId:number = 1;
  readonly id: string = 'idRobot' + (Robot.nextId++);
  private _distance: number = 0;
  private _speed: number = 0;
  
  constructor(readonly name: string,
    readonly accelerationMetersPerSec: number) {
  }

  get html():string {
    const template =
      `<div id="{{ID}}" class="racer robot">
        <h1>{{NAME}}</h1>
        <img src="{{IMAGE_URL}}">
      </div>`;

    return template
      .replace('{{ID}}', this.id)
      .replace('{{NAME}}', this.name)
      .replace('{{IMAGE_URL}}', "https://image.freepik.com/free-vector/coloured-robot-design_1148-9.jpg");
  }

  reset():void {
    this._distance = this._speed = 0;
  }

  // race for a certain number of seconds
  race(seconds:number):void {
    // increase the speed
    this._speed = this._speed + this.accelerationMetersPerSec * seconds;
    this._distance += this._speed * seconds;
  }

  get distance():number {
    return this._distance;
  }
}