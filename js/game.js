  class Game {
    
    constructor(){



    }

    getState(){

        database.ref("gameState").on("value",function(data){
            gameState= data.val()
        })

    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){

        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        car2 = createSprite(250,250);
        car3 = createSprite(400,250);
        car1 = createSprite(100,250);
        car4 = createSprite(550,250);

        car1.addImage("car1", car1Img);
        car2.addImage("car2", car2Img);
        car3.addImage("car3", car3Img);
        car4.addImage("car4", car4Img);

        cars = [car1, car2, car3, car4];

    }

    play(){


        form.hide();
        textSize(25);
        text("game started",120,120);
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers != undefined){
            background("green");
            image(trackImg,0,-4*displayHeight,displayWidth,5*displayHeight);
            var index = 0;
            var x = 175;
            var y = 0;
            for(var plr in allPlayers){
                index++;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                    fill("red");
                    ellipse(cars[index-1].x, cars[index-1].y,80,80);
                    camera.position.x = width/2;
                    camera.position.y = cars[index-1].y;
                }


            }
        
        }

        if(keyDown(UP_ARROW)&& player.index != null){
            player.distance += 50;
            player.update();
        }

        if(player.distance >= 3450){
            gameState = 2;
            player.rank++;
            
            Player.updateCarsAtEnd(player.rank);
        }



        drawSprites();

    }

    end(){

        console.log("game has ended");
        console.log(player.rank);


    }

  }