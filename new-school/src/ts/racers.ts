import { IRacer } from './iRacer';
import { Horse } from './horse';

export const racers: Array<IRacer> = [
  
  new Horse("Trigger",
    10,
    "https://www.purinamills.com/2.purinamills.com/media/Images/MasterBrand/Lifestages/horse-special-needs.png?ext=.png",
    3,
    7),

  new Horse("Mr. Ed",
    11,
    "https://www.stonehorses.com/media/menu/modelhorse.jpg",
    1.5,
    15),

  new Horse("Slowpoke",
    12,
    "http://www.freepngimg.com/download/horse/3-2-horse-png-7.png",
    1.2,
    3)
];
