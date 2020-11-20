//Create variables here
var Dog, dog_IMG, happydog_IMG, dataBase,  foodStock,fedtime,last_fed,feed,addFood,FoodObj;
function preload()
{
  dog_IMG = loadImage("images/dogImg.png");
  happydog_IMG = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(900, 900);
  dataBase = firebase.database();

 FoodObj= new Food ();
 foodStock = dataBase.ref('foodStock');
 foodStock.on("value",readStock);
 
   Dog = createSprite(500,250,50,50);
    Dog.addImage(dog_IMG);
   Dog.scale=0.1;

   feed=createButton("feed the dog");
   feed.position(700,95);
   feed.mousePressed(feedDog);
   
   AddFood=createButton("Add more food");
   AddFood.position(800,95);
   AddFood.mousePressed(addFood);
}


function draw() {  

  background(46, 139, 87);
    FoodObj.display();
    Dog.display();
  fedtime = dataBase.ref('feedtime');
  fedtime.on("value",function(data){
  last_fed=data.val();
  });
   
  //add styles here

 



 fill("black");
 /*text("food remaining =" + foodStock,300,80 );
 fill("brown");
*/
if (last_fed>=12){
text("Last fed : "+ last_fed%12 +"pm",350,30 );
}
else if(last_fed==0){
  text("Last fed : 12pm",350,30);
}
else{
  text("Last feed :"+last_fed+"am");
}
 drawSprites(); 
}

function readStock(data){
  food= data.val();
  FoodObj.UpdatefoodStock(food);
}

function feedDog (){
  Dog.addImage(happydog_IMG);
  FoodObj.updatefoodStock(FoodObj.getfoodStock()-1);
database.ref('/').update({
food:FoodObj.getfoodStock(),
fedtime:hour()
})
}
function addFood (){
  foodStock++
  dataBase.ref('/').update({
   food:foodStock
    })
}

