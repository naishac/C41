class Form{


    constructor(){

       this.title = createElement("h2");
       this.input = createInput("name");
       this.button = createButton("play");
       this.button2 = createButton("reset");
       this.greeting = createElement("h3");

    }

    display(){

        this.title.html("Car Racing Game");
        this.title.position(width/2-80,100);
        this.input.position(width/2-80,height/2);
        this.button.position(width/2-25,height/2+50);
        this.button2.position(width/2+550,height/2-150)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html(" hello "+player.name);
            this.greeting.position(width/2-60,250);
        })

        this.button2.mousePressed(()=>{

            player.updateCount(0);
            game.update(0);

        })

    }

    hide(){

        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

}
