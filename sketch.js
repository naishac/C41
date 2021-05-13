var database;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4;
var cars
var car1Img, car2Img, car3Img, car4Img;
var trackImg;

function preload(){

  car1Img = loadImage("images/images/car1.png");
  car2Img = loadImage("images/images/car2.png");
  car3Img = loadImage("images/images/car3.png");
  car4Img = loadImage("images/images/car4.png");

  trackImg = loadImage("images/images/track.jpg");

}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-40, displayHeight-200);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

}