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
    const player = new Player(0, -70);
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
      new Platform(-35.0, 99.0, 1000.0, 50.0, "rgb(128, 128, 128)", "platform"),
new Platform(412.0, 13.5, 157.0, 4.0, "rgb(128, 128, 128)", "platform"),
new Platform(945.0, -318.5, 20.0, 423.0, "rgb(128, 128, 128)", "platform"),
new Platform(461.0, -318.5, 495.0, 22.0, "rgb(128, 128, 128)", "platform"),
new Platform(421.0, -167.5, 524.0, 4.0, "rgb(128, 128, 128)", "platform"),
new Platform(-35.0, -622.5, 15.0, 750.0, "rgb(128, 128, 128)", "platform"),
new Platform(-34.0, -622.5, 1750.0, 22.0, "rgb(128, 128, 128)", "platform"),
new Platform(953.0, -318.5, 755.0, 23.0, "rgb(128, 128, 128)", "platform"),
new Platform(1701.0, -622.5, 12.0, 327.0, "rgb(128, 128, 128)", "platform"),
new Platform(-25.0, -276.5, 346.0, 18.0, "rgb(128, 128, 128)", "platform"),
new Platform(180.0, -92.5, 137.0, 5.0, "rgb(128, 128, 128)", "platform"),


      




    ];
    for (const platform of platforms) {
      this.addGameObject(platform);
    }

    // Create enemies and add them to the game
    this.addGameObject(new Enemy(-25, this.canvas.height - 100, 100, 50));

    // Create collectibles and add them to the game
    this.addGameObject(new Collectible(250, this.canvas.height - 100, 20, 20));
    this.addGameObject(new Collectible(450, this.canvas.height - 100, 20, 20));
    this.addGameObject(new Collectible(650, this.canvas.height - 100, 20, 20));
    this.addGameObject(new Collectible(850, this.canvas.height - 100, 20, 20));
    this.addGameObject(new Collectible(1050, this.canvas.height - 100, 20, 20));
    this.addGameObject(new Collectible(1250, this.canvas.height - 100, 20, 20));
    this.addGameObject(new Collectible(1450, this.canvas.height - 100, 20, 20));
    this.addGameObject(new Collectible(1650, this.canvas.height - 100, 20, 20));
  }
  
}

// Export the Level class as the default export of this module
export default Level;
