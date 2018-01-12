export interface IRacer {
  html:string;
  distance:number;
  id: string;
  name: string;
  reset():void;
  race(seconds:number):void; 
}