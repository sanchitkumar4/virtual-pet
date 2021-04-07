//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage;
function preload()
{
	//load images here
  dogImage= loadImage("images/dogimg.png");
  happyDog= loadImage("images/dogimg1.png");
  
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
   dog = createSprite(200,200,50,40);
  dog.addImage(dogImage);
  dog.scale=0.2;

  foodStock= database.ref('foods');
  foodStock.on("value",readStock)
}


function draw() {  
background (46, 139, 87);

fill("blue");
textSize(20);
text("food remaining: "+foodS,300,400);

if(keyWentDown( UP_ARROW)){
 writeStock(foodS);
 dog.addImage( happyDog);
}


drawSprites();
  //add styles here

  fill("blue");
  textSize(15);
text("press up arrow to feed the dog",250,50)
}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
   x=0
  }
else{
x--;
}
database.ref('/').update({
foods:x
})
}