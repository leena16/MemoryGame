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

	init: function(){
		

	},
	
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

		

/*var n = 52;
var card_names = new Array();
for (var i = 0; i < n; i++)
    card_names.push({name: '2c', pairNum:1, x:null, y:null}, {name: '3c', pairNum:2, x:null, y:null}); */
/* card_names[0] = {name: '2c', pairNum:1, x:null, y:null};
 card_names[1] = {name: '3c', pairNum:2, x:null, y:null};
 card_names[2] = {name: '4c', pairNum:3, x:null, y:null};
 card_names[3] = {name: '5c', pairNum:4, x:null, y:null};
 card_names[4] = {name: '6c', pairNum:5, x:null, y:null};
 card_names[5] = {name: '7c', pairNum:6, x:null, y:null};
 card_names[6] = {name: '8c', pairNum:7, x:null, y:null};
 card_names[7] = {name: '9c', pairNum:8, x:null, y:null};
 card_names[8] = {name: '10c', pairNum:9, x:null, y:null};
 card_names[9] = {name: 'ac', pairNum:10, x:null, y:null};
 card_names[10] = {name: 'jc', pairNum:11, x:null, y:null};
 card_names[11] = {name: 'kc', pairNum:12, x:null, y:null};
 card_names[12] = {name: 'qc', pairNum:13, x:null, y:null};

 card_names[13] = {name: '2s', pairNum:1, x:null, y:null};
 card_names[14] = {name: '3s', pairNum:2, x:null, y:null};
 card_names[15] = {name: '4s', pairNum:3, x:null, y:null};
 card_names[16] = {name: '5s', pairNum:4, x:null, y:null};
 card_names[17] = {name: '6s', pairNum:5, x:null, y:null};
 card_names[18] = {name: '7s', pairNum:6, x:null, y:null};
 card_names[19] = {name: '8s', pairNum:7, x:null, y:null};
 card_names[20] = {name: '9s', pairNum:8, x:null, y:null};
 card_names[21] = {name: '10s', pairNum:9, x:null, y:null};
 card_names[22] = {name: 'as', pairNum:10, x:null, y:null};
 card_names[23] = {name: 'js', pairNum:11, x:null, y:null};
 card_names[24] = {name: 'ks', pairNum:12, x:null, y:null};
 card_names[25] = {name: 'qs', pairNum:13, x:null, y:null};

 card_names[26] = {name: '2d', pairNum:14, x:null, y:null};
 card_names[27] = {name: '3d', pairNum:15, x:null, y:null};
 card_names[28] = {name: '4d', pairNum:16, x:null, y:null};
 card_names[29] = {name: '5d', pairNum:17, x:null, y:null};
 card_names[30] = {name: '6d', pairNum:18, x:null, y:null};
 card_names[31] = {name: '7d', pairNum:19, x:null, y:null};
 card_names[32] = {name: '8d', pairNum:20, x:null, y:null};
 card_names[33] = {name: '9d', pairNum:21, x:null, y:null};
 card_names[34] = {name: '10d', pairNum:22, x:null, y:null};
 card_names[35] = {name: 'ad', pairNum:23, x:null, y:null};
 card_names[36] = {name: 'jd', pairNum:24, x:null, y:null};
 card_names[37] = {name: 'kd', pairNum:25, x:null, y:null};
 card_names[38] = {name: 'qd', pairNum:26, x:null, y:null};

 card_names[39] = {name: '2h', pairNum:14, x:null, y:null};
 card_names[40] = {name: '3h', pairNum:15, x:null, y:null};
 card_names[41] = {name: '4h', pairNum:16, x:null, y:null};
 card_names[42] = {name: '5h', pairNum:17, x:null, y:null};
 card_names[43] = {name: '6h', pairNum:18, x:null, y:null};
 card_names[44] = {name: '7h', pairNum:19, x:null, y:null};
 card_names[45] = {name: '8h', pairNum:20, x:null, y:null};
 card_names[46] = {name: '9h', pairNum:21, x:null, y:null};
 card_names[47] = {name: '10h', pairNum:22, x:null, y:null};
 card_names[48] = {name: 'ah', pairNum:23, x:null, y:null};
 card_names[49] = {name: 'jh', pairNum:24, x:null, y:null};
 card_names[50] = {name: 'kh', pairNum:25, x:null, y:null};
 card_names[51] = {name: 'qh', pairNum:26, x:null, y:null};  */

 /*var match = new Array( 
 		[card_names[0],card_names[22]],
 		[card_names[1],card_names[23]],
 		);*/
 



		for (var i = cardNames.length-1; i > 0; i--) { 
		this.randomize(cardNames);
		}
		//console.log(card_names);

		//
		var counter = 0;
		for(var r = 0; r < 11; r++){
			for(var c = 0; c < 5; c++){
		   		board[r][c] = cardNames[counter];
		   		this.add.sprite(2+r*72, 52+c*102,board[r][c]);
		   		//console.log(board[2][11]);
		   		if(!(board[r][c]==null)){
		   		this.add.sprite(2+r*72, 52+c*102,'card-back');
		   		}
				counter++;
			 }
		}
   	
   	/*if(r<11 && c==0){
	this.add.sprite(2+r*72, 52,board[r][c]);
	//this.add.sprite(2+r*72,52,'card-back');
	}
	else if(r<22 && c==1){
	this.add.sprite(2+r*72, 156,board[r][c]);

	}
	else if(r<33 && c==2){
	this.add.sprite(2+r*72, 260,board[r][c]);

	}
	else if(r<44 && c==3){
	this.add.sprite(2+r*72, 364,board[r][c]);

	}
	else if(r<52 && c==4){
	this.add.sprite(2+r*72, 468,board[r][c]);

	}*/
	//this.add.sprite(2+r*72, 156,board[r][c]);
	
 
 
 
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