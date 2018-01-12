export interface IRacer {
  html:string;
  distance:number;
  id: string;
  reset():void;
  race(seconds:number):void; 
}