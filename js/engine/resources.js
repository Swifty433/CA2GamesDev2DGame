// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
  playerIdol1: new Image(), // The Image instance for the player.
  playerIdol2: new Image(), // The Image instance for the player.
  playerIdol3: new Image(), // The Image instance for the player.
  playerIdol4: new Image(), // The Image instance for the player.
  playerIdol5: new Image(), // The Image instance for the player.
  playerIdol6: new Image(), // The Image instance for the player.
  playerIdol7: new Image(), // The Image instance for the player.
  playerIdol8: new Image(), // The Image instance for the player.
  playerIdol9: new Image(), // The Image instance for the player.
  playerIdol10: new Image(), // The Image instance for the player.

  running1: new Image(), // The Image instance for the player walking animation frame 1.
  running2: new Image(), // The Image instance for the player walking animation frame 2.
  running3: new Image(), // The Image instance for the player walking animation frame 3.
  running4: new Image(), // The Image instance for the player walking animation frame 4.
  running5: new Image(), // The Image instance for the player walking animation frame 5.
  running6: new Image(), // The Image instance for the player walking animation frame 6.
  running7: new Image(), // The Image instance for the player walking animation frame 7.
  running8: new Image(), // The Image instance for the player walking animation frame 8.
  enemy: new Image(), // The Image instance for the enemy.
  backround: new Image(), // The Image instance for the background.  
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
  jump: './resources/audio/jump.mp3', // The file path of the jump sound.
  collect: './resources/audio/collect.mp3', // The file path of the collect sound.
  // Add more audio file paths as needed
};

// Set the source of the player image.
Images.playerIdol1.src = './resources/images/player/playerIdol (1).png'; // Update the image path
Images.playerIdol2.src = './resources/images/player/playerIdol (2).png'; // Update the image path
Images.playerIdol3.src = './resources/images/player/playerIdol (3).png'; // Update the image path
Images.playerIdol4.src = './resources/images/player/playerIdol (4).png'; // Update the image path
Images.playerIdol5.src = './resources/images/player/playerIdol (5).png'; // Update the image path
Images.playerIdol6.src = './resources/images/player/playerIdol (6).png'; // Update the image path
Images.playerIdol7.src = './resources/images/player/playerIdol (7).png'; // Update the image path
Images.playerIdol8.src = './resources/images/player/playerIdol (8).png'; // Update the image path
Images.playerIdol9.src = './resources/images/player/playerIdol (9).png'; // Update the image path
Images.playerIdol10.src = './resources/images/player/playerIdol (10).png'; // Update the image path

Images.running1.src = './resources/images/player/PlayerRun/PlayerRun (1).png'; // Update the image path
Images.running2.src = './resources/images/player/PlayerRun/PlayerRun (2).png'; // Update the image path
Images.running3.src = './resources/images/player/PlayerRun/PlayerRun (3).png'; // Update the image path
Images.running4.src = './resources/images/player/PlayerRun/PlayerRun (4).png'; // Update the image path
Images.running5.src = './resources/images/player/PlayerRun/PlayerRun (5).png'; // Update the image path
Images.running6.src = './resources/images/player/PlayerRun/PlayerRun (6).png'; // Update the image path
Images.running7.src = './resources/images/player/PlayerRun/PlayerRun (7).png'; // Update the image path
Images.running8.src = './resources/images/player/PlayerRun/PlayerRun (8).png'; // Update the image path



// Set the source of the enemy image.
Images.enemy.src = './resources/images/enemy/enemy.png'; // Update the image path

// Set the source of the background image.
Images.backround.src = './resources/images/background/Yellow.png'; // Update the image path

// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
