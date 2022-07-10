var b,bI;
var a,aI;
var s,sI;

var heart1, heart2, heart3;
var h1,h2,h3;

var aG;

var life = 3


function preload(){
  
  bI=loadImage("b2.jpg")
	aI=loadImage("a.png")
	sI=loadImage("s3.png")
	heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  
	createCanvas(windowWidth,windowHeight);
    b=createSprite(200,300,windowWidth/2,windowHeight)
	b.addImage(bI)
	b.scale=1.5
	
    s=createSprite(100,600,10,10)
	s.addImage(sI)
	s.scale=0.25
	s.debug=true;
	heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
  
   

    //creating group for zombies    
    aG = new Group();
}

function draw() {
  background(0); 
if(life===3){
  heart1.visible = false
  heart2.visible = false
  heart3.visible = true
}
if(life===2){
  heart1.visible = false
  heart2.visible = true
  heart3.visible = false
}
if(life===1){
  heart1.visible = true
  heart2.visible = false
  heart3.visible = false
}
if(life===0){
  heart1.visible = false
  heart2.visible = false
  heart3.visible = false
  player.destroy();
}
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("LEFT_ARROW")||touches.length>0){
 s.x = s.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 s.x = s.x+30
}


//release bullets and change the image of shooter to shooting position when space is pressed

//player goes back to original standing image once we stop pressing the space bar


//destroy zombie when player touches it
if(aG.isTouching(s)){
 

 for(var i=0;i<aG.length;i++){     
      
  if(aG[i].isTouching(s)){
       aG[i].destroy();
       life = life-1
       } 

 }

}

//calling the function to spawn zombies
enemy();

drawSprites();
}



//creating function to spawn zombies
function enemy(){
  if(frameCount%70===0){

    //giving random x and y positions for zombie to appear
    a = createSprite(random(0,windowWidth),10,40,40)


    a.addImage(aI)
    a.scale = 0.1
    a.velocityY=10
    a.debug= true
    a.setCollider("rectangle",0,0,400,400)
   
    a.lifetime = 400
   aG.add(a)
  }

}
