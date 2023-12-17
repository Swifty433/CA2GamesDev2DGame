// Import the GameObject class from the 'engine' directory
import GameObject from '../engine/gameobject.js';

// Import the Renderer class from the 'engine' directory
import Renderer from '../engine/renderer.js';

// Import the Physics class from the 'engine' directory
import Physics from '../engine/physics.js';

// Import the Images object from the 'engine' directory. This object contains all the game's image resources
import {Images} from '../engine/resources.js';

// Import the Player and Platform classes from the current directory
import Player from './player.js';

// import Platform from './platform.js';
import Platform from './platform.js';

class Enemy extends GameObject {
  constructor(x, y) {
    super(x, y);

    // Adding components and initializing properties
    this.addComponent(new Renderer('green', 25, 25, Images.enemy));
    this.addComponent(new Physics({ x: 50, y: 0 }, { x: 0, y: 0 }));

    // Additional properties for timer-based movement
    this.totalTimeElapsed = 0; // Property to track total elapsed time
    this.directionInterval = 2; // Set the interval time in seconds
    this.movementDuration = 1; // Set the movement duration in seconds
    this.direction = 1; // Direction flag: 1 for right, -1 for left
  }

  update(deltaTime) {
    const physics = this.getComponent(Physics);
    const renderer = this.getComponent(Renderer);

    // Incrementing the total elapsed time
    this.totalTimeElapsed += deltaTime;

    if (this.totalTimeElapsed <= this.directionInterval) {
      // move right for the specified duration
      if (this.totalTimeElapsed <= this.movementDuration) {
        physics.velocity.x = 2; // velocity
        renderer.gameObject.direction = 1;
      } else {
        // Stop moving after the specified duration
        physics.velocity.x = 0;
      }
    } else if (this.totalTimeElapsed > this.directionInterval && this.totalTimeElapsed <= this.directionInterval * 2) {
      // Move left for the specified duration
      if (this.totalTimeElapsed <= this.directionInterval + this.movementDuration) {
        physics.velocity.x = -2; // Velocity
        renderer.gameObject.direction = -1;
      } else {
        // Stop moving after the specified duration
        physics.velocity.x = 0;
      }
    } else {
      // repeats cycle after the specified duration finishes
      this.totalTimeElapsed = 0;
    }

    // Check collision with platforms
    const platforms = this.game.gameObjects.filter(obj => obj instanceof Platform);
    for (const platform of platforms) {
      if (physics.isColliding(platform.getComponent(Physics))) {
        // Handle collision with the platform

        // If the enemy is moving downwards, stop its downward movement and place it on the platform
        if (physics.velocity.y > 0) {
          physics.velocity.y = 0;
          this.y = platform.y - renderer.height; // Position the enemy just above the platform
          physics.isOnGround = true; // Assuming a flag to indicate the enemy is on the ground
        }
      }
    }

    super.update(deltaTime);
  }
}

export default Enemy;