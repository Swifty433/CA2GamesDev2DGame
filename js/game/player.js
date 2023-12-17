// Importing necessary components and resources
import GameObject from '../engine/gameobject.js';
import Renderer from '../engine/renderer.js';
import Physics from '../engine/physics.js';
import Input from '../engine/input.js';
import { Images, AudioFiles } from '../engine/resources.js';
import Enemy from './enemy.js';
import Platform from './platform.js';
import Collectible from './collectible.js';
import ParticleSystem from '../engine/particleSystem.js';
import SoundManager from '../engine/soundManager.js';
import Animation from '../engine/animator.js';

// Defining a class Player that extends GameObject
class Player extends GameObject {
  // Constructor initializes the game object and add necessary components
  constructor(x, y) {
    super(x, y); // Call parent's constructor
    this.renderer = new Renderer('blue', 50, 50, Images.player); // Add renderer
    this.addComponent(this.renderer);
    this.addComponent(new Physics({ x: 50, y: 0 }, { x: 0, y: 0 },{x: 0, y: 700})); // Add physics
    this.addComponent(new Input()); // Add input for handling user input
    // Initialize all the player specific properties
    this.direction = 1;
    this.lives = 3;
    this.score = 0;
    this.isOnPlatform = false;
    this.isJumping = false;
    this.jumpForce = 400;
    this.jumpTime = 0.3;
    this.jumpTimer = 0;
    this.isInvulnerable = false;

    // Add sound manager component
    this.addComponent(new SoundManager());
    this.getComponent(SoundManager).addSound('jump', AudioFiles.jump);
    this.getComponent(SoundManager).addSound('collect', AudioFiles.collect);
    this.getComponent(SoundManager).addSound('Music', AudioFiles.music);
    this.getComponent(SoundManager).addSound('hit', AudioFiles.hit);
    // Add animation component
    this.addComponent(new Animation());
    this.getComponent(Animation).addAnimation([Images.playerIdol1, Images.playerIdol2, Images.playerIdol3, Images.playerIdol4, Images.playerIdol5, Images.playerIdol6, Images.playerIdol7, Images.playerIdol8, Images.playerIdol9, Images.playerIdol10]);
    this.getComponent(Animation).addAnimation([Images.running1, Images.running2, Images.running3, Images.running4, Images.running5, Images.running6, Images.running7, Images.running8]);
    this.getComponent(Animation).addAnimation([Images.jumping1, Images.jumping2, Images.jumping3]);
  }

  // The update function runs every frame and contains game logic
  update(deltaTime) {
    const physics = this.getComponent(Physics); // Get physics component
    const input = this.getComponent(Input); // Get input component
    const soundManager = this.getComponent(SoundManager).playSound("Music"); // Get sound manager component

    
    //Changed all input for the player controls to 'a' and 'd' keys for movement left and right and 'w' or spacebar for jumping


    // Handle player movement
    if (input.isKeyDown('KeyD')) {
      physics.velocity.x = 5;
      this.direction = -1;
    } else if (input.isKeyDown('KeyA')) {
      physics.velocity.x = -5;
      this.direction = 1;
    } else {
      physics.velocity.x = 0;

    }

    // Handle player jumping (using spacebar or 'W' key)
    if ((input.isKeyDown('Space')) || (input.isKeyDown('KeyW')) && this.isOnPlatform) {
      this.startJump();
    }

    if (this.isJumping) {
      this.updateJump(deltaTime);
    }

    // Handle collisions with collectibles
    const collectibles = this.game.gameObjects.filter((obj) => obj instanceof Collectible);
    for (const collectible of collectibles) {
      if (physics.isColliding(collectible.getComponent(Physics))) {
        this.collect(collectible);
        this.game.removeGameObject(collectible);
      }
    }
  
    // Handle collisions with enemies
    const enemies = this.game.gameObjects.filter((obj) => obj instanceof Enemy);
    for (const enemy of enemies) {
      if (physics.isColliding(enemy.getComponent(Physics))) {
        this.collidedWithEnemy();
      }
    }
  
    // Handle collisions with platforms
    this.isOnPlatform = false;  // Reset this before checking collisions with platforms
    const platforms = this.game.gameObjects.filter((obj) => obj instanceof Platform);
    for (const platform of platforms) {
      if (physics.isColliding(platform.getComponent(Physics))) {
        if (!this.isJumping ) {
          if(physics.velocity.y > 0)
          {
            this.y = platform.y - this.renderer.height;
            this.isOnPlatform = true;
          }
          physics.velocity.y = 0;
          physics.acceleration.y = 0;
        }
      }
    }
  
    // Check if player has fallen off the bottom of the screen
    if (this.y > this.game.canvas.height) {
      this.resetPlayerState();
    }

    // Check if player has no lives left
    if (this.lives <= 0) {
      // Check if player has no lives left
      if (this.lives <= 0) {
        console.log('You lose!');
        window.location.href = "YouLose.html"; //when you lose the game the page will redirect to the you lose page
      }
    }

    // Check if player has collected all collectibles
    if (this.score >= 15) {
      console.log('You win!');
      window.location.href = "YouWin.html"; //when you win the game the page will redirect to the you win page
        }

    //Animation
    let animation = this.getComponent(Animation);
    if(physics.velocity.y <= 0 && this.isJumping){
      animation.currentAnimation = 2;
      animation.speed = 10;
    }
    else if(physics.velocity.x != 0){
      animation.currentAnimation = 1;
      animation.speed = 15;
    }
    else if(physics.velocity.x == 0){
      animation.currentAnimation = 0;
      animation.speed = 10;
    }

    super.update(deltaTime);
  }

  startJump() {
    // Initiate a jump if the player is on a platform
    if (this.isOnPlatform) { 
      this.isJumping = true;
      this.jumpTimer = this.jumpTime;
      this.getComponent(Physics).velocity.y = -this.jumpForce;
      this.isOnPlatform = false;
      this.getComponent(SoundManager).playSound('jump');
    }
  }
  
  updateJump(deltaTime) {
    // Updates the jump progress over time
    this.jumpTimer -= deltaTime;
    if (this.jumpTimer <= 0 || this.getComponent(Physics).velocity.y > 0) {
      this.isJumping = false;
    }
  }

  collidedWithEnemy() {
    // Checks collision with an enemy and reduce player's life if not invulnerable
    if (!this.isInvulnerable) {
      this.lives--;
      this.isInvulnerable = true;
      this.getComponent(SoundManager).playSound('hit');
      //console log lives
      console.log(`Lives: ${this.lives}`);
      // Make player vulnerable again after 2 seconds
      setTimeout(() => {
        this.isInvulnerable = false;
      }, 2000);
    }
  }

  collect(collectible) {
    // Handle collectible pickup
    this.score += collectible.value;
    console.log(`Score: ${this.score}`);
    this.emitCollectParticles(collectible);
  }

  emitCollectParticles() {
    // Create a particle system at the player's position when a collectible is collected
    const particleSystem = new ParticleSystem(this.x, this.y, 'red', 50, 1, 0.5);
    this.game.addGameObject(particleSystem);
    this.getComponent(SoundManager).playSound('collect');//added the sound for collecting the gem
  }

  resetPlayerState() {
    // Reset th players position 
    this.x = 870;
    this.y = -165;
    this.getComponent(Physics).velocity = { x: 0, y: 0 };
    this.getComponent(Physics).acceleration = { x: 0, y: 0 };
    this.direction = 1;
    this.isOnPlatform = false;
    this.isJumping = false;
    this.jumpTimer = 0;
  }

  resetGame() {
    // Reset the game state, which includes the player's state
    this.lives = 3;
    this.score = 0;
    this.resetPlayerState();
  }
}

export default Player;
