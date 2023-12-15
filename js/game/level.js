// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
import Enemy from './enemy.js';
import PlayerUI from './playerUI.js';
import Platform from './platform.js';
import Collectible from './collectible.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {
  
  // Define the constructor for this class, which takes one argument for the canvas ID
  constructor(canvasId) {
    // Call the constructor of the superclass (Game) with the canvas ID
    super(canvasId);

    // Create a player object and add it to the game
    const player = new Player(0, -120);
    this.addGameObject(player);
    
    // Add the player UI object to the game
    this.addGameObject(new PlayerUI(10, 10));

    // Set the game's camera target to the player
    this.camera.target = player;

    // Define the platform's width and the gap between platforms
    const platformWidth = 2500;
    const gap = 100;

    // Create platforms and add them to the game
    const platforms = [
      new Platform(-37.0, -622.5, 15.0, 750.0, "rgb(128, 128, 128)", "platform"),
      new Platform(-34.0, -622.5, 1750.0, 22.0, "rgb(128, 128, 128)", "platform"),
      new Platform(945.0, -388.5, 1469.0, 22.0, "rgb(128, 128, 128)", "platform"),
      new Platform(936.0, -388.5, 23.0, 531.0, "rgb(128, 128, 128)", "platform"),
      new Platform(840.0, 22.5, 100, 100, "rgb(128, 128, 128)", "platform"),
      new Platform(712.0, -314.5, 238.0, 13.0, "rgb(128, 128, 128)", "platform"),
      new Platform(267.0, 1.5, 191.0, 100, "rgb(128, 128, 128)", "platform"),
      new Platform(46.0, -138.5, 17.0, 193.0, "rgb(128, 128, 128)", "platform"),
      new Platform(-37.0, 94.0, 995.0, 50.0, "rgb(128, 128, 128)", "platform"),
      new Platform(57.0, -101.5, 237.0, 199.0, "rgb(128, 128, 128)", "platform"),
      new Platform(-35.0, -182.5, 100, 313.0, "rgb(128, 128, 128)", "platform"),
      new Platform(139.0, -276.5, 94.0, 13.0, "rgb(128, 128, 128)", "platform"),
      new Platform(277.0, -353.5, 87.0, 15.0, "rgb(128, 128, 128)", "platform"),
      new Platform(446.0, -401.5, 53.0, 10.0, "rgb(128, 128, 128)", "platform"),
      
      
      

    ];
    for (const platform of platforms) {
      this.addGameObject(platform);
    }

    // Create enemies and add them to the game
    this.addGameObject(new Enemy(-25, this.canvas.height - 100, 100, 50));

    // Create collectibles and add them to the game
    this.addGameObject(new Collectible(680,0, 20, 20));
  }
  
}

// Export the Level class as the default export of this module
export default Level;
