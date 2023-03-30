var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                
                { "type": "sawblade", "x": 400, "y": groundY - 110 },
                { "type": "sawblade", "x": 600, "y": groundY - 10},
                { "type": "sawblade", "x": 900, "y": groundY - 110},

                { "type": "enemy", "x": 400, "y": groundY - 50},
                { "type": "enemy", "x": 600, "y": groundY-60},

                { "type": "reward", "x": 600, "y": groundY-100},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        /* 
        var hitZoneSize = 25; //assigns a value of 25 as the hitzone size
        var damageFromObstacle = 10; //assigns a value of 10 as the damage for hitting the obstacle
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and stores it in the variable sawBladeHitZone
        sawBladeHitZone.x = 800; //sets the saw blades x to 800
        sawBladeHitZone.y = groundY - 25; // sets the saw blades y to 25 px above the ground
        game.addGameItem(sawBladeHitZone); //adds the hit zone as a game item
        var obstacleImage = draw.bitmap("img/sawblade.png"); // draws the saw blade image and stores it to variable obstacleImage
        sawBladeHitZone.addChild(obstacleImage); // makes obstacleImage as a child of sawBladeHitZone
        obstacleImage.x = -25; //adjusts the images x to align with the hit zone
        obstacleImage.y = -25; //adjusts the images y to align with the hit zone
        */ 
        function createSawBlade(x,y){
            var hitZoneSize = 25; //assigns a value of 25 as the hitzone size
            var damageFromObstacle = 10; //assigns a value of 10 as the damage for hitting the obstacle
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and stores it in the variable sawBladeHitZone
            sawBladeHitZone.x = x; //sets the saw blades x to 800
            sawBladeHitZone.y = y; // sets the saw blades y to 25 px above the ground
            game.addGameItem(sawBladeHitZone); //adds the hit zone as a game item
            var obstacleImage = draw.bitmap("assets/obstacles/sawblade.png"); // draws the saw blade image and stores it to variable obstacleImage
            sawBladeHitZone.addChild(obstacleImage); // makes obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; //adjusts the images x to align with the hit zone
            obstacleImage.y = -25; //adjusts the images y to align with the hit zone
        }
        function createSpike(x, y){
            var hitZoneSize = 25; //assigns a value of 25 as the hitzone size
            var damageFromObstacle = 10; //assigns a value of 10 as the damage for hitting the obstacle
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and stores it in the variable spikeHitZone
            spikeHitZone.x = x; //sets the saw blades x to 800
            spikeHitZone.y = y; // sets the saw blades y to 25 px above the ground
            game.addGameItem(spikeHitZone); //adds the hit zone as a game item
            var obstacleImage = draw.bitmap("assets/obstacles/spike.png"); // draws the saw blade image and stores it to variable obstacleImage
            spikeHitZone.addChild(obstacleImage); // makes obstacleImage as a child of spikeHitZone
            obstacleImage.x = -30; //adjusts the images x to align with the hit zone
            obstacleImage.y = -30; //adjusts the images y to align with the hit zone
        }
        function createEnemy(x, y){
            var enemy = game.createGameItem("enemy", 25);
            var gameItem = draw.rect(50, 50, "red");
            gameItem.x = -25;
            gameItem.y = -25;
            enemy.addChild(gameItem);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -3;
            

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-10);
            }
            enemy.onProjectileCollision = function (){
                game.increaseScore(100);
                enemy.fadeOut();
            }
        }
        function createReward(x, y){
            var reward = game.createGameItem("reward", 25);
            var gameItem = draw.rect(50, 50, "blue");
            gameItem.x = -25;
            gameItem.y = -25;
            reward.addChild(gameItem);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -3;
            

            reward.onPlayerCollision = function (){
                game.increaseScore(100);
                game.changeIntegrity(10);
                reward.fadeOut();
            }
            reward.onProjectileCollision = function (){
                reward.fadeOut();
            }
        }
        for( var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            if(gameItem.type === "sawblade"){
                createSawBlade(gameItem.x, gameItem.y);
            } 
            if(gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y);
            } 
            if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "spike"){
                createSpike(gameItem.x, gameItem.y);
            } 
        }

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
