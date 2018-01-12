import { IRacer } from './iRacer';

export class Horse implements IRacer {

  private static nextId:number = 1;
  readonly id: string = 'idRacer' + (Horse.nextId++);
  private _distance: number = 0;
  private _speed: number = 0;
  
  constructor(readonly name: string,
    readonly age: number,
    readonly imageUrl: string,
    readonly accelerationMetersPerSec: number,
    readonly maximumSpeedMetersPerSec: number) {
  }

  get html():string {
    const template =
      `<div id="{{ID}}" class="racer horse">
        <h1>{{NAME}}</h1>
        <img src="{{IMAGE_URL}}">
      </div>`;

    return template
      .replace('{{ID}}', this.id)
      .replace('{{NAME}}', this.name)
      .replace('{{IMAGE_URL}}', this.imageUrl);
  }

  reset():void {
    this._distance = this._speed = 0;
  }

  // race for a certain number of seconds
  race(seconds:number):void {
    // increase the speed
    this._speed = Math.min(this.maximumSpeedMetersPerSec, this._speed + this.accelerationMetersPerSec * seconds);
    this._distance += this._speed * seconds;
  }

  get distance():number {
    return this._distance;
  }
}