Card.Game = function(game){
	this.cards=null;
	cards=new Array();
	faceDownButton = new Array();
	counter = 0;
	count = 52;
	firstClickIndex = 0;
	secondClickIndex = 0;
	click = 0;
	score = 0;
	scoreText =0;
	var timeLimit;
	var mySeconds;
	timeText = null;
    this._fontStyle = { font: "30px Old English", fill: "#FFCC00" };
	
};
Card.Game.prototype = {

	create: function(){

		// Add all display elements.
		this.add.sprite(0, 0, 'background2');
		this.add.sprite(0,0,'strip'); 
		this.add.button(670, 0, 'button-pause', this.managePause, this,1,0,2);
		this.add.button(730, 0, 'button-close', this.close, this,1,0,2);
   		timeText = this.add.text( 10, 10, '00:00' , this._fontStyle);
   		scoreText = this.add.text( 500, 10, 'Score ', this._fontStyle);
   	
   		this.displayFaceDownCards();
 	},
 	managePause: function(){
		// pause the game
		this.game.paused = true;
		var blurImage = this.add.sprite(0,0,'blur');
		// add proper informational text
		var pausedText = this.add.text(100, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
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
		
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 11; c++){


		   		image = this.add.sprite(2+c*72, 52+r*102, cards[counter].name);
		   		button = this.add.button(2+c*72, 52+r*102,"card-back", this.faceDownButtonClicked, this);
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
 		//alert(button.counter);
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
 			if(count == 0){
 				//alert("game over");
 				this.state.start("Leaderboard",true, false, score);
 			}
 			score = score + 10;
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

	update: function(){
		scoreText.setText('Score: '+score);
		mySeconds =Math.round(this.time.totalElapsedSeconds());
		myMinutes =Math.floor(mySeconds / 60);
	    if ((mySeconds % 60) < 10){
	    	mySeconds = timeText.setText('Time '+ myMinutes + ':'+ '0' + (mySeconds % 60));
	    }
	    else
	    {
	    	timeText.setText('Time ' + myMinutes + ':' + (mySeconds % 60));
	    } 
	}
	

};