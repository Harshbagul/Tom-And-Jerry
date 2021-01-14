var jerry
  var tom
 var ground
 
function preload() {
    //load the images here
   gardenImg = loadImage("garden.png");

    jerrylastImg = loadImage("jerryFour.png");
    jerry2Img = loadAnimation("jerryTwo.png","jerryThree.png");
    jerry1Img = loadImage("jerryOne.png")

    tom1Img = loadImage("tomFour.png");
    tomRunImg =  loadAnimation("tomTwo.png","tomThree.png");
    tomLastImg = loadImage("tomOne.png")

} 
 
 function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here

    garden = createSprite(0,0,700,500);
    garden.addImage(gardenImg,"gardenImg");
   garden.scale = 2

    jerry = createSprite(100,500,20,20);
  jerry.addAnimation(jerry1Img);
    jerry.scale = 0.2;

    tom = createSprite(700,500,20,20);
   tom.addAnimation(tom1Img);
    tom.scale = 0.2;


}

function draw() {
     background(220);
  
  text(mouseX + ',' + mouseY,10,45)
  
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width/2 - jerry.width/2)){
      tom.addAnimation(tom2Img)
     tom.changeAnimation(tom1Img)

    }
    

    if(tom.collide(jerry)){
    tom.velocityX = 0 ;
    tom.addAnimation(tomRunImg)
    tom.changeAnimation(tomLastImg)

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
  if(keyCode === LEFT_ARROW){
     tom.velocityX = -5
   tom.addAnimation(tom1Img)
   tom.changeAnimation(tomRunImg)

   jerry.addAnimation(jerry1Img)
   jerry.changeAnimation(jerry2Img,"run")
  }

}




