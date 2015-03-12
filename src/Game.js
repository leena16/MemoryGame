Card.Game = function(game){
	board = new Array(11);
		for(i = 0; i < 11; i++) {
			board[i] = new Array(5);
		}
	this.cards=null;
	cardNames=new Array();
	var change;
	var timeLimit;
  	var t1;
    var mySeconds;
    myCountdownSeconds = 10;
    timesUp = null;
    this._fontStyle = { font: "30px Old English", fill: "#FFCC00", stroke: "#333", strokeThickness: 5};
	
};
Card.Game.prototype = {

	create: function(){
		this.add.sprite(0, 0, 'background2');
		this.add.sprite(0,0,'strip'); 
		// add pause button and close button
		this.add.button(670, 0, 'button-pause', this.managePause, this,1,0,2);
		this.add.button(730, 0, 'button-close', this.close, this,1,0,2);

		t1 = this.add.text( 400, 10, timesUp,this._fontStyle);
   		t = this.add.text( 10, 10, 'Time: ' + myCountdownSeconds,this._fontStyle);
   	
   	
   		//var cards =[];
		
 		var chars = ["h", "s", "d", "c"];

		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 13; j++) {
				cardNames[j+13*i]= (j+1)+ chars[i];
			};
		};


		for (var i = cardNames.length-1; i > 0; i--) { 
		this.randomize(cardNames);
		}
		

		
		var counter = 0;
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 11; c++){
		   		board[c][r] = cardNames[counter];
		   		this.add.sprite(2+c*72, 52+r*102,board[c][r]);
		   		/*if(!(board[r][c]==null)){
		   			for(var i = 0; i < 11; i++){
		   				for(var j = 0; j < 5; j++){
		   					faceDown[i][j] = this.add.sprite(2+r*72, 52+c*102,'card-back');
		   				}
		   			}
		   		}*/
				counter++;
			 }
		}
   	
   		//faceDown[i][j].inputEnabled = true;
   		//faceDown[i][j].event.onDown.add(this.flip,this);
   
 },


	randomize: function(){
		
		for (var i = cardNames.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardNames[i];
        cardNames[i] = cardNames[j];
        cardNames[j] = temp;
    	}
   		return cardNames;
		
	},
	

	close: function(){
		this.state.start("MainMenu");
	},
	managePause: function(){
		// pause the game
		this.game.paused = true;
		
		
		// add proper informational text
		//var pausedText = this.add.text(200, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
		var blurScreen = this.add.sprite(0,0,'blur')
		var pausedText = this.add.sprite(170, 50, 'framescroll');
		

		//var resume = this.add.button(300,320,'button-resume',this.resumeScreen,this,1,0,2);
		var resume = this.add.button(300,320,'button-resume');
		//this.timer.pause();

		this.add.tween(pausedText,resume)
			.to({ x: 400 },400)
			.start();
  	
   /*	resumeScreen: function(){
	   			blurScreen.destroy();
				pausedText.destroy();
				resume.destroy();
				//this.timer.resume();

				// unpause the game
				this.game.paused = false;
			}, */

   	


		
		//this.add.sprite(100,100,'frame');
		// set event listener for the user's click/tap the screen
		this.input.onDown.add(function(){
			// remove the pause text
			blurScreen.destroy();
			pausedText.destroy();
			resume.destroy();
			//this.timer.resume();

			// unpause the game
			this.game.paused = false;
		}, this);
	},

	
	update: function(){

	
		var timeLimit = 120;
	  	
	    mySeconds =Math.round(this.time.totalElapsedSeconds());

	    
	    myCountdownSeconds =timeLimit - mySeconds;
	    myMinutes =Math.floor(myCountdownSeconds / 60);
	    

	    if (myCountdownSeconds <= 00 && myMinutes <= 0) 
	    {	
	    	
	        timesUp = 'Time is up!';   
	        t1.setText(timesUp);
	        timeLimit.destroy();

	    }
	    else if ((myCountdownSeconds % 60) < 10){
	    	myCountdownSeconds = t.setText('Time '+ myMinutes + ':'+ '0' + (myCountdownSeconds % 60));
	    }
	    
	   
	    else
	    {
	    	t.setText('Time ' + myMinutes + ':' + (myCountdownSeconds % 60));
	    } 
	}
};