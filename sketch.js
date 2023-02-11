var bucket,background,bombticket,ticket,redeem;
var speedbuff;
var bucketimg,bombimg,bgImg,redeemimg,ticketimg,speedimg,speedbuff;
var gamestate=0


function preload() {
  bucketimg = loadImage("assets/bucket.png");
  bombimg= loadImage("assets/bombdebuff.png");

  bgImg = loadImage("assets/background.jpg");
  redeemimg=loadImage("assets/redeem.png");
  ticketimg=loadImage("assets/ticket.png");
  speedimg=loadImage("assets/speedbuff.png");
  //explosionimg=loadImage("assets/exp-bg.png");
  //exp_sd=loadSound("assets/explosion.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bucket=createSprite(750,500, 50, 50);
  bucket.addImage(bucketimg);
  bucket.scale = 0.3;
  bucket.debug = true;
  bucket.setCollider("rectangle",0,0,300,500);

  bomb=createSprite(400,200,50,50);
  bomb.addImage(bombimg)


  redeem=createSprite(400,400,50,50)
  redeem.addImage(redeemimg)

  ticket=createSprite(400,500,50,50)
  ticket.addImage(ticketimg)
  speedbuff=createSprite(400,400,50,50)
  speedbuff.addImage(speedimg)



}

function draw() {

  if(keyDown("UP_ARROW")||touches.length>0){
    if(bucket.x> 0 ){
     bucket.x = bucket.x-30
    }
          
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    if(bucket.x<width){
   bucket.x = bucket.x+30;
    }
  }

  background(255,255,255); 
  image(bgImg,0,0,width,height)
  drawSprites();
}