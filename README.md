# Arcade Game  Project
# [Game Link](https://swamykankipati.github.io/Frontend-Nanodegree-Arcade-Game/index.html)

## Game  Functionality

  -Player should reach water mark without colliding enemies and should return popup like winning message

  -Player should not move off screen

## Table of Contents

  index.html file
  CSS folder
  Images folder
  Js folder

## Instructions

  Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

 Step1: How to Run the game  

 Step2: Implementing  the game

 Step3: Playing the game

Step1: How to Run the game  

1.  Clone/Download  the project From  git repository  

2.  Extract Zip file

3.  make the project Error fee by implementing the player class

Step2: Implementing  the game

1.  Implementing the Enemy object  

    -   we passed parameters x,y, speed (speed is used for speed) using this constructor.

    -   initiating the enemy location.

    -   set the speed of the enemy  using math.random to move with random speed.

    -   implement the collision  technique in the ememy.update().

    -   whenever the player collided with the enemy update() makes the player to move to
        initial-Position.

    -   created allEnemies[] object to push all the enemies.
    -   created ep & ep1 [] its store the positions of enemy values

2.  Implementing the Player object

    -   Create player object similar to enemy object.

    -   Passed two parameters x  for enemies and y for Player (directions).

    -   Update and render(), like enemy.

    -   Player.handleinput method write the functionality how player should move.

    -   Created alert to display a message when the player successfully reaches the water.

-   added  viewport tag  and h1 element into index.html page and changed the  color & width of body in css file 

Step3:How to initiate the game:

## For easy access I used following steps:

      - Use 200 ok Web-Server to run this code

      - I add extension 200 ok Web-Server in chrome Web-Browser

      - After extension we add route folder of the project in that if we want to change port we can.

       - In 200 ok Web-Server we have button called launcher when we click on it, we access index.html file to run the game below steps

       - Move the player using Left, Right, Up & Down arrows to reach the destination.
       - Move the player without any collision with bugs(Enemy).

       - If  player collide with enemy then the player return to initial position

# Technologies used in the Game:

-   I used functions called closures and prototype chains which are in Object-Oriented JavaScript. The 'this' keyword Superclasses and subclasses HTML5 Canvas and SweetAlert is a Javascript Library. It is used to display popup message after complete the game.

# Tools used to develop the code in effective way:
[Sublime Text](https://www.sublimetext.com/3)

[Atom](https://atom.io/)

 Sublime and Atom both are Text-Editors.

# Resources
[MDN 2D](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)

[W3SchoolsES6](https://www.w3schools.com/js/js_es6.asp)

[Udacity Js Link](https://github.com/udacity/frontend-nanodegree-arcade-game)

# I refer below link to initiate the project

[Skelton code](https://github.com/udacity/frontend-nanodegree-arcade-game)

# Dependencies

HTML5
Javascript ES6
CSS
Javascript Library SweetAlert
  [Sweet Alert Link] (https://sweetalert.js.org/guides/)
