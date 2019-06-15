'use strict';
// Enemies our player must avoid

var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=y;
    this.y=y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    // speed  is parameter of the enemies
    this.speed = speed;
    // to display bugs
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 505){
      this.x = 0;
    }else if (player.x < this.x + 60 &&
      player.x + 60 > this.x &&
    player.y < this.y + 60 &&
     player.y + 60 > this.y) {
      player.x = 200;
      player.y= 400;

    }

};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

    let Player = function(x,y){
    this.x=200;
    this.y=400;
    this.sprite =  'images/char-cat-girl.png';

  }
  // Now write your own player class

    let player = new Player();
Player.prototype.update=function(dt){
  // to palyer reached -1 postion game over message  will generate
  if (this.y <= -1) {
    // clear the allEnemies  positions enemies
    allEnemies  = [];
    swal({

      title: "Congralations!",
      text: "Awesome you're a Champ",
      icon: "success",
      button: "RePlay"
    }).then(regenrate =>{
      if(regenrate) {
        location.reload();

      }
    });

    this.x = 200;
    this.y=400;


  }

}
// This class requires an update(), render() and

  Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// a handleInput() method.

  Player.prototype.handleInput=function(move){
    // to move the player left-side use the left arrow
    if (move === "left" && this.x > 10) {
      this.x -= 101;

    }
    // to move the player right-side to use the right arrow
    else if (move === "right" && this.x < 400) {

      this.x += 101;
    }
    else if (move === "up" && this.y > -1) {
      this.y -= 100;

    }
    else if (move === "down" && this.y <400) {
      this.y += 100;

    }
  };
  // Draw the enemy on the screen, required method for game

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
 //created allEnemies [] array
var allEnemies = [];

//created  ep array its store the positions of enemy
let ep=[240,150];
//created  ep1 array its store the positions of enemy

let ep1=[40,90];
/* created variable named as postionofEnemy its store the
enemypostions values  to conact the two array elements like ep1 array and ep values*/

let postion_Enemy=ep.concat(ep1);
// to push the values in enemy with the help of for loop
for(let k in postion_Enemy){
  let enemy = new Enemy(0,postion_Enemy[k], 100 + Math.floor(Math.random() * 200));
  allEnemies.push(enemy);
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
