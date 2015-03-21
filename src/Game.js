Card.Game = function(game){
	this.cards=null;
	cards=new Array();
	faceDownButton = new Array();
	count = 52;
	firstClickIndex = 0;
	secondClickIndex = 0;
	click = 0;
};
Card.Game.prototype = {
	

	create: function(){

		// Add all display elements.
		this.myScore = 0;
		this.seconds = 0;
		this.mySeconds = 0; 
		this.myMinutes = 0;
		this.fontStyle = { font: "30px Cinzel Decorative", fill: "#FFCC00" };
		this.add.sprite(0, 0, 'background2');
		this.add.sprite(0,0,'strip'); 
		this.add.button(670, 0, 'button-pause', this.managePause, this,1,0,2);
		this.add.button(730, 0, 'button-close', this.close, this,1,0,2);
   		this.timerText = this.game.add.text(10, 10, 'Time ' + this.mySeconds,this.fontStyle);
   		this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
		
   		this.displayFaceDownCards();
 	},
 	managePause: function(){
		// pause the game
		this.game.paused = true;
		var blurImage = this.add.sprite(0,0,'blur');
		var pausedText = this.add.text(100, 250, "Game paused.\nTap anywhere to continue.", this.fontStyle);
		// set event listener for the user's click/tap the screen
		this.input.onDown.add(function(){
		// remove the pause text
		blurImage.destroy();
		pausedText.destroy();
		// unpause the game
		this.game.paused = false;
		}, this);  
	},
 	displayFaceDownCards: function() {
 		var chars = ["h", "s", "d", "c"];
 		
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 13; j++) {
				cards[j+13*i] = { name: (j+1)+ chars[i], button: null, image: null }
			};
		};

		for (var i = cards.length-1; i > 0; i--) { 
			this.randomize(cards);
		}

		counter = 0;
		
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 11; c++){


		   		image = this.add.sprite(2+c*72, 56+r*106, cards[counter].name);
		   		button = this.add.button(2+c*72, 56+r*106,"card-back", this.faceDownButtonClicked, this);
				button.counter = counter;		   		

		   		cards[counter].button = button;
		   		cards[counter].image = image;

				counter++;
				if (counter == 52) { break; }
			 }
			 if (counter == 52) { break; }
		}
	
		
 	},

 	faceDownButtonClicked: function(button) {
 		button.visible = false;
 		click++;
 		
 		if(click==1){
 			firstClickIndex = button.counter;
 			
 		}
 		else if(click==2){
 			secondClickIndex = button.counter;
 			click = 0;
 			this.isMatchFound();
 		}
 	},
 	isMatchFound: function(){
 		
 		if((parseInt(cards[firstClickIndex].name.match(/\d+/))) == (parseInt(cards[secondClickIndex].name.match(/\d+/))))
 		{	
			cards[firstClickIndex].image.kill();
 			cards[secondClickIndex].image.kill();
 			count = count - 2;
 			this.myScore = this.myScore + 10;
 			if(count == 0){
 				this.state.start("Leaderboard",true, false,this.myScore,this.myMinutes,this.mySeconds);
 			}
 		}
 		else
 		{
 			setTimeout(function(){cards[firstClickIndex].button.visible = true; cards[secondClickIndex].button.visible = true;
 			secondClickIndex = 0;},300);
 		}
	},
 	randomize: function(){
		
		for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    	}
   		return cards;
	},
	close: function(){
		
		this.state.start("MainMenu");
	},
	
	updateCounter: function() {
		this.seconds++;
		this.myMinutes =Math.floor(this.seconds/ 60);
		this.mySeconds = this.seconds % 60;
		if (this.mySeconds < 10){
	    	this.timerText.setText('Time '+ this.myMinutes + ':'+ '0' + this.mySeconds);
 	    }
 	   
	    else
 	    {
	    	this.timerText.setText('Time ' + this.myMinutes + ':' + this.mySeconds);
  		}
	},
	update: function(){
		
	}

};