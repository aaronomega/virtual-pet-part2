class Food {
    constructor(){
        
       
        this.image = loadImage("images/Milk.png");
      this.foodStock = 0;
     this.last_fed ;
        
       
    }
    
    getfoodStock(){
    return this.foodStock; 
    }
    UpdatefoodStock(foodStock){
        this.foodStock = foodStock;
    }
    getFedTime(last_fed){
        this.last_fed=last_fed;
    }
    deductfood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }

    display(){
        var i = 0;
        var x = 80,y =100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if (this.foodStock !=0){
            for (i = 0; i < this.foodStock; i++) {
                if(i%10===0){
                    x=80;
                    y=y+50;

                }
                image(this.image,x,y,50,50);
                x=x+30 ;
              }
              
        }
    }
}