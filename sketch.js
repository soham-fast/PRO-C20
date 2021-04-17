var cat , catImg,catImg2;
var mouse,mouseImg,mouseImg2;
var bgImg;

function preload() {
    //load the images here
    catImg=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg=loadImage("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    bgImg=loadImage("images/garden.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(700,700,60,20);
    cat.addImage("catImg",catImg);
    cat.addAnimation("catImg2",catImg2);
    cat.scale=0.2;

     mouse=createSprite(200,700,60,60);
     mouse.addImage("mouseImg",mouseImg);
     mouse.addAnimation("mouseImg2",mouseImg2);
     mouse.scale=0.1;
    }

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
        if (keyDown("left")){
            cat.x=cat.x-3;
            cat.changeAnimation("catImg2",catImg2);
    
        }

        if(cat.x-mouse.x < cat.width/2 + mouse.width/2){
            mouse.changeAnimation("mouseImg2",mouseImg2);
        }
    console.log(cat.x-mouse.x)
      //For moving and changing animation write code here
    
    
    
    
    drawSprites();
}


