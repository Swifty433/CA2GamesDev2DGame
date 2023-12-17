// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
import Enemy from './enemy.js';
import PlayerUI from './playerUI.js';
import Platform from './platform.js';
import Collectible from './collectible.js';
import { Images } from '../engine/resources.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {
  
  // Define the constructor for this class, which takes one argument for the canvas ID
  constructor(canvasId) {
    // Call the constructor of the superclass (Game) with the canvas ID

    //this.addComponent(new Animation());
    //this.getComponent(Animation).addAnimation([Images.coin1,Images.coin2,Images.coin3,Images.coin4,Images.coin5]);

    super(canvasId);

    // Create a player object and add it to the game
    const player = new Player(871, -23);
    this.addGameObject(player);
    
    // Add the player UI object to the game
    this.addGameObject(new PlayerUI(10, 10));

    // Set the game's camera target to the player
    this.camera.target = player;

    // Create platforms and add them to the game
    const platforms = [
      new Platform(2306, -545, 105, 171, "rgb(255,255,255)", "platform"),
      new Platform(2407, -814, 11, 449, "rgb(255,255,255)", "platform"),
      new Platform(945.0, -388.5, 1469.0, 24.5, "rgb(255,255,255)", "platform"),
      new Platform(446.0, -401.5, 53.0, 10.0, "rgb(255,255,255)", "platform"),
      new Platform(277.0, -353.5, 87.0, 15.0, "rgb(255,255,255)", "platform"),
      new Platform(139.0, -276.5, 94.0, 13.0, "rgb(255,255,255)", "platform"),
      new Platform(-35.0, -182.5, 100.0, 313.0, "rgb(255,255,255)", "platform"),
      new Platform(57.0, -101.5, 237.0, 199.0, "rgb(255,255,255)", "platform"),
      new Platform(-37.0, 94.0, 995.0, 50.0, "rgb(255,255,255)", "platform"),
      new Platform(46.0, -138.5, 17.0, 193.0, "rgb(255,255,255)", "platform"),
      new Platform(267.0, 1.5, 191.0, 100.0, "rgb(255,255,255)", "platform"),
      new Platform(840.0, 22.5, 100.0, 100.0, "rgb(255,255,255)", "platform"),
      new Platform(936.0, -388.5, 23.0, 531.0, "rgb(255,255,255)", "platform"),
      new Platform(-37.0, -622.5, 15.0, 750.0, "rgb(255,255,255)", "platform"),
      new Platform(2270, -723, 77, 13, "rgb(255,255,255)", "platform"),
      new Platform(747, -822, 1334, 22, "rgb(255,255,255)", "platform"),
      new Platform(747, -1476, 10, 676, "rgb(255,255,255)", "platform"),
      new Platform(2073, -615, 107, 15, "rgb(255,255,255)", "platform"),
      new Platform(-34.0, -622.5, 2113.0, 22.0, "rgb(255,255,255)", "platform"),
      new Platform(2063, -822, 17, 221, "rgb(255,255,255)", "platform"),
      new Platform(2214, -470, 100, 100, "rgb(255,255,255)", "platform"),
      new Platform(1720, -912, 74, 91, "rgb(255,255,255)", "platform"),
      new Platform(1521, -1018, 82, 18, "rgb(255,255,255)", "platform"),
      new Platform(1065, -1019, 100, 22, "rgb(255,255,255)", "platform"),
      new Platform(847, -1118, 100, 17, "rgb(255,255,255)", "platform"),
      new Platform(1102, -1211, 100, 15, "rgb(255,255,255)", "platform"),
      new Platform(813.0, -309.5, 126.0, 13.0, "rgb(255,255,255)", "platform"),
      new Platform(1460, -1239, 100, 16, "rgb(255,255,255)", "platform"),
      new Platform(2408, -1274, 9, 500, "rgb(255,255,255)", "platform"),
      new Platform(750, -1476, 2033, 19, "rgb(255,255,255)", "platform"),
      new Platform(2752, -1467, 31, 213, "rgb(255,255,255)", "platform"),
      new Platform(2412, -1273, 366, 21, "rgb(255,255,255)", "platform"),
      new Platform(1804, -1279, 100, 21, "rgb(255,255,255)", "platform"),
      new Platform(2208, -1274, 213, 21, "rgb(255,255,255)", "platform"),
    ]
    for (const platform of platforms) {
      this.addGameObject(platform);
    }

    // Create enemies and add them to the game
    this.addGameObject(new Enemy(490,50));
    this.addGameObject(new Enemy(1086,-445));
    this.addGameObject(new Enemy(782,-871));
    this.addGameObject(new Enemy(2535,-1406));

    // Create collectibles and add them to the game
    this.addGameObject(new Collectible(650,50, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(0,-225, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(175,-312, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(315,-400, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(650,-200, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(680,-500, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(1730,-430, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(2295,-770, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(800,-880, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(2111,-1124, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(1500,-1282, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(1841,-1398, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(2650,-1339, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(885,-1168, 20, 20,Images.coin1));
    this.addGameObject(new Collectible(1685,-859, 20, 20,Images.coin1));
  }
  
}

// Export the Level class as the default export of this module
export default Level;
