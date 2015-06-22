// Enemies our player must avoid
var enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started


    var enemySpeed; //creating something to give enemy speed


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.



// Draw the enemy on the screen, required method for game
enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//var allEnemies;

var allEnemies = [] ; // create an array of Enemy instances
var enemy = new Enemy();
for (i=0; i<=4; i++) {
    enemy = new Enemy();
  allEnemies[i] = new Enemy();
  allEnemies.push(enemy);
}

//allEnemies.forEach(function() {}); // define a function to operate on each 


var player = new Player();

var Player = function () { 

}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
}

Player.prototype.update = function(dt) {
    
}

Player.prototype.handleInput = function(e){
  console.log(e);
  if (e == 'right'){
    // put code for x cordinate to + value
  } else if (e == 'left'){
    // put code so x cordinate - value
  } else if (e == 'up'){
    // put code so y cordinate + value
  } else if (e == 'down'){
    // put code so y cordinate - value 
  } else {
    console.log("key not recognize");
  }

};





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
